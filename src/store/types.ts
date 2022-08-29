export const GET_WEATHER = "GET_WEATHER";   // create a type for the get weather action
export const GET_WEATHER_REQUEST = "GET_WEATHER_REQUEST";   // create a type for the get weather action
export const SET_LOADING = "SET_LOADING";   // create a type for the set loading action
export const SET_ERROR = "SET_ERROR";    // create a type for the set error action
export const SET_ALERT = "SET_ALERT";   // create a type for the set alert action

export interface Weather {
    loading: Boolean;
    data: any;  // create a type for the weather data
    descirption: string;    // create a type for the weather description
    icon: string;       // create a type for the weather icon
    id: number;        // create a type for the weather id
    main: string;   // create a type for the weather main
}


export interface WeatherData {
    weather: Weather[];
    map: any;
    data: any ;
    type: string;
    payload: string;
    base: string;   
    
    cod: number;    
    coord: {
        lon: number;    
        lat: number;
    };
    dt: number;
    id: number;
    main: {     // create a type for the weather main
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    sys: {      // create a type for the weather sys
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    clouds: {   // create a type for the weather clouds
        all: number;
    };
    list: [];
    wind: {     // create a type for the weather wind
        deg: number;
        speed: number;
    }
    name: string;
    
    timezone: number;
    visibility: number;
    
}


export interface WeatherError {     // create a type for the weather error
    cod: string;
    message: string;
}

export interface WeatherState {     // create a type for the weather state
    loading: boolean;
    data: WeatherData | null;
    error: string;
}

interface GetWeatherRequestAction {
    type: typeof GET_WEATHER_REQUEST;

}

interface GetWeatherAction {        // create a type for the get weather action
    type: typeof GET_WEATHER;
    payload: WeatherData;
}

interface SetLoadingAction {    // create a type for the set loading action
    type: typeof SET_LOADING;
}

interface  SetErrorAction {     // create a type for the set error action
    type: typeof SET_ERROR;
    payload: string;
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction | GetWeatherRequestAction;   // create a type for the weather action

export interface AlertAction {   // create a type for the alert action
    type: typeof SET_ALERT;
    payload: string;
}

export interface AlertState {   // create a type for the alert state
    message: string;
}