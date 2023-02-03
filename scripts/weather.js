const currentTemp = document.querySelector('#current-temp');

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Logan,utah,us&appid=322d4291ae0f74d8e7bda8c69daec31c'

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // testing only
        displayResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
weather = apiFetch();




function displayResults(data) {
  ;
  currentTemp.innerHTML = `${kelvinToFahrenheit(data.main.temp)}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherIcon.setAttribute('loading', 'lazy');
  captionDesc.textContent = `${capitalizeFirstLetter(desc)}`;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function kelvinToFahrenheit(kelvin)
{
  const celsius = kelvin - 273;

// Calculating Fahrenheit temperature to the nearest integer
  let fahrenheit = Math.floor(celsius * (9/5) + 32);
  
  return fahrenheit.toFixed(0);
}