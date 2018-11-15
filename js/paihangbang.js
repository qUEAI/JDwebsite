$(function () {
	$('.jd_daohang ul li').mouseover(function () {
		$(this).css('color','red');
		$(this).siblings().css('color','darkgray');
		
		var $index = $(this).index();
		var $li = $('.jd_footer_ul li').eq($index);
		$li.css('display','block');
		$li.siblings().css('display','none');
	})
})