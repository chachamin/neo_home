$(document).ready(function(){
    $('.work_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 3000,
		fade: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
        centerMode: false,

		responsive: [

			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 2,
				centerMode: true
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
			   centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]

	});

    $('.tab_sd').slick({
		autoplay: false,
		dots: false,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		fade: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
        centerMode: false,

		responsive: [

			{
			  breakpoint: 960,
			  settings: {
				slidesToShow: 2,
				centerMode: true
			  }
			},
			{
			  breakpoint: 620,
			  settings: {
			   centerMode: true,
				slidesToShow: 1
			  }
			}
		  ]

	});
});