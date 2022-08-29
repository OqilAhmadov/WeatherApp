import React from 'react'

const WeatherSkeleton = () => {
  return (
    <>
    <div className="wrapper sk">
        <div className=" city skeleton">

        </div>
        <div className="city-weather sk-weather skeleton">

        </div>
    </div>
    <div className="ForecastWrapper sk-cards" >
      <div className=" sk-item skeleton"></div>
      <div className=" sk-item skeleton"></div>
      <div className=" sk-item skeleton"></div>
      <div className=" sk-item skeleton"></div>
      <div className=" sk-item skeleton"></div>
    </div>
    </>
  )
}

export default WeatherSkeleton
