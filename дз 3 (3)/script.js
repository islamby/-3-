document.querySelector('form').onsubmit = (event) => {
    event.preventDefault();
    const cityName = document.querySelector('input').value;
    fetch('https://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q=' + cityName)
    .then((response) => {
        if (!response.ok) {
            throw new Error('Плохое соединение или такого города нет');
        }
        return response.json();
    }).then((data) => {
        console.log(data);
        document.querySelector('section').innerHTML = `
        <h2>Страна: ${data.location.country}</h2>
        <h2>Город: ${data.location.name}</h2>
        <h2>Температура: ${data.current.temp_c} градусов</h2>
        <h2>Скорость ветра: ${data.current.wind_kph} км/час</h2>
        <img class="weather-icon" src="http:${data.current.condition.icon}">
        `;
    }).catch((error) => {
        document.querySelector('section').innerHTML = `<h2>${error.message}</h2>`;
    });
};