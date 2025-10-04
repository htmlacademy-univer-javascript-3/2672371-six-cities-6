import MainPage from "./main_page";
import Login from './login'
import Favorites from "./favorites";
import ErrorPage from "./error_page";
import OfferCard from "./offer_card";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRoute from "../routes";
import PrivateRoute from "../private-route";
import AuthorizationStatus from "../private-routes";

function App(): JSX.Element {
	return(
		<BrowserRouter>
			<Routes>
				<Route 
					path={AppRoute.Main}
					element={<MainPage />}
				/>
				<Route 
					path={AppRoute.Login}
					element={<Login />}
				/>
				<Route 
					path={AppRoute.Favorites}
					element={
						<PrivateRoute
							authorizationStatus={AuthorizationStatus.NoAuth}
						>
							<Favorites />
							

						</PrivateRoute>
					}

				/>
				<Route 
					path={AppRoute.Offer}
					element={<OfferCard isPremium={false} imgUrl={""} cost={0} dayOrNight={""} isBookmarks={false} name={""} typeOfApartment={""} />}
				/>
				<Route 
					path='*'
					element={<ErrorPage />}
				/>
			</Routes>
		</BrowserRouter>

	);
}

export default App;