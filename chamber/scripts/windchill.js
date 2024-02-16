var city = 'Rexburg';
var state = 'ID';
var apiKey = '815166eec2fc99695f124fe9928dde2a'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        var temperature = data.main.temp;
        var windSpeed = data.wind.speed;

        // Update HTML elements with weather data
        document.getElementById('temperature').textContent = temperature;
        document.getElementById('windSpeed').textContent = windSpeed;
    })
    .catch(error => console.error('Error fetching weather:', error));



var temperatureCelsius = 10;
var windSpeedMetersPerSecond = 5;
var temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;
var windSpeedMilesPerHour = windSpeedMetersPerSecond * 2.237;
document.getElementById('temperatureFahrenheit').textContent = temperatureFahrenheit;
document.getElementById('windSpeedMilesPerHour').textContent = windSpeedMilesPerHour;
if (windSpeedMilesPerHour > 3 && windSpeedMilesPerHour < 50) {
    var windChill = 35.74 + (0.6215 * temperatureFahrenheit) - (35.75 * Math.pow(windSpeedMilesPerHour, 0.16)) + (0.4275 * temperatureFahrenheit * Math.pow(windSpeedMilesPerHour, 0.16));

    windChill = Math.round(windChill * 100) / 100;

    document.getElementById('windChill').textContent = windChill;
}
