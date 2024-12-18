const fetch = require('node-fetch');

const apiKey = 'df68b2ba018e621f3855db150bca0bcf';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${Gurugram}&appid=${df68b2ba018e621f3855db150bca0bcf}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}K`);
        console.log(`Weather: ${data.weather[0].description}`);
    })
    .catch(error => console.error('Error fetching weather data:', error))