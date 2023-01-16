import React, { useState, useEffect } from "react";
import { fetchWeather } from "../utils/weather-api";

const AddCity = () => {
  const [search, setSearch] = useState("london");
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

  let temp =
    data && data.main && data.main.temp
      ? (data.main.temp - 273.28).toFixed(0)
      : 0;

  return (
    <div className="container add-city-container">
      <label for="exampleDataList" className="form-label">
        <b>
          <bottom type="submit">
            <p className="add-city">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                class="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              Aggiungi Città
            </p>
          </bottom>
        </b>
      </label>
      <div class="card card-local">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <b>
              <p className="p-add-city">
                {data.name}
                <br />
                {data &&
                data.weather &&
                data.weather[0] &&
                data.weather[0].description
                  ? data.weather[0].description
                  : 0}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-cloud-lightning-rain-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z" />
                </svg>
                <p className="temp">{temp} &deg;C</p>
              </p>
            </b>
          </blockquote>
        </div>
      </div>
      <div class="card card-local-2">
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <b>
              <p className="p-add-city">
                Rome
                <br />
                {data &&
                data.weather &&
                data.weather[0] &&
                data.weather[0].description
                  ? data.weather[0].description
                  : 0}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="currentColor"
                  class="bi bi-cloud-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                </svg>
                <p className="temp">{temp} &deg;C</p>
              </p>
            </b>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AddCity;
