export function fetchWeather(search) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8f5c9829ef85d4f4cc183b6723102a67`
  ).then((data) => data.json());
}
