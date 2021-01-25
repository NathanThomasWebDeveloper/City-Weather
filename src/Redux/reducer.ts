import {Tstate, Taction} from "../Config/TypeScript/Types";
import {IS_LOADING, FETCH_WEATHER_DATA, SET_LENGTH_UNIT, SET_TEMPERATURE_UNIT, SHOW_ERROR_MESSAGE} from "./actionTypes";
// any change to state should be reflected in config/TypeScript/types file.
import initialState from "./initialState";

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
export default reducer;
