let weather = []

export const useWeather = () => {
    return weather.slice()
}

export const getWeather = (parkZip) => {
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${parkZip}&units=imperial&appid=45658c2692ea5e3b7a6b514474ef4a6a`)
        .then(response => response.json())
        .then(
            parsedWeathers => {
                weather = parsedWeathers.list.slice()
            }
        )
}