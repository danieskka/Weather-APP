const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const getWeatherByCity = require("./utils/fetchWeather.js")

app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {weather: null, error: null})
})

app.post("/", async (req, res) => {
  let data = await getWeatherByCity(req.body.city)
  let {main} = data
  const celsius = (main.temp - 32 ) * (5/9)
  res.render("index", {weather: `It's ${Math.round(celsius)} celsius degrees in ${data.name}!`, error: null})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
