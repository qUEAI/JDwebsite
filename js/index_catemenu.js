$(document).ready(function(){
	//菜单导航鼠标经过上方事件
	$("li.cate_menu_item").mouseover(function() {
		//列表项显示过渡
		$(this).addClass("menu_item_on");
		//默认隐藏一遍其他所有元素
		$(this).parent().find(".menu_items_panel .cate_item").hide(); //+++

		//弹出容器
		$("div.menu_items_panel").show();

		//获取当前元素li属性data-index的值
		var data_index = $(this).attr("data-index");

		//先让对应弹出的子层全部设置为hide
		$("div.menu_items_panel").find(".cate_item").hide();
		//根据组合id寻找对应的弹出div
		$("div.menu_items_panel").find("#cate_item" + data_index).show();

		setCatePanel();
	});

	$(".menu_items_panel").mouseover(function() {
		$(this).show(); //css("display":"block");

	});

	$(".menu_items_panel").mouseout(function() {
		$(this).hide();
	});

	//菜单导航鼠标离开上方事件
	$("li.cate_menu_item").mouseout(function() {
		//列表项消失过渡
		$(this).removeClass("menu_item_on");
		//弹出容器消失
		$("div.menu_items_panel").hide();
		//获取当前元素li属性data-index的值
		//var data_index = $(this).attr("data-index");
		//根据组合id寻找对应的弹出div
		//$("#cate_item" + data_index).hide();
	});

	//自适应弹出高度 方法二，使用设置top值
	function setCatePanel() {
		//主菜单距离顶部的高度，固定值
		var divTop = $("ul.cate_menu").offset().top;
		//当滚动条的高度大于主菜单ul距离顶部的高度
		//则开始动态调整弹出容器距离顶部高度，为当前项距离顶部高度
		if($(document).scrollTop() > divTop) {
			var cut = $(document).scrollTop() - divTop;
			//$("div.menu_items_panel").css("top",cut);
			//增加过渡动画
			$("div.menu_items_panel").animate({
				"top": cut
			}, 50);
		} else {
			$("div.menu_items_panel").css("top", "0");
		}
	}
});
