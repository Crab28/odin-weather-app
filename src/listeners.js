import { updatePage, switchDeg, switchSpd } from './updater';

let currentDeg = 'C';
let currentSpd = 'kph';

const initSearchBar = function initializeSearchBarListener() {
  const searchBar = document.getElementById('location-search');
  searchBar.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      updatePage(searchBar.value);
      searchBar.value = '';
    }
  });
};

const initDegBtn = function initializeDegBtnListener() {
  const degBtn = document.getElementById('btn-deg');

  degBtn.addEventListener('click', () => {
    currentDeg = currentDeg === 'C' ? 'F' : 'C';
    switchDeg(currentDeg);
  });
};

const initSpdBtn = function initializeSPdBtnListener() {
  const spdBtn = document.getElementById('btn-spd');

  spdBtn.addEventListener('click', () => {
    currentSpd = currentSpd === 'kph' ? 'mph' : 'kph';
    switchSpd(currentSpd);
  });
};

const initializeListeners = function initializeListeners() {
  initSearchBar();
  initDegBtn();
  initSpdBtn();
};

export default initializeListeners;
