import {Link} from 'react-router-dom';

function ErrorPage(): JSX.Element {
	return(
		<div style={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			<h1>404. Page not found</h1>
			<Link to="/">Вернуться на главную</Link>
		</div>
		
	);
}

export default ErrorPage;