import React, { useState, useEffect } from "react";
import AddCity from "./AddCity";
import { fetchWeather } from "../utils/weather-api";

const Weather = () => {
  const [search, setSearch] = useState("torino");
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    let componentMounted = true;
    fetchWeather(search).then((items) => {
      if (componentMounted) {
        setData(items);
        console.log(data);
      }
    });
    return () => {
      componentMounted = false;
    };
  }, []);

  let temp =
    data && data.main && data.main.temp
      ? (data.main.temp - 273.28).toFixed(0)
      : 0;

  return (
    <div className="row p-5">
      <div className="col-8">
        <div className="card text-bg-dark city-image-info">
          <img
            src="https://pulirestauratrice.it/wp-content/uploads/2020/07/P4.jpg"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay">
            <h5 className="card-title">{data.name}</h5>
            <p className="card-text">
              Humidity{" "}
              {data && data.main && data.main.humidity ? data.main.humidity : 0}
              %
            </p>
            <p className="card-text">
              {data &&
              data.weather &&
              data.weather[0] &&
              data.weather[0].description
                ? data.weather[0].description
                : 0}
            </p>
            <p className="card-text">{temp} &deg;C</p>
          </div>
        </div>
      </div>
      <div className="col">
        <AddCity />
      </div>
    </div>
  );
};

export default Weather;
