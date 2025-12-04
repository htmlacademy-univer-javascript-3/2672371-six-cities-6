import { createReducer } from "@reduxjs/toolkit";
import {city} from "../mocks/cities";
import {offers} from "../mocks/offers"
import {changeCity, fillingList, changeSorting} from './action'
import Offer from "../types/offer";

const initialState = {
	city: city[0],
	offerList: offers.filter(offer => offer.city === city[0].name),
	currentSorting: 'Popular',
	allOffers: offers,
	filteredOffersByCity: offers.filter(offer => offer.city === city[0].name)
}


const sortOffers = (offersToSort: Offer[], sortType: string, originalFilteredOffers: Offer[]): Offer[] => {
	const sortedOffers = [...offersToSort];
	
	switch(sortType){
		case 'Price: low to high':
			return sortedOffers.sort((a,b) => a.cost - b.cost);
		case 'Price: high to low':
			return sortedOffers.sort((a,b) => b.cost - a.cost);
		case 'Top rated first':
			return sortedOffers.sort((a,b) => b.rating - a.rating)
		case 'Popular':
			default:
				console.log('Popular sorted')
				console.log(originalFilteredOffers)
				return [...originalFilteredOffers];
	}
}

const reducer = createReducer(initialState, (builder) => {
	builder.addCase(changeCity, (state, action) => {
		state.city = action.payload;
		state.offerList = offers.filter(offer => 
			offer.city === action.payload.name
		);
		const filteredOffers = state.allOffers.filter(offer => offer.city === action.payload.name)
		state.filteredOffersByCity = [...filteredOffers];
		state.offerList = sortOffers(filteredOffers, state.currentSorting, filteredOffers);
	})
	.addCase(fillingList, (state, action) => {
		state.offerList = action.payload;
	})
	.addCase(changeSorting, (state, action) => {
		state.currentSorting = action.payload;
		state.offerList = sortOffers(state.offerList, action.payload, state.filteredOffersByCity)
	});
});

export {reducer};