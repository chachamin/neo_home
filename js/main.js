$(document).ready(function(){
	// main_v_sd
	$('.main_v_sd').slick({
		autoplay: false,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear'
	});

    $('.work_sd').slick({
		autoplay: true,
		dots: true,
		pauseOnDotsHover: false,
		pauseOnHover: false,
		speed: 600,
		arrows: false,
		autoplaySpeed: 5000,
		fade: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		cssEase: 'linear',
        centerMode: false,

		responsive: [
			{
				breakpoint: 1444,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3,
				}
			},
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
					slidesToShow: 1,
				centerMode: true
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

	//공동 재생 멈춤
	slick_stop = $('.slick-stop').on('click', function() {
		$(this).siblings('.slick-play').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
	});

	$('.slick-play').on('click', function() {
		$(this).siblings('.slick-stop').css('display','inline-block').focus();
		$(this).css('display','none');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPlay');
	});
	$('.slick-prev').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickPrev');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	$('.slick-next').on('click', function() {
		$(this).parent().parent().siblings('.slick-slider').slick('slickNext');
		$(this).parent().parent().siblings('.slick-slider').slick('slickPause');
		$(this).siblings('.slick-play').css('display','inline-block');
		$(this).siblings('.slick-stop').css('display','none');
	});

	// fixed header(pc)
	$(window).scroll(function() {
		if($(window).width() > 0) {
			var scroll = $(window).scrollTop();
			if (scroll >= 70) {
				$("#header").addClass("fixed");

			} else {
				$("#header").removeClass("fixed");
			}
		}
	});

	// 메인 - 공지사항 탭
	$('.board_tabs > li > a.tab_link').on('focus click' ,function(){
		$(this).addClass('active');
		$(this).parent('li').siblings('li').find('a').removeClass('active');
		$(this).parent('li').find('div').css('display','block');
		$(this).parent('li').siblings('li').find('div').css('display','none');
		$(this).parent('li').find('a.more').css('display','inline-flex');
		$(this).parent('li').siblings('li').find('a.more').css('display','none');
		$('.tab_sd').slick("setPosition");
	});

	//관련사이트
	$(".footlink").click(function(){
		$(this).parent().toggleClass("cur").siblings().removeClass("cur");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideDown();
	});

	// 서브 - 보안솔루션 탭
	$(function(){
		$('.tab_con_wrap > div').hide();
		$('.ss_nav a').click(function () {
			$('.tab_con_wrap > div').hide().filter(this.hash).fadeIn();
			$('.ss_nav a').removeClass('focusOn');
			$(this).addClass('focusOn');
			return false;
		}).filter(':eq(0)').click();
	});
});
