import "./App.css";
import Weather from "./component/Weather";
import SearchWeather from "./component/SearchWeather";
import LocalizationWeather from "./component/LocalizationWeather";
import TodayWeather from "./component/TodayWeather";
import ThisMonth from "./component/ThisMonth";

function App() {
  return (
    <div class="main-container">
      <Weather />
      <div class="row p-5 pt-0">
        <div class="col-3">
          <TodayWeather />
        </div>
        <div class="col-5">
          <ThisMonth />
        </div>
        <div class="col">
          <SearchWeather />
          <LocalizationWeather />
        </div>
      </div>
    </div>
  );
}

export default App;
