const API_KEY = "64d33488611566b7f2f4ead60966b942";
const form = document.querySelector('.search-form');
const input = document.querySelector('.search-input');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const city = input.value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await response.json();
    updateWeather(data);
});