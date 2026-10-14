import { subLocationOne,subLocationTwo } from "./location.mjs";

const locationOneForm = document.getElementById("locationOneForm");

locationOneForm.addEventListener("submit", (event) => {
	event.preventDefault();
	subLocationOne();
});

locationTwoForm.addEventListener("submit", (event) => {
	event.preventDefault();
	subLocationTwo();
});

