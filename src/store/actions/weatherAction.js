import { weatherService } from "../../services/weatherService";

export function autoCompleteData(inputValue) {
  return async (dispatch) => {
    const autoCompleteResult = await weatherService.autoComplete(inputValue);
    dispatch({ type: "SET_AUTO_COMPLETE", autoCompleteResult });
  };
}

export function toggleTemp(toggleTemp){
  return (dispatch) => {
    dispatch({ type: "TOGGLE_TEMP", toggleTemp });
  }
}

export function UpdateCity(city) {
  return (dispatch) => {
    dispatch({ type: "SET_CITY", city });
  };
}

export function addCityToFavourites(cityToAdd) {
  const finalFavourites = weatherService.checkDuplicates(cityToAdd)
  return (dispatch) => {
    dispatch({ type: "SET_FAVOURITES", finalFavourites });
  };
}

export function getCurrentCondition(key) {
  return async (dispatch) => {
    const currentCondition = await weatherService.currentCondition(key);
    dispatch({ type: "SET_CURRENT_CONDITION", currentCondition });
  };
}

export function getFiveDaysForecast(key) {
  return async (dispatch) => {
    const fiveDaysForecast = await weatherService.fiveDaysForecast(key);
    dispatch({ type: "SET_FIVE_DAYS_FORECAST", fiveDaysForecast });
  };
}

// export function addLocationFromGeo(city){
// return async (dispatch) => {
//   dispatch({type: "SET_CITY_FROM_GEO", city})
// }
// }