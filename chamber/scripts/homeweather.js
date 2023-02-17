const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');

const nextTemp = document.querySelector('#next-temp');
const tomTemp = document.querySelector('#tomorrow-temp');

const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Providence,utah,us&appid=322d4291ae0f74d8e7bda8c69daec31c'
const triple = "https://api.openweathermap.org/data/2.5/forecast?q=Providence,utah,us&appid=322d4291ae0f74d8e7bda8c69daec31c"
const weekd = new Date();
weekDay = document.querySelector("#weekday");
letKnow = document.querySelector("#reminder");

let weekVariable = weekd.getDay();
function weekday(number){
    let result;
  if (0 < number & number < 4) {
    result = 'Attend the Providence Chamber of Commerce Meet and Greet on Wednesday at 7:00 p.m'
  } else {
    result = '';
  }
  return result;
}
function reminder(number){
    let result;
  if (0 < number & number < 4) {
    result = 'Which is coming up very soon!'
  } else {
    result = '';
  }
  return result;
}

letKnow.innerHTML = weekday(weekVariable)

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
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
  //currentTemp.innerHTML = `${kelvinToFahrenheit(data.main.temp)}&deg;F`;
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


async function apiFetchTwo() {
  try {
    const responser = await fetch(triple);
    if (responser.ok) {
      const data = await responser.json();
      //console.log(data); // testing only
      displayResultsInFuture(data); // uncomment when ready
    } else {
        throw Error(await responser.text());
    }
  } catch (error) {
      console.log(error);
  }
}
weather = apiFetchTwo();

function displayResultsInFuture(data) {
  currentTemp.innerHTML = `${kelvinToFahrenheit(data.list[0].main.temp)}&deg;F`;
  tomTemp.innerHTML = `${kelvinToFahrenheit(data.list[1].main.temp)}&deg;F`;
  nextTemp.innerHTML = `${kelvinToFahrenheit(data.list[2].main.temp)}&deg;F`;
}
