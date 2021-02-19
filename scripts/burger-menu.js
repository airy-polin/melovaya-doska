'use srtict'

// Burger menu
function toggleModal() {
	document.body.classList.toggle("is-modal-opened");

	let navigation = document.getElementById("nav");
	
	navigation.classList.toggle("header__navigation");
	navigation.classList.toggle("modal__content");
}