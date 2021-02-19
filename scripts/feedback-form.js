'use srtict'

// Feedback form access
let openFormButton = document.getElementById("open-form-button");
openFormButton.addEventListener("click", onOpenFormClick);

function onOpenFormClick() {
	let feedbackButton = document.getElementById("open-form-button");
	let feedbackForm = document.getElementById("feedback-form");

	feedbackButton.classList.add("hidden");
	feedbackForm.classList.remove("hidden");
}

let closeFormButton = document.getElementById("close-form-button");
closeFormButton.addEventListener("click", onCloseFormClick);

function onCloseFormClick() {
	let feedbackForm = document.getElementById("feedback-form");
	let feedbackButton = document.getElementById("open-form-button");

	feedbackForm.classList.add("hidden");
	feedbackButton.classList.remove("hidden");
}