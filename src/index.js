import './reset.css';
import './styles.css';
import getWeather from './service';

const updatePage = function updatePageWithLocation(location) {
  getWeather(location)
    .then((result) => console.log(result));
};

const initializeListeners = function initializeListeners() {
  const searchBar = document.getElementById('location-search');

  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      updatePage(searchBar.value);
      searchBar.value = '';
    }
  });
};

updatePage('pretoria');
initializeListeners();
