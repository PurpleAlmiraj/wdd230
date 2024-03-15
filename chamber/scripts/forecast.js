const forecastContainer = document.getElementById('forecast-container');

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

fetchForecast();