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


// scroll
function scrollContent() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}


// mCustomScrollbar
(function($) {
	$(window).on('load', function() {
		$('.mycustom-scroll').mCustomScrollbar();
	});
})(jQuery);

$('.mycustom-scroll').mCustomScrollbar({
	axis: 'y',              // вертикальный скролл 
	theme: 'inset-2',  // тема 
	scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
	setHeight: '100%',      // высота блока (переписывает CSS) 
	mouseWheel: {
		deltaFactor: 300    // кол-во пикселей на одну прокрутку колёсика мыши 
	}
});