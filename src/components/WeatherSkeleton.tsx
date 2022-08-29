import React from 'react'

const WeatherSkeleton = () => {
  return (
    <>
    <div className="wrapper sk">
        <div className=" city skeleton">

        </div>
        <div className="city-wrapper sk-weather skeleton">

        </div>
    </div>
    <div className="ForecastWrapper">
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
