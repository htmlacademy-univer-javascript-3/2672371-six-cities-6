import MainPage from "./main_page";
import Login from './login'
import Favorites from "./favorites";
import ErrorPage from "./error_page";
import Property from "./property.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AppRoute from "../routes";
import PrivateRoute from "../private-route";
import AuthorizationStatus from "../private-routes";
import Offer from "../types/offer.ts";

interface AppProps {
	offers: Offer[];
}
function App({offers}: AppProps): JSX.Element {
	return(
		<BrowserRouter>
			<Routes>
				<Route 
					path={AppRoute.Main}
					element={<MainPage offers={offers} />}
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
							<Favorites offers={offers}/>
							

						</PrivateRoute>
					}

				/>
				<Route 
					path={`${AppRoute.Offer}/:id`}
					element={<Property offers={offers} />}
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