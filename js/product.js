$(document).ready(function(){
	
	$(".city_m").hover(function(){
		$(this).siblings().show();
	});
	
	$(".city_m").mouseout(function(){
		$(this).siblings().hide();
	});
	
	$(".cate_mini").mouseover(function(){
		$(this).siblings().show();
	});
	
	$(".cate_mini").mouseout(function(){
		$(this).siblings().hide();
	});
});
