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
			latitude: 52.3909553943508,
			longitude: 4.85309666406198,
			city: 'Amsterdam'
		},
		{
			id: 2,
			isPremium: false,
			imgUrl: "../markup/img/room.jpg",
			cost: 80,
			dayOrNight: "night",
			isBookmarks: true,
			name: `Wood and stone place`,
			typeOfApartment:"Private room",
			latitude: 52.3609553943508,
			longitude: 4.85309666406198,
			city: 'Amsterdam'
		},
		{
			id: 3,
			isPremium: false,
			imgUrl: "../markup/img/apartment-02.jpg",
			cost: 132,
			dayOrNight: "night",
			isBookmarks: false,
			name: `Canal View Prinsengracht`,
			typeOfApartment:"Apartment",
			latitude: 52.3909553943508,
			longitude: 4.929309666406198,
			city: 'Amsterdam'
		},
		{
			id: 4,
			isPremium: true,
			imgUrl: "../markup/img/apartment-03.jpg",
			cost: 180,
			dayOrNight: "night",
			isBookmarks: false,
			name: `Nice, cozy, warm big bed apartment`,
			typeOfApartment:"Apartment",
			latitude: 52.3809553943508,
			longitude: 4.939309666406198,
			city: 'Amsterdam'
		},
		{
			id: 5,
			isPremium: true,
			imgUrl: "../markup/img/apartment-01.jpg",
			cost: 120,
			dayOrNight: "night",
			isBookmarks: true,
			name: `Hôtel Eiffel Kensington`,
			typeOfApartment: "Hotel",
			latitude: 48.85742451893557,
			longitude: 2.3022979466151656,
			city: 'Paris'
		},
		{
			id: 6,
			isPremium: true,
			imgUrl: "../markup/img/apartment-01.jpg",
			cost: 120,
			dayOrNight: "night",
			isBookmarks: true,
			name: `Le Lampika Hotel`,
			typeOfApartment: "Hotel",
			latitude: 48.83511070661446, 
			longitude: 2.329586044631438,
			city: 'Paris'
		},
	]


export default offers;