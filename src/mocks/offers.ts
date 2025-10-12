import Offer from "../types/offer.ts";

export const offers: Offer[] = [
		{
			id: 1,
			isPremium: true,
			imgUrl: "../markup/img/apartment-01.jpg",
			cost: 120,
			dayOrNight: "night",
			isBookmarks: true,
			name: `Beautiful luxurious apartment at great location`,
			typeOfApartment: "Apartment",
		},
		{
			id: 2,
			isPremium: false,
			imgUrl: "../markup/img/room.jpg",
			cost: 80,
			dayOrNight: "night",
			isBookmarks: true,
			name: `Wood and stone place`,
			typeOfApartment:"Private room"
		},
		{
			id: 3,
			isPremium: false,
			imgUrl: "../markup/img/apartment-02.jpg",
			cost: 132,
			dayOrNight: "night",
			isBookmarks: false,
			name: `Canal View Prinsengracht`,
			typeOfApartment:"Apartment"
		},
		{
			id: 4,
			isPremium: true,
			imgUrl: "../markup/img/apartment-03.jpg",
			cost: 180,
			dayOrNight: "night",
			isBookmarks: false,
			name: `Nice, cozy, warm big bed apartment`,
			typeOfApartment:"Apartment"
		}
	]


