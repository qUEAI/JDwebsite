$(function () {
		$(window).scroll(function (event) {					
		var st = $(this).scrollTop();
//		console.log(st);
		if (st>=760 ) {
			$('.jd_ttop').css('display','block');
		} else if(st<760 || st>=1360){
			$('.jd_ttop').css('display','none');
		}
				
	})
})

		    