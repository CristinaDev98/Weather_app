import React, { useState, useEffect } from "react";
import { fetchWeather } from "../utils/weather-api";

const TodayWeather = () => {
  const [search, setSearch] = useState("torino");
  const [data, setData] = useState([]);

  useEffect(() => {
    let componentMounted = true;
    fetchWeather(search).then((items) => {
      if (componentMounted) {
        setData(items);
        console.log(items);
      }
    });
    return () => {
      componentMounted = false;
    };
  }, []);

  let temp_max =
    data && data.main && data.main.temp
      ? (data.main.temp - 273.28).toFixed(0)
      : 0;
  return (
    <div className="container h-100">
      <div className="col h-100 today-container">
        <label for="exampleDataList" className="form-label today">
          <b>
            <p className="today">Today</p>
          </b>
        </label>
        <div class="card card-local card-today h-auto mb-0">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <b>
                <p className="p-today-city">
                  Now
                  <br />
                  <p className="temp-today">{temp_max} &deg;C</p>
                </p>
              </b>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
