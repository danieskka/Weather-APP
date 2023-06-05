require("dotenv").config()

const getWeatherByCity = async (city) => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.API_KEY}`)
    let result = await response.json()
    return result
}   

module.exports = getWeatherByCity