 import { weatherData } from "./weather.mjs";

let locationOne = document.getElementById("location1");
let temperatureOne = document.getElementById("temperature1");

locationOne.textContent = weatherData.hourly.temperature_2m[0];