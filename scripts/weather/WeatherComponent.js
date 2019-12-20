const WeatherComponent = (forecast) => {
    var iconurl = "http://openweathermap.org/img/w/" + forecast.icon + ".png"
    
    return `
        <section class="weather_component">
            <div "weather--card">
            <h3 class="weather__date">
                ${forecast.day}
                <br>
                ${forecast.dayMonth}
            </h3>
            <div class="weather__data">
                <span class="weather__data_low">
                    ${forecast.low}
                </span>
                <span class="weather__data_high">
                    ${forecast.high}
                </span>
                <img class="weatherImage" src="${iconurl}">
                <span class="weather__data_conditions">
                    ${forecast.conditions}
                </span>
            </div>
        </section>
    `
}

export default WeatherComponent