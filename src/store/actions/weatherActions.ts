import { ThunkAction } from "redux-thunk"; // import the thunk action
import { RootState } from ".."; // import the root state
import request from "../../services/service";
import {
  WeatherAction,
  SET_LOADING,
  GET_WEATHER,
  GET_WEATHER_REQUEST,
  SET_ERROR,
  WeatherData
} from "../types"; // import the weather types

const API_KEY = 'f68d183c2f455cafdd61e4383ed36598'; 

export const GetWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
  return async (dispatch) => {
    try {
      dispatch({type: GET_WEATHER_REQUEST})
     const data: WeatherData  = await request.get(`forecast?q=${city}&units=metric&cnt=5&appid=${API_KEY}`);
          
      dispatch({
        type: GET_WEATHER,
        payload: data,
    });
      
    } catch (error: any) {
      console.log(dispatch({
        type:SET_ERROR,
        payload: error.data.message
        
    }));
      
  }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};

export const setError = (): WeatherAction => {
  return {
    type: SET_ERROR,
    payload: "", 
  };
};
