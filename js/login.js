$(document).ready(function() {
	//生成二维码登录按钮
	$(".lg_qrcode_btn").click(function() {
		
		$(this).addClass("lg_btn_active");
		$(this).siblings().removeClass("lg_btn_active");
		$(".login_qrcode").addClass("login_panel_active");
		$(".login_form").removeClass("login_panel_active");

		var inputurl = "http://www.baidu.com";

		var qrcode = $('#qrcode').qrcode({
			render: "canvas", //也可以替换为table
			width: 130,
			height: 130,
			text: inputurl /*可以通过ajax请求动态设置*/
		}).hide();
		//将生成的二维码转换成图片格式
		var canvas = qrcode.find('canvas').get(0);
		$('#qrcodeImg').attr('src', canvas.toDataURL('image/png'));


        
	});
	
	//使用表单登录
	$(".lg_form_btn").click(function(){
		
		$(this).addClass("lg_btn_active");
		$(this).siblings().removeClass("lg_btn_active");
		$(".login_qrcode").removeClass("login_panel_active");
		$(".login_form").addClass("login_panel_active");
	});
});