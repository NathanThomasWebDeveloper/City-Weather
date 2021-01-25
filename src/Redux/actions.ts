import {IS_LOADING, FETCH_WEATHER_DATA, SET_TEMPERATURE_UNIT, SET_LENGTH_UNIT, SHOW_ERROR_MESSAGE} from "./actionTypes";
import {client, getCityByName} from '../Apollo/Apollo';
import {toName} from "../Utils/TranslateCountryISO";
import {TcountryISO} from "../Config/TypeScript/Types";
import {createAction} from "@reduxjs/toolkit";


export const fetchData = ({city, country}: { city: string, country?: TcountryISO }) => (dispatch: any) => {
    const now = new Date();
    dispatch({
        type: IS_LOADING,
        payload: true
    })
    client
        .query({query: getCityByName(city, country)})
        .then(({data}: { data: { getCityByName: { country: string, weather: {} } | null } }) => {
            if (data.getCityByName === null) {
                dispatch({
                    type: SHOW_ERROR_MESSAGE,
                    payload: (country === undefined) ? `No weather data for ${city} was found` : `No weather data ${city} in ${toName(country)} was found`
                })
                dispatch({
                    type: IS_LOADING,
                    payload: false
                })
                return;
            }
            dispatch({
                type: FETCH_WEATHER_DATA,
                payload: {...data.getCityByName.weather, date: now, city, country: toName(data.getCityByName.country)}
            })
            dispatch({
                type: IS_LOADING,
                payload: false
            })
            dispatch({
                type: SHOW_ERROR_MESSAGE,
                payload: ""
            })

        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: SHOW_ERROR_MESSAGE,
                payload: "Sorry, there was problem retrieving the weather data. Please try again in a few minutes."
            })
        })
}

export const showError = createAction<string>(SHOW_ERROR_MESSAGE)
export const setTemperatureUnit = createAction<string>(SET_TEMPERATURE_UNIT)
export const setLengthUnit = createAction<string>(SET_LENGTH_UNIT)
