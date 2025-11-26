type Offer = {
	id: number;
	isPremium: boolean;
	imgUrl: string;
	cost: number;
	dayOrNight: string;
	isBookmarks: boolean;
	name: string;
	typeOfApartment: string;
	latitude: number;
	longitude: number;
	city: string;
}

export default Offer;