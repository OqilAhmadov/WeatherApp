import React, { FC } from "react";
import { useSelector } from "react-redux";
import { WeatherData, Weather } from "../store/types";

import Forecast from "./Forecast";
import WeatherAbout from "./WeatherAbout";
import WeatherSkeleton from "./WeatherSkeleton";

interface RootState {
  WeatherReducer: Weather;
  data: WeatherData;
}
const WeatherAndForecast: FC = () => {
  const {data, loading} = useSelector((state: RootState) => state.WeatherReducer);

  return (
    <>
      {!loading ? (
        <>
        {data && (
        <div className="WeatherContainer">
          <WeatherAbout />
          <div className="ForecastWrapper">
            <Forecast />
          </div>
        </div>
      )}
        </>
      ) : (
        <WeatherSkeleton />
      )}
    </>
  );
};

export default WeatherAndForecast;
