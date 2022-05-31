//Маска для ввода
$("body").on("focusin", "input[type=tel]", (function () {
	$(this).inputmask({
		mask: ["+37599999999999", "+375999999999999"],
		greedy: !0
	})
}
));
//Проверка формы бутстрапом
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();



$(".offcanvas").on("show.bs.offcanvas", function (e) {
	$("header").css("padding-right", window.innerWidth - document.documentElement.clientWidth)
}), $(".offcanvas").on("hidden.bs.offcanvas", function (e) {
	$("header").css("padding-right", "0")
});

/* Слайдер в табах*/
$('.modal').on('shown.bs.modal', function (e) {
	$('.slider-nav2').slick('setPosition');
	$('.slider-for2').slick('setPosition');
	$('.slider-nav3').slick('setPosition');
	$('.slider-for3').slick('setPosition');
	$('.slider-nav4').slick('setPosition');
	$('.slider-for4').slick('setPosition');
})
