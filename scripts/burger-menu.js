// let openBurgerButton = document.getElementById("burger");

// openBurgerButton.addEventListener("click", onOpenBurgerClick);

// function onOpenBurgerClick() {
// 	let burgerButton = document.getElementById("burger");
// 	let navigation = document.getElementById("nav");

// 	burgerButton.classList.add("hidden");
// 	navigation.style.display = "inline-block";
// 	// navigation.hidden = false;
// }



// burger-menu
function toggleModal() {
	document.body.classList.toggle("is-modal-opened");

	let navigation = document.getElementById("nav");
	
	navigation.classList.toggle("header__navigation");
	navigation.classList.toggle("modal__content");
}


// scroll (POLINA)
// function scrollContent() {
// 	window.scrollTo({
// 		top: 0,
// 		behavior: 'smooth',
// 	});
// }


// ---------------------------------------------------------------------
// TEST
// function stylizeScrollbar() {
// 	document.body.style.scrollbarFaceColor='black';
// 	document.body.style.scrollbarArrowColor="colorname";
// 	document.body.style.scrollbarTrackColor="colorname";
// 	document.body.style.scrollbarHighlightColor="colorname";
// }



// let mode = 0;

// function blinkscroll() {
// 	if (mode === 0) {
// 		document.body.style.scrollbarFaceColor='blue';
// 	} else {
// 		document.body.style.scrollbarFaceColor='green';
// 		mode = (mode === 0) ? 1 : 0;
// 	}
// }

// setInterval(“blinkscroll()”,1000)
// ---------------------------------------------------------------------



//jQuery custom content scroller
(function($){
	$(window).on("load",function(){
		$(".mCustomScrollbar").mCustomScrollbar();
	});
})(jQuery);

$(".mCustomScrollbar").mCustomScrollbar({
	theme: "my-theme",
	axis: "y",
	scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах
	mouseWheel: {
		deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
	}
});