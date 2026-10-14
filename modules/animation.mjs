export { compareCards };

function compareCards() {
	const cardOne = document.getElementById("weathercard1");
	const cardTwo = document.getElementById("weathercard2");
	const temperatureOne = document.getElementById("temperatureOne");
	const temperatureTwo = document.getElementById("temperatureTwo");
	const compOne = parseInt(temperatureOne.textContent);
	const compTwo = parseInt(temperatureTwo.textContent);

    //Remove classes to then compare so animations don't overlap
	cardOne.classList.remove("colder-card");
	cardTwo.classList.remove("colder-card");
	cardOne.classList.remove("hotter-card");
	cardTwo.classList.remove("hotter-card");

	if (compOne < compTwo) {
		cardOne.classList.add("colder-card");
	} else if (compTwo < compOne) {
		cardTwo.classList.add("colder-card");
	}

	if (compOne > compTwo) {
		cardOne.classList.add("hotter-card");
	} else if (compTwo > compOne) {
		cardTwo.classList.add("hotter-card");
	}
}
