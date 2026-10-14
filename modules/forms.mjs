import { subLocationOne, subLocationTwo } from "./location.mjs";
import { compareCards } from "./animation.mjs";

const locationOneForm = document.getElementById("locationOneForm");
const locationTwoForm = document.getElementById("locationTwoForm");

locationOneForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	await subLocationOne();
	compareCards();
});

locationTwoForm.addEventListener("submit", async (event) => {
	event.preventDefault();
	await subLocationTwo();
	compareCards();
});
