import {Navigate} from 'react-router-dom';
import AuthorizationStatus from './private-routes';
import AppRoute from './routes';

type PrivateRouteProps = {
	authorizationStatus: AuthorizationStatus;
	children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps){
	return(
		authorizationStatus === AuthorizationStatus.Auth ?
		children : <Navigate to={AppRoute.Login}/>
	);
}

export default PrivateRoute;