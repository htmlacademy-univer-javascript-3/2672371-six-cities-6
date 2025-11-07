import Offer from '../types/offer.ts';
import { useParams, Navigate } from 'react-router-dom';

interface OfferCardNearbyProps{
	offers: Offer[];
}
function OfferCardNearby({offers}: OfferCardNearbyProps) {

	const {id} = useParams<{id: string}>()
	const offer = offers.find(item => item.id === parseInt(id || ''));

	if (!offer){
		return <Navigate to='/404' />
	}

	return(
		<div className="container">
			<section className="near-places places">
				<h2 className="near-places__title">Other places in the neighbourhood</h2>
				<div className="near-places__list places__list">
				{offers.filter(o => o.id !== offer.id).slice(0, 3).map(nearOffer => (
					<article key={nearOffer.id} className="near-places__card place-card">
					{nearOffer.isPremium && (
						<div className="place-card__mark">
						<span>Premium</span>
						</div>
					)}
					<div className="near-places__image-wrapper place-card__image-wrapper">
						<a href="#">
						<img className="place-card__image" src={nearOffer.imgUrl} width="260" height="200" alt="Place image"/>
						</a>
					</div>
					<div className="place-card__info">
						<div className="place-card__price-wrapper">
						<div className="place-card__price">
							<b className="place-card__price-value">&euro;{nearOffer.cost}</b>
							<span className="place-card__price-text">&#47;&nbsp;{nearOffer.dayOrNight}</span>
						</div>
						<button className={`place-card__bookmark-button button ${nearOffer.isBookmarks ? 'place-card__bookmark-button--active' : ''}`} type="button">
							<svg className="place-card__bookmark-icon" width="18" height="19">
							<use xlinkHref="#icon-bookmark"></use>
							</svg>
							<span className="visually-hidden">
							{nearOffer.isBookmarks ? 'In bookmarks' : 'To bookmarks'}
							</span>
						</button>
						</div>
						<div className="place-card__rating rating">
						<div className="place-card__stars rating__stars">
							<span style={{ width: '80%' }}></span>
							<span className="visually-hidden">Rating</span>
						</div>
						</div>
						<h2 className="place-card__name">
						<a href="#">{nearOffer.name}</a>
						</h2>
						<p className="place-card__type">{nearOffer.typeOfApartment}</p>
					</div>	
					</article>
				))}
				</div>
			</section>
			</div>
	);
}

export default OfferCardNearby;