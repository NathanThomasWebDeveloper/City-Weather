import {Ttemperature_unit, Tlength_unit} from "../Config/TypeScript/Types";
// any change to state should be reflected in config/TypeScript/types file.
import initialState from "./initialState";
import {createReducer} from "@reduxjs/toolkit";
import {setTemperatureUnit, setLengthUnit, showError} from './actions';
/*
const reducer = (state = initialState, action: Taction): Tstate => {
    const {payload}: { payload: any } = action;
    switch (action.type) {
        case IS_LOADING:
            return {...state, isLoading: payload};
        case FETCH_WEATHER_DATA:
            return {...state, weatherData: payload};
        case SET_LENGTH_UNIT:
            return {...state, length_unit: payload};
        case SET_TEMPERATURE_UNIT:
            return {...state, temperature_unit: payload};
        case SHOW_ERROR_MESSAGE:
            return {...state, error: payload}
        default:
            return state;
    }
}
*/

const reducer = createReducer(initialState, builder => {
    builder.addCase(setTemperatureUnit, (state, action) => {
        state.temperature_unit = (action.payload as Ttemperature_unit)
    })
    builder.addCase(setLengthUnit, (state, action) => {
        state.length_unit = (action.payload as Tlength_unit)
    })
    builder.addCase(showError, (state, action) => {
        state.error = action.payload
    })
})

export default reducer;
