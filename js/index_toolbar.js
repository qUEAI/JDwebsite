$(document).ready(function() {
	//618活动按钮点击事件
	$(".jdm-tbar-act").click(function() {
		if($(".jdm-toolbar-wrap").attr("class").match("open")) {
			$(".jdm-toolbar-wrap").removeClass("z-jdm-toolbar-open");
		} else {
			$(".jdm-toolbar-wrap").addClass("z-jdm-toolbar-open");
		}
	});
});