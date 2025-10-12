import Offer from "../types/offer";
import OfferCard from "./offer_card";

interface OfferListProps {
	offers: Offer[];
	onOfferMouseEnter: (id: number) => void;
	onOfferMouseLeave: () => void;
}

function OfferList({offers, onOfferMouseEnter, onOfferMouseLeave}: OfferListProps): JSX.Element{
	return (
		<div className="cities__places-list places__list tabs__content">
			{offers.map((offer) => (
				<OfferCard
					key={offer.id}
					{...offer}
					onMouseEnter={() => onOfferMouseEnter(offer.id)}
					onMouseLeave={onOfferMouseLeave}
				/>
			))}
		</div>
	);
}
export default OfferList;