document.addEventListener("DOMContentLoaded", function () {
    const apiKey = '9920008360e6212a01a59fd9eb579f46';

    document.getElementById('searchButton').addEventListener('click', function () {
        getWeather();
    });

    function getWeather() {
        const city = document.getElementById('cityInput').value;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                updateWeatherInfo(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }

    function updateWeatherInfo(data) {
        const weatherIcon = document.getElementById('weather-icon');
        const tempDiv = document.getElementById('temp-div');
        const weatherCondition = document.getElementById('weather-condition');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('wind-speed');

        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        weatherIcon.style.display = 'block';
        tempDiv.textContent = `Temperature: ${data.main.temp}°C`;
        weatherCondition.textContent = `Weather Condition: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;
    }
});