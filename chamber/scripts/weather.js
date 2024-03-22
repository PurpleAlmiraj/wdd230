const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon'); 
const captionDesc = document.getElementById('figcaption');
const windSpeedElement = document.getElementById('windSpeedMilesPerHour');
const windChillElement = document.getElementById('windChill');

const city = 'Rexburg'; 
const country = 'USA'; 
const apiKey = '43b3cbdca90c95afdeca16685e715d94'; 
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            displayResults(data); 
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

apiFetch();
