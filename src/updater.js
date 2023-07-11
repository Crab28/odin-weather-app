import getWeather from './service';

const errorMsg = document.getElementById('error-msg');
const errorTitle = document.getElementById('error-title');

const conditionValue = document.getElementById('condition');
const locationValue = document.getElementById('location');
const tempValue = document.getElementById('temp-number');
const humidValue = document.getElementById('humid-number');
const windValue = document.getElementById('wind-number');
const imgValue = document.getElementById('weather-icon');

let currentData = null;
let currentDeg = 'C';
let currentSpd = 'kph';

const displayError = function displayErrorMessage() {
  errorMsg.classList.add('error-found');
  errorTitle.textContent = 'Error Found. Please try again.';
};

const removeError = function removeErrorMessage() {
  errorMsg.classList.remove('error-found');
  errorTitle.textContent = '';
};

const setValues = function setDataValuesToPageValues() {
  humidValue.textContent = currentData.humidity;
  conditionValue.textContent = currentData.condition;
  locationValue.textContent = currentData.location;
  imgValue.src = currentData.weather_icon;

  if (currentDeg === 'C') {
    tempValue.textContent = currentData.temp_c;
  } else {
    tempValue.textContent = currentData.temp_f;
  }

  if (currentSpd === 'kph') {
    windValue.textContent = currentData.wind_kph;
  } else {
    windValue.textContent = currentData.wind_mph;
  }

  removeError();
};

const updatePage = function updatePageWithLocation(location) {
  getWeather(location)
    .then((result) => { currentData = result; })
    .then(() => setValues())
    .catch(() => displayError());
};

const switchDeg = function switchDegreeType(degType) {
  currentDeg = degType;
  const tempEl = document.getElementById('temp-type');
  tempEl.textContent = `°${currentDeg}`;

  if (currentDeg === 'C') {
    tempValue.textContent = currentData.temp_c;
  } else {
    tempValue.textContent = currentData.temp_f;
  }
};

const switchSpd = function switchSpeedType(spdType) {
  currentSpd = spdType;
  const spdEl = document.getElementById('speed-type');
  spdEl.textContent = ` ${currentSpd}`;

  if (currentSpd === 'kph') {
    windValue.textContent = currentData.wind_kph;
  } else {
    windValue.textContent = currentData.wind_mph;
  }
};

export { updatePage, switchDeg, switchSpd };
