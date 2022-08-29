import React, { FC, FormEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetWeather } from "../store/actions/weatherActions";
import searchIcon from "../assets/images/search5.png";


const Search: FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");


  useEffect(() => {
    dispatch(GetWeather('germany'));
  }, []);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => setCity(e.currentTarget.value);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (city.trim() === "") return;
    dispatch(GetWeather(city));
    setCity("");
  };

  return (
    <div className="search-wrapper">
      <h3 data-testid="custom-element" className="app-title">Weather App</h3>
      <form className="form__group field" onSubmit={submitHandler}>
          <input
            type="text"
            className="form__field"
            name="name"
            placeholder="Enter city name"
            value={city}
            onChange={changeHandler}
          />
          <label htmlFor="name" className="form__label">
            Enter city name
          </label>
        <button type="submit" className="button">
          <img src={searchIcon} alt="Search Icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
