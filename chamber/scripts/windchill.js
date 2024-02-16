var city = 'Rexburg';
var state = 'ID';
var apiKey = '55cf2d37fd795db3e7ddc43034d164f1'; // Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
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
