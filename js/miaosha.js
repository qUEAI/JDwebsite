$(function () {
				
		var iTimer = setInterval(function () {
			var currentTime = new Date();
			var nextTime = new Date('2019/07/25 23:19:00');
			
			var currentDate = currentTime.getTime();
			var nextDate = nextTime.getTime();
			
			var nowTime = nextDate - currentDate;
			var allSecond = parseInt(nowTime / 1000); 
			
			var m = parseInt(allSecond / 3600 % 24);
			var d = parseInt(allSecond / 60 % 60);
			var s = parseInt(allSecond % 60);
			
			if (m<10&&m>=0) {
				$('.box_hour').text('0'+m);
			} else{
				$('.box_hour').text(m);
			}
			if (d<10&&d>=0) {
				$('.box_min').text('0'+d);
			} else{
				$('.box_min').text(d);
			}
			if (s<10&&s>=0) {
				$('.box_sec').text('0'+s);
			} else{
				$('.box_sec').text(s);
			}
		},1000)
		
		
	
		var num=0, timer;
			clearInterval(timer);
			time=setInterval(function(){
				num++;
				if(num==3){
					num=0;
				}
				$(".box_righ img").eq(num).show().siblings('img').hide();
				$('.box_righ span').eq(num).css('background','red').siblings('span').css('background','#CCC');
			},800)
		
	})