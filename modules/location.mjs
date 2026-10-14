import { weatherFetch } from "./weather.mjs";
export { subLocationOne, subLocationTwo };

async function subLocationOne() {
	let inputOne = document.getElementById("locationSearchOne").value;
	let locationOne = document.getElementById("locationOne");
	let tempOne = document.getElementById("temperatureOne");

	const cityName = inputOne;
	// API #1 This API lets me find the latitude and longitude of locations by name.
	// The latitude and longitude will then be entered into the next api to get weather info.
	const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`;

	const response = await fetch(url);
	const data = await response.json();

	if (data.results && data.results.length > 0) {
		const { latitude, longitude, name, country } = data.results[0];
		locationOne.textContent = " Loading...";
		locationOne.innerHTML = `Found ${name}<br>${country}<br>Lat ${latitude}<br>Long ${longitude}`;
		console.log(
			`Found ${name}, ${country}: Lat ${latitude}, Long ${longitude}`,
		);
		tempOne.textContent = "Loading...";
		tempOne.textContent = `${Math.round(await weatherFetch(latitude, longitude))} F`;

		// You can now plug these directly into your weather API params!
	} else {
		locationOne.textContent = "Location not found. Try again.";
		console.log("Location not found Try again.");
	}
}

async function subLocationTwo() {
	let inputTwo = document.getElementById("locationSearchTwo").value;
	let locationTwo = document.getElementById("locationTwo");
	let tempTwo = document.getElementById("temperatureTwo");

	const cityName = inputTwo;
	// API #1 This API lets me find the latitude and longitude of locations by name.
	// The latitude and longitude will then be entered into the next api to get weather info.
	const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`;

	const response = await fetch(url);
	const data = await response.json();

	if (data.results && data.results.length > 0) {
		const { latitude, longitude, name, country } = data.results[0];
		locationTwo.textContent = " Loading...";
		locationTwo.innerHTML = `Found ${name}<br>${country}<br>Lat ${latitude}<br>Long ${longitude}`;
		console.log(
			`Found ${name}, ${country}: Lat ${latitude}, Long ${longitude}`,
		);
		tempTwo.textContent = "Loading...";
		tempTwo.textContent = `${Math.round(await weatherFetch(latitude, longitude))} F`;

		// You can now plug these directly into your weather API params!
	} else {
		locationOne.textContent = "Location not found. Try again.";
		console.log("Location not found Try again.");
	}
}
