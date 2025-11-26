import { createReducer } from "@reduxjs/toolkit";
import {city} from "../mocks/cities";
import {offers} from "../mocks/offers"
import {changeCity, fillingList} from './action'

const initialState = {
	city: city[0],
	offerList: offers.filter(offer => offer.city === city[0].name)
}

const reducer = createReducer(initialState, (builder) => {
	builder.addCase(changeCity, (state, action) => {
		state.city = action.payload;
		state.offerList = offers.filter(offer => 
			offer.city === action.payload.name
		);
	})
	.addCase(fillingList, (state, action) => {
		state.offerList = action.payload;
	});
});

export {reducer};