import React, { FC } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash";
import { WeatherData, Weather } from "../store/types";
import Umbrella from "../assets/images/red-umbrella.png"
import Jacket from "../assets/images/jacket.png"
import Sunny from "../assets/images/Sunny-icon.png"
import Cloudy from "../assets/images/Cloudy_day.webp"
import RainyDay from "../assets/images/rain.jpg"
import Humidity from "../assets/images/humidity.svg"
import Pressure from "../assets/images/pressure.svg"
import WindSpeed from "../assets/images/wind_speed.svg"

interface RootState {
  WeatherReducer: Weather;
  data: WeatherData;
}
const WeatherAbout: FC = () => {
  const data = useSelector((state: RootState) => state.WeatherReducer.data);

  let condition: string;
  let ImageItem = Sunny;

  if (
   data && data.list.every(
      (val: WeatherData, i: number, arr: []) => val.weather[0].main == "Clouds",
    )
  ) {
    condition = "Best day to sell a jacket";
    ImageItem = Jacket;
  } else if (
   data && data.list.every(
      (val: WeatherData, i: number, arr: []) => val.weather[0].main == "Rain",
    )
  ) {
    condition = "Best day to sell an umbrella";
    ImageItem = Umbrella;
  } else if(
    data && data.list.every(
      (val: WeatherData, i: number, arr: []) => val.weather[0].main == "Clear",
    )
  ) {
    condition = "Clear Sky";
    ImageItem = Sunny;

  }else if(data.list[0].weather[0].main == "Rain") {
    condition = "Rainy Day";
    ImageItem = RainyDay;
  }
  else if(data.list[0].weather[0].main == "Clouds") {
    condition = "Cloudy Day";
    ImageItem = Cloudy;
  }
  else{
    condition= "Clear Sky";
    ImageItem= Sunny;
  }

  return (
    <>
      {data && (
        <div className="wrapper">
          <div className="city">
            <div>
              <h1 className="title">
                {get(data, "city.name")} - {get(data, "city.country")}
              </h1>
              <p className="population">
                Population: {get(data, "city.population").toLocaleString()}
              </p>
            </div>
          </div>
          <div className="city-weather">
            <div className="level-item">
              <div>
                <p className="heading">{get(data, "descirption")}</p>
                <p>
                {
                  data.list[0].weather[0].main !== "Clear" && <img
                  className="iconWeather"
                  src={`http://openweathermap.org/img/wn/${get(
                    data,
                    "list[0].weather[0].icon",
                  )}@2x.png`}
                  alt="icon"
                /> 
                }
                </p>
                <div className="weatherInfo">
                  <p className="temp">
                    {get(data, "list[0].main.temp")}
                    <sup>&#8451;</sup>
                  </p>
                  <p className="temp-subtitle">{get(data, "list[0].weather[0].main")}, {get(data, "list[0].weather[0].description")}</p>
                  <img src={Humidity} alt="humadity" /><span>{get(data, "list[0].main.humidity")}%</span>
                  <img src={Pressure} alt="pressure" /><span>{get(data, "list[0].main.pressure")}hPa</span>
                  <img src={WindSpeed} alt="windspeed" /><span>{get(data, "list[0].wind.speed")}m/s</span>
                </div>
              </div>
            </div>
            <div className="sell-item ">
              <img src={ImageItem} alt="" />
              <p className="sell-subtitle">{condition}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherAbout;
