$(document).ready(function() {
	//顶部广告关闭按钮
	$("i.joytop_close").click(function() {
		$("div.joy_top_link").fadeOut();
	});

	function setbgWidth() {
		var bgwidth = $(document).width();
		$("div.fs_bg a").width(bgwidth);
		$("div.fs_bg a").css("min-width", "990px");
	}

	//当调整浏览器窗口的大小时，发生 resize 事件。
	$(window).resize(function() {
		setbgWidth();
	});

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

	//促销
	$(".news_first").mouseover(function() {
		$(this).parent().find(".J_news_tab_active").removeClass("news_tab_active_right");
		$(this).parent().find(".J_news_tab_active").addClass("news_tab_active_left");
		//切换显示div
		$(this).parent().parent().find(".j_tab_first_content").show();
		$(this).parent().parent().find(".j_tab_last_content").hide();
	});

	//公告
	$(".news_last").mouseover(function() {
		$(this).parent().find(".J_news_tab_active").removeClass("news_tab_active_left");
		$(this).parent().find(".J_news_tab_active").addClass("news_tab_active_right");
		//切换显示div
		$(this).parent().parent().find(".j_tab_first_content").hide();
		$(this).parent().parent().find(".j_tab_last_content").show();
	});

	//话费机票酒店游戏标题内容切换
	$(".J_service_head_title").mouseover(function() {
		$(this).parent().find(".J_service_head_title").removeClass("J_service_head_title_on");
		$(this).addClass("J_service_head_title_on");
		//取经过标题的id
		var id = $(this).attr("data-index");
		$(this).parent().parent().find(".J_service_content_item").removeClass("J_service_content_item_on");
		$(this).parent().parent().find("#jsc" + id).addClass("J_service_content_item_on");
	});

	//关闭服务区域内的按钮，执行切换
	$(".service_entry_list i.icon-guanbi").click(function() {
		//让切换div隐藏
		$(".service_entry_list").slideUp();
		//12服务图标显示
		$(".service_entry").slideDown();
		//移除事件
		$(".service_entry .service_item_on").unbind("mouseover"); //移除mouseover
	});

	//服务区域切换
	$(".service_entry .service_item_on").mouseover(function() {
		//让切换div显示
		$(".service_entry_list").slideDown();
		//12服务图标隐藏
		$(".service_entry").slideUp();
	});

	$(".service_entry .service_item_on").mouseout(function() {
		//鼠标移除再绑定mouseover
		$(this).bind("mouseover", function() {
			//让切换div显示
			$(".service_entry_list").slideDown();
			//12服务图标隐藏
			$(".service_entry").slideUp();
		});
	});

	//加载设置背景图片宽度
	setbgWidth();
});