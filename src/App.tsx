import React, { FC } from "react";
import "./App.css";
import Search from "./components/Search";
import WeatherAndForecast from "./components/WeatherAndForecast";
import { Provider } from "react-redux";
import store from "./store";

const App: FC = () => {
  return (
    <div className="bg-weather">
      <Provider store={store}>
        <Search />
        <WeatherAndForecast />
      </Provider>
    </div>
  );
};

export default App;
