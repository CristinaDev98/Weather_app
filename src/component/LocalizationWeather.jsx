import React from "react";

const LocalizationWeather = () => {
  return (
    <div className="col mt-4">
      <label for="exampleDataList" className="form-label">
        <b>
          <p className="Localization">Localization</p>
        </b>
      </label>
      <div class="card card-local">
        <div class="card-body">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            class="bi bi-geo-alt-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <blockquote class="blockquote mb-0">
            <b>
              <p className="p-local">Add Localization</p>
            </b>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default LocalizationWeather;
