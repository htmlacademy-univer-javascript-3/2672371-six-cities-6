import {useState} from 'react'
import Logo from './logo';
import Offer from "../types/offer";
import OfferList from "./offers_list";
import Map from "./Map.tsx";
import {city} from "../mocks/cities.ts";
import { State } from '../types/state.ts';
import { useDispatch, useSelector } from 'react-redux';
import { changeCity } from '../store/action.ts';
import SortingOptions from './sorting_options.tsx';

interface MainPageProps {
	offers: Offer[];
}
function MainPage({offers}: MainPageProps) :JSX.Element {
	const dispatch = useDispatch();
	const {city: currentCity, offerList} = useSelector((state: State) => state.offers);

	const favoriteOffers = offerList.filter(offer => offer.isBookmarks);
	const [activePoint, setActivePoint] = useState<{name: string, latitude: number; longitude: number} | null>(null)

	const handleCityClick = (cityName: string) => {
		const selectedCity = city.find(c => c.name === cityName);
		if (selectedCity) {
			dispatch(changeCity(selectedCity))
		}
	}
	const handleOfferMouseEnter = (id: number) => {
		const offer = offerList.find(offer => offer.id === id);
		if (offer) {	
			console.log(`Active offer: ${offer.id}`)
			setActivePoint({
				name: offer.name,
				latitude: offer.latitude,
				longitude: offer.longitude
			});
		}
	}

	const handleOfferMouseLeave = () => {
		console.log(`Not active offer: ${offerList.length}`)
		setActivePoint(null);
	}

	const hasOffers = offerList.length > 0;
	return (
		<>
			<div style={{display: "none"}}>
			<svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
			</div>

			<div className="page page--gray page--main">
			<header className="header">
				<div className="container">
				<div className="header__wrapper">
					<div className="header__left">
					<Logo />
					</div>
					<nav className="header__nav">
					<ul className="header__nav-list">
						<li className="header__nav-item user">
						<a className="header__nav-link header__nav-link--profile" href="#">
							<div className="header__avatar-wrapper user__avatar-wrapper">
							</div>
							<span className="header__user-name user__name">Oliver.conner@gmail.com</span>
							<span className="header__favorite-count">{favoriteOffers.length}</span>
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

			<main className="page__main page__main--index">
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
				<section className="locations container">
					<ul className="locations__list tabs__list">
					{city.map((cityItem) => (
                  <li key={cityItem.name} className="locations__item">
                    <a 
                      className={`locations__item-link tabs__item ${
                        currentCity.name === cityItem.name ? 'tabs__item--active' : ''
                      }`}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCityClick(cityItem.name);
                      }}
                    >
                      <span>{cityItem.name}</span>
                    </a>
                  </li>
                ))}
					</ul>
				</section>
				</div>
				<div className="cities">
				<div className="cities__places-container container">
					{hasOffers ? (
						<section className="cities__places places">
					<h2 className="visually-hidden">Places</h2>
					<b className="places__found">{offerList.length} places to stay in {currentCity.name}</b>
					<SortingOptions />
					<div className="cities__places-list places__list tabs__content">
						<OfferList offers={offerList}
							onOfferMouseEnter={handleOfferMouseEnter}
							onOfferMouseLeave={handleOfferMouseLeave}
						/>
					</div>
					</section>
					) : (<section className="cities__no-places">
								<div className="cities__status-wrapper tabs__content">
									<b className="cities__status">No places to stay available</b>
									<p className="cities__status-description">
										We could not find any property available at the moment in {currentCity.name}
									</p>
								</div>
							</section>
					)}
					
					<div className="cities__right-section">
						<Map city={currentCity} points={offers} activePoint={activePoint}/>
					</div>
				</div>
				</div>
			</main>
			</div>
		</>
	);
}
export default MainPage;