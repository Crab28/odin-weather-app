import './styles.css';

const getWeather = async function fetchWeatherData(location) {
  const KEY = '0d9d028bd7cf44ec9fe94100231107';
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${location}`);
  const weatherData = await response.json();

  return weatherData;
};

getWeather('london')
  .then((result) => console.log(result));
