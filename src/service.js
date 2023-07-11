const sortData = function sortFetchedWeatherData(weatherData) {
  const newData = {
    condition: weatherData.current.condition.text,
    weather_icon: weatherData.current.condition.icon,
    temp_c: weatherData.current.temp_c,
    temp_f: weatherData.current.temp_f,
    humidity: weatherData.current.humidity,
    wind_kph: weatherData.current.wind_kph,
    wind_mph: weatherData.current.wind_mph,
    location: weatherData.location.name,
  };

  return newData;
};

const fetchWeatherData = async function fetchWeatherDataFromAPI(location) {
  const KEY = '0d9d028bd7cf44ec9fe94100231107';
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}`);
  const weatherData = await response.json();

  return weatherData;
};

// Function coordinates all the functions.
const getWeather = async function getWeatherData(location) {
  const weatherData = await fetchWeatherData(location);
  const sortedData = sortData(weatherData);

  return sortedData;
};

export default getWeather;
