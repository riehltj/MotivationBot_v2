apiKey = '5b5c99b88e14b535e7a2082b3dae0cb8';

function updateDom(city, temp, weather, iconUrl) {
    document.getElementById('city-js').value = city;
    document.getElementById('temp').innerHTML = `${temp}°F`;
    document.getElementById('icon').src = iconUrl;
    document.getElementById('icon').style.width = "60%";
    document.querySelector('.weather-js').style.visibility = "visible";
    document.getElementById('icon').style.visibility = "visible";
    document.getElementById('city-container').style.display = "none";
    document.getElementById('weather').innerHTML = weather;


}

function getweather(longitude, latitude) {
    url = `https://api.openweathermap.org/data/2.5/weather?lon=${longitude}&lat=${latitude}&units=imperial&appid=${apiKey}`

    fetch(url)
        .then(response => response.json())
        .then(function test(data) {
            city = data.name;
            temperature = data.main.temp;
            temp = Math.round(temperature)
            weather = data.weather[0].description;
            icon = data.weather[0].icon;
            iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            //console.log(city, temp, weather, icon)
            updateDom(city, temp, weather, iconUrl);
        })
}

function onGeolocateSuccess(coordinates) {
    const {
        latitude,
        longitude
    } = coordinates.coords;
    //console.log('Found coordinates: ', latitude, longitude);
    getweather(longitude, latitude);
}

function onGeolocateError(error) {
    console.warn(error.code, error.message);
    if (error.code === 1) {
        // they said no

    } else if (error.code === 2) {
        // position unavailable
        console.log("error code is a 2")
    } else if (error.code === 3) {
        // timeout
    }
}

function geolocate() {
    if (window.navigator && window.navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
    }
}


function getWeather(city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city},US&units=imperial&appid=${apiKey}`

    fetch(url)
        .then(response => response.json())
        .then(function test(data) {
            city = data.name;
            temperature = data.main.temp;
            temp = Math.round(temperature)
            weather = data.weather[0].description;
            icon = data.weather[0].icon;
            iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            // console.log(city, temp, weather, icon)
            updateDom(city, temp, weather, iconUrl);
        })
        .catch(function () {
            console.log("error");
            window.alert("City not found, check spelling and try again");
        });
}


document.getElementById('weather-button').addEventListener('click', function () {
    city = document.getElementById('city').value;
    getWeather(city)

})



document.getElementById('city-js').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        city = document.getElementById('city-js').value;
        console.log(city)
        getWeather(city)

    }
});


navigator.permissions.query({
    name: 'geolocation'
}).then(function (result) {
    if (result.state === 'granted') {
        console.log("granted")
        geolocate();
    } else if (result.state === 'prompt') {
        console.log("prompt")
    }
    // Don't do anything if the permission was denied.
});