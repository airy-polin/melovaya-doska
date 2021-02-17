// let openBurgerButton = document.getElementById("burger");

// openBurgerButton.addEventListener("click", onOpenBurgerClick);

// function onOpenBurgerClick() {
// 	let burgerButton = document.getElementById("burger");
// 	let navigation = document.getElementById("nav");

// 	burgerButton.classList.add("hidden");
// 	navigation.style.display = "inline-block";
// 	// navigation.hidden = false;
// }

function toggleModal() {
	document.body.classList.toggle("is-modal-opened");

	let navigation = document.getElementById("nav");
	
	navigation.classList.toggle("header__navigation");
	navigation.classList.toggle("modal__content");
}