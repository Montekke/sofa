const dada = new DynamicAdapt("max");
dada.init();


$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1215,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 993,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}
	]
});


$('.slider-for2').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slider-nav2'
});
$('.slider-nav2').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for2',
	focusOnSelect: true,
	arrows: false,
});
$('.slider-for3').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slider-nav3'
});
$('.slider-nav3').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	asNavFor: '.slider-for3',
	focusOnSelect: true,
	arrows: false,
	vertical: true,
	infinite: false,
	responsive: [
		{
			breakpoint: 993,
			settings: {
				vertical: false,
				infinite: true,
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 490,
			settings: {
				vertical: false,
				infinite: true,
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}
	]
});
$('.slider-for4').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slider-nav4'
});
$('.slider-nav4').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for4',
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1215,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 993,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}
	]
});
$('.slider-for5').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slider-nav5'
});
$('.slider-nav5').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-for5',
	focusOnSelect: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1215,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 993,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}
	]
});
$('.multiple-items').slick({
	infinite: true,
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: false,
});

$('.next-button').click(function () {
	$('.slider-for').slick('slickNext');
});

$('.next-button2').click(function () {
	$('.multiple-items').slick('slickNext');
});

$(".section-8__slider").on("click", ".photo-slider__item", function () {
	var e = String('Консультация по - ' + $(this).data("name"));
	$('.divan').find('#sofa-name').val(e);
});

