import './styles.css';
import getWeather from './service';

const initializePage = function applyInitialLocation(location) {
  getWeather(location)
    .then((result) => console.log(result));
};

initializePage('pretoria');
