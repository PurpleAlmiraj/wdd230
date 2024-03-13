const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('#figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Rexburg,Idaho&units=imperial&appid=43b3cbdca90c95afdeca16685e715d94'; 

async function apiFetch() {
    try {
        const response = await fetch(url);
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
}

apiFetch();
