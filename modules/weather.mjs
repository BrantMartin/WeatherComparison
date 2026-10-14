import { fetchWeatherApi } from "openmeteo";
export { weatherData };


const params = {
	latitude: 52.52,
	longitude: 13.41,
	hourly: "temperature_2m",
	forecast_days: 1,
	temperature_unit: "fahrenheit",
	wind_speed_unit: "mph",
	temperature_unit: "fahrenheit",
	precipitation_unit: "inch",
};

const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const hourly = response.hourly();

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	hourly: {
		time: Array.from(
			{
				length:
					(Number(hourly.timeEnd()) - Number(hourly.time())) /
					hourly.interval(),
			},
			(_, i) =>
				new Date(
					(Number(hourly.time()) +
						i * hourly.interval() +
						utcOffsetSeconds) *
						1000,
				),
		),
		temperature_2m: hourly.variables(0).valuesArray(),
	},
};

// The 'weatherData' object now contains a simple structure, with arrays of datetimes and weather information
console.log("\nLocation Temp:\n", weatherData.hourly.temperature_2m[0]);
