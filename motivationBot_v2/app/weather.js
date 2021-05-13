apiKey = '5b5c99b88e14b535e7a2082b3dae0cb8';





function updateDom(city, temp, weather, iconUrl) {
    document.getElementById('city').innerHTML = city;
    document.getElementById('temp').innerHTML = `${temp}°F`;
    document.getElementById('icon').src = iconUrl
    document.getElementById('icon').style.visibility = "visible"
}

function getWeather() {
    city = document.getElementById('city').value

    url = `https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=imperial&appid=${apiKey}`

    fetch(url)
        .then(response => response.json())
        .then(function test(data) {
            city = data.name;
            temperature = data.main.temp;
            temp = Math.round(temperature)
            weather = data.weather[0].main;
            icon = data.weather[0].icon;
            iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            //console.log(city, temp, weather, icon)
            updateDom(city, temp, weather, iconUrl);
        })
}

document.getElementById('weather-button').addEventListener('click',
    getWeather)