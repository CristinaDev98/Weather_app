import React from "react";

const SearchWeather = () => {
  return (
    <div className="col-sm mt-5">
      <form>
        <label for="exampleDataList" className="form-label">
          <b>
            <p className="search">Search</p>
          </b>
        </label>
        <input
          className="form-control input"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="ex: Miami"
        />
        <datalist id="datalistOptions">
          <option value="Torino" />
          <option value="Milano" />
          <option value="Roma" />
        </datalist>
      </form>
    </div>
  );
};

export default SearchWeather;
