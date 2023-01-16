import React, { useState, useEffect } from "react";
import { fetchWeather } from "../utils/weather-api";

const ThisMonth = () => {
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

  let temp_min =
    data && data.main && data.main.temp
      ? (data.main.temp - 276.51).toFixed(0)
      : 0;

  return (
    <div className="container h-100">
      <div className="col h-100 today-container">
        <label for="exampleDataList" className="form-label today">
          <b>
            <p className="today">This Month</p>
          </b>
        </label>
        <div class="card card-local card-today h-auto mb-0">
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <b>
                <p className="p-today-city">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    fill="currentColor"
                    class="bi bi-wind"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                  <p className="temp-today">{temp_max} &deg;C</p>
                  <p>
                    {data && data.weather && data.weather[0].main
                      ? data.weather[0].main
                      : 0}
                    <br />
                    <p className="temp-month">
                      The high will be {temp_max} &deg;C, the low will be{" "}
                      {temp_min} &deg;C
                    </p>
                  </p>
                  <br />
                  <p className="temp-month-humidity">
                    Humidity:{" "}
                    {data && data.main && data.main.humidity
                      ? data.main.humidity
                      : 0}
                    %
                  </p>
                </p>
              </b>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisMonth;
