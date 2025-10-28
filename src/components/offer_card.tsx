import {useState} from 'react'
import {Link} from 'react-router-dom'
type OfferCardProps = {
	id: number;
	isPremium: boolean;
	imgUrl: string;
	cost: number;
	dayOrNight: string;
	isBookmarks: boolean;
	name: string;
	typeOfApartment: string;
	onMouseEnter?: () => void;
	onMouseLeave?: () => void;
}

function OfferCard({id,isPremium, imgUrl, cost, dayOrNight, isBookmarks, name, typeOfApartment, onMouseEnter, onMouseLeave} : OfferCardProps): JSX.Element {
	const [isBookmarked, setBookMark] = useState(isBookmarks);

	const handleBookMarkClick = () => {
		setBookMark(!isBookmarked);
	}
	
	return (
		<article className="cities__card place-card"
				 onMouseEnter={onMouseEnter}
				 onMouseLeave={onMouseLeave}>
		{isPremium ?
			<div className="place-card__mark">
				<span>Premium</span>
			</div>
		: null}
		<div className="cities__image-wrapper place-card__image-wrapper">
			<Link to={`/offer/${id}`}>
			<img className="place-card__image" src={imgUrl} width="260" height="200" alt="Place image"/>
			</Link>
		</div>
		<div className="place-card__info">
		<div className="place-card__price-wrapper">
			<div className="place-card__price">
				<b className="place-card__price-value">&euro;{cost}</b>
				<span className="place-card__price-text">&#47;&nbsp;{dayOrNight}</span>
			</div>
			<button className={`place-card__bookmark-button button ${isBookmarked ? 'place-card__bookmark-button--active' : ''}`} type="button" onClick={handleBookMarkClick}>
				<svg className="place-card__bookmark-icon" width="18" height="19">
				<use xlinkHref="#icon-bookmark"></use>
				</svg>
				<span className="visually-hidden">{isBookmarked ? 'In bookmarks' : 'To bookmarks'}</span>
			</button>
		</div>
			<div className="place-card__rating rating">
			<div className="place-card__stars rating__stars">
				<span className="width: 80%"></span>
				<span className="visually-hidden">Rating</span>
			</div>
			</div>
			<h2 className="place-card__name">
			<a href="#">{name}</a>
			</h2>
			<p className="place-card__type">{typeOfApartment}</p>
		</div>
		</article>
	);
}
export default OfferCard;