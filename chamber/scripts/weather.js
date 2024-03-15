const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon'); 
const captionDesc = document.getElementById('figcaption');
const windSpeedElement = document.getElementById('windSpeedMilesPerHour');
const windChillElement = document.getElementById('windChill');
const forecastContainer = document.getElementById('forecast-container');

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rexburg,USA&units=imperial&appid=43b3cbdca90c95afdeca16685e715d94`;

async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
            fetchForecast(); // Fetch and display forecast data
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp.toFixed(1)}&deg;F`;

    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIcon.innerHTML = `<img src="${iconSrc}" alt="Weather Icon">`;

    const capitalizedDesc = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    captionDesc.textContent = capitalizedDesc;

    const windSpeedMilesPerHour = data.wind.speed * 2.237;
    windSpeedElement.textContent = windSpeedMilesPerHour.toFixed(1);

    if (windSpeedMilesPerHour > 3 && windSpeedMilesPerHour < 50) {
        const temperatureFahrenheit = data.main.temp;
        const windChill = 35.74 + (0.6215 * temperatureFahrenheit) - (35.75 * Math.pow(windSpeedMilesPerHour, 0.16)) + (0.4275 * temperatureFahrenheit * Math.pow(windSpeedMilesPerHour, 0.16));
        windChillElement.textContent = windChill.toFixed(1);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(apiUrl.replace('weather', 'forecast'));
        if (response.ok) {
            const data = await response.json();
            displayForecast(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    const forecastList = data.list;
    // Clear previous forecast data
    forecastContainer.innerHTML = '';

    // Iterate over the forecast data for the next three days
    for (let i = 0; i < 3; i++) {
        const forecast = forecastList[i * 8]; // Data for every 8th element represents a forecast for the next day

        const forecastDate = new Date(forecast.dt * 1000); // Convert Unix timestamp to milliseconds
        const day = forecastDate.toLocaleDateString('en-US', { weekday: 'short' });
        const date = forecastDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

        const forecastTemp = forecast.main.temp.toFixed(1);
        const forecastIcon = forecast.weather[0].icon;
        const forecastDescription = forecast.weather[0].description;

        // Create HTML elements to display forecast data
        const forecastElement = document.createElement('div');
        forecastElement.classList.add('forecast-item');
        forecastElement.innerHTML = `
            <p>${day}, ${date}</p>
            <img src="https://openweathermap.org/img/wn/${forecastIcon}.png" alt="Weather Icon">
            <p>${forecastTemp}&deg;F</p>
            <p>${forecastDescription}</p>
        `;
        // Append forecast element to the forecast container
        forecastContainer.appendChild(forecastElement);
    }
}

apiFetch();
