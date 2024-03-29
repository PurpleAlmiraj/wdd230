async function fetchForecast(city) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data); 
        return data;
    } catch (error) {
        displayErrorMessage('Error fetching data:', error.message);
        return null; 
    }
}

function displayForecast(forecastData) {
    const forecastContainer = document.getElementById('forecast-container');
    if (!forecastContainer) {
        displayErrorMessage('Forecast container not found');
        return;
    }
    forecastContainer.innerHTML = ''; 

    if (!forecastData || !forecastData.list || forecastData.list.length < 4) {
        displayErrorMessage('Invalid forecast data');
        return;
    }

    const dailyForecasts = {}; 

   
    forecastData.list.forEach((item) => {
        
        const date = new Date(item.dt * 1000);
        const dateString = date.toISOString().split('T')[0];

        
        if (!dailyForecasts[dateString]) {
            dailyForecasts[dateString] = [];
        }

        
        dailyForecasts[dateString].push(item);
    });

    
    Object.keys(dailyForecasts).slice(1, 5).forEach((dateString) => {
        const dailyForecast = dailyForecasts[dateString][0]; 
        const date = new Date(dailyForecast.dt * 1000);
        const minTemp = dailyForecast.main.temp_min;
        const maxTemp = dailyForecast.main.temp_max;
        const description = dailyForecast.weather[0].description.charAt(0).toUpperCase() + dailyForecast.weather[0].description.slice(1);
        const iconCode = dailyForecast.weather[0].icon;

        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon">
            <p>Date: ${date.toDateString()}</p>
            <p>Temperature: ${minTemp}°C - ${maxTemp}°C</p>
            <p>Description: ${description}</p>
            
        `;
        forecastContainer.appendChild(forecastItem);
    });
}


function displayErrorMessage(...messages) {
    const forecastContainer = document.getElementById('forecast-container');
    if (forecastContainer) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error-message');
        errorDiv.textContent = messages.join(' ');
        forecastContainer.innerHTML = ''; 
        forecastContainer.appendChild(errorDiv);
    }
}



async function getAndDisplayForecast() {
    const city = 'Rexburg,US'; 
    const forecastData = await fetchForecast(city);
    console.log(forecastData); 
    if (forecastData) {
        displayForecast(forecastData);
    } else {
        displayErrorMessage('Failed to fetch forecast data');
    }
}

getAndDisplayForecast();
