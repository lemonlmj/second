$(function(){
	//top
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$("#top").fadeIn();
		} else {
			$("#top").fadeOut();
		}
	});
	$("#top").click(function() {
		$("html,body").animate({
			"scrollTop": "0px"
		}, 500);
	});

	//nav
	$(window).scroll(function() {
		var sHeight = $(window).scrollTop(); //获取滚动高度
		var imgH = $(".slide").height(); //获取banner图的高度
		var headH = $(".navBg").height(); //获取头部的高度
		var bg = sHeight / (imgH - headH);
		if(sHeight<50){
		$(".navBg").css("background", "rgba(255,255,255,0.6");
			$(".navBg").css("border-bottom","");
		}else{
			$(".navBg").css("background","rgba(255,255,255," + bg + ")");
			$(".navBg").css("border-bottom","1px solid #eee");
		}
	});
	
	
})