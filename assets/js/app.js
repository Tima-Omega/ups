const swiper = new Swiper('.swiper', {
	slidesPerView: 'auto',
	centeredSlides: true,
	spaceBetween: 20,
	initialSlide: 1,
	breakpoints: {
		576: {
			spaceBetween: 30
		},
		992: {
			spaceBetween: 60
		},
		1200: {
			spaceBetween: 116
		}
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
})

wow = new WOW({
	boxClass: 'animation'
})

wow.init();