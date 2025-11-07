import {useParams, Navigate} from 'react-router-dom';
import Offer from '../types/offer.ts';
import { Link } from 'react-router-dom';
import {city} from "../mocks/cities.ts";
import ListOfReviews from './list_of_reviews.tsx';
import MapOfferCard from './map_offer_card.tsx';
import OfferCardNearby from './offer_card_nearby.tsx';

interface PropertyProps {
	offers: Offer[];
}

function Property({offers}: PropertyProps): JSX.Element {

	const {id} = useParams<{id: string}>()
	const offer = offers.find(item => item.id === parseInt(id || ''));

	if (!offer){
		return <Navigate to='/404' />
	}
	
	const nearOffers = offers
		.filter(o => o.id !== offer.id)
		.slice(0, 3);

	return(
		<div className="page">
		<div style={{ display: 'none' }}>
			<svg xmlns="http://www.w3.org/2000/svg">
			<symbol id="icon-arrow-select" viewBox="0 0 7 4">
				<path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path>
			</symbol>
			<symbol id="icon-bookmark" viewBox="0 0 17 18">
				<path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path>
			</symbol>
			<symbol id="icon-star" viewBox="0 0 13 12">
				<path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path>
			</symbol>
			</svg>
		</div>

		<header className="header">
			<div className="container">
			<div className="header__wrapper">
				<div className="header__left">
				<Link to={'/'}>
					<img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
				</Link>
				</div>
				<nav className="header__nav">
				<ul className="header__nav-list">
					<li className="header__nav-item user">
					<a className="header__nav-link header__nav-link--profile" href="#">
						<div className="header__avatar-wrapper user__avatar-wrapper">
						</div>
						<span className="header__user-name user__name">Oliver.conner@gmail.com</span>
						<span className="header__favorite-count"> {offers.filter(o => o.isBookmarks).length}</span>
					</a>
					</li>
					<li className="header__nav-item">
					<a className="header__nav-link" href="#">
						<span className="header__signout">Sign out</span>
					</a>
					</li>
				</ul>
				</nav>
			</div>
			
			</div>
		</header>
		
		<main className="page__main page__main--offer">
			<section className="offer">
			<div className="offer__gallery-container container">
				<div className="offer__gallery">
				<div className="offer__image-wrapper">
					<img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
				</div>
				<div className="offer__image-wrapper">
					<img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
				</div>
				<div className="offer__image-wrapper">
					<img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
				</div>
				<div className="offer__image-wrapper">
					<img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
				</div>
				<div className="offer__image-wrapper">
					<img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
				</div>
				<div className="offer__image-wrapper">
					<img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
				</div>
				</div>
			</div>
			<div className="offer__container container">
				<div className="offer__wrapper">
				{offer.isPremium && (
					<div className="offer__mark">
					<span>Premium</span>
					</div>
				)}
				<div className="offer__name-wrapper">
					<h1 className="offer__name">
					{offer.name}
					</h1>
					<button className={`offer__bookmark-button button ${offer.isBookmarks ? 'offer__bookmark-button--active' : ''}`} type="button">
					<svg className="offer__bookmark-icon" width="31" height="33">
						<use xlinkHref="#icon-bookmark"></use>
					</svg>
					<span className="visually-hidden">
						{offer.isBookmarks ? 'In bookmarks' : 'To bookmarks'}
					</span>
					</button>
				</div>
				<div className="offer__rating rating">
					<div className="offer__stars rating__stars">
					<span style={{ width: '80%' }}></span>
					<span className="visually-hidden">Rating</span>
					</div>
					<span className="offer__rating-value rating__value">4.8</span>
				</div>
				<ul className="offer__features">
					<li className="offer__feature offer__feature--entire">
					{offer.typeOfApartment}
					</li>
					<li className="offer__feature offer__feature--bedrooms">
					3 Bedrooms
					</li>
					<li className="offer__feature offer__feature--adults">
					Max 4 adults
					</li>
				</ul>
				<div className="offer__price">
					<b className="offer__price-value">&euro;{offer.cost}</b>
					<span className="offer__price-text">&nbsp;{offer.dayOrNight}</span>
				</div>
				<div className="offer__inside">
					<h2 className="offer__inside-title">What&apos;s inside</h2>
					<ul className="offer__inside-list">
					<li className="offer__inside-item">Wi-Fi</li>
					<li className="offer__inside-item">Washing machine</li>
					<li className="offer__inside-item">Towels</li>
					<li className="offer__inside-item">Heating</li>
					<li className="offer__inside-item">Coffee machine</li>
					<li className="offer__inside-item">Baby seat</li>
					<li className="offer__inside-item">Kitchen</li>
					<li className="offer__inside-item">Dishwasher</li>
					<li className="offer__inside-item">Cabel TV</li>
					<li className="offer__inside-item">Fridge</li>
					</ul>
				</div>
				<div className="offer__host">
					<h2 className="offer__host-title">Meet the host</h2>
					<div className="offer__host-user user">
					<div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
						<img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
					</div>
					<span className="offer__user-name">Angelina</span>
					<span className="offer__user-status">Pro</span>
					</div>
					<div className="offer__description">
					<p className="offer__text">
						A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
					</p>
					<p className="offer__text">
						An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
					</p>
					</div>
				</div>
				<ListOfReviews />
				</div>
			</div>
			<MapOfferCard city={city[0]} points={nearOffers} />
			</section>
			<OfferCardNearby offers={offers}/>
		</main>
		</div>
	);
}

export default Property;