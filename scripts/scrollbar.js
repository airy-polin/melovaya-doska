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