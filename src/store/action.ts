import { createAction } from "@reduxjs/toolkit";
import City from "../types/cities";
import Offer from "../types/offer";

export const changeCity = createAction<City>('city/CHANGE_CITY');
export const fillingList = createAction<Offer[]>('city/FILLING_LIST');
export const changeSorting = createAction<string>('sort/CHANGE_SORTING');

