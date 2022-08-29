import React, { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import { WeatherData, Weather } from "../store/types";
import { get } from "lodash";

const date: string[] = dateBuilder(new Date());

function dateBuilder(d: Date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const date = [];

  for (let count = 0; count < 5; count++) {
    if (d.getDay() + count < 7) date[count] = d.getDay() + count;
    else if (d.getDay() + count === 7) date[count] = 0;
    else if (d.getDay() + count === 8) date[count] = 1;
    else if (d.getDay() + count === 9) date[count] = 2;
    else if (d.getDay() + count === 10) date[count] = 3;
  }

  return [days[date[0]], days[date[1]], days[date[2]], days[date[3]], days[date[4]]];
}

interface RootState {
  WeatherReducer: Weather;
  data: WeatherData;
}

const Forecast: FC = () => {
  const weatherInfo = useSelector((state: RootState) => state.WeatherReducer.data);

  let condition: string;

  if (
    weatherInfo.list.every(
      (val: WeatherData, i: number, arr: []) => val.weather[0].main == "Clouds",
    )
  ) {
    condition = "Best day to sell a jacket";
  } else if (
    weatherInfo.list.every((val: WeatherData, i: number, arr: []) => val.weather[0].main == "Rain")
  ) {
    condition = "Best day to sell an umbrella";
  } else {
    condition = "";
  }

  return (
    <>
      {weatherInfo.list.map((value: WeatherData, index: number) => {
        const linkDate = date[index];
        return (
          <div key={index} className="forecast-wrapper">
            <div>
              <h2 className="title">{linkDate}</h2>
              <img
                className="iconWeather"
                src={`http://openweathermap.org/img/wn/${get(value, "weather[0].icon")}@2x.png`}
                alt="Icon Forecast"
              />
              <p className="sub">{index === 0 && condition}</p>
            </div>
            <div className="temperature">
              <span className="temp_max">
                {Math.round(value?.main.temp_max)}
                <sup>&#8451;</sup>
              </span>
              -
              <span className="temp_min">
                {Math.round(value?.main.temp_min)}
                <sup>&#8451;</sup>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Forecast;
