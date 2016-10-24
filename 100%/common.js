
	$(function(){
		var boxs = $(".side-container"), 
			uls = $(".container ul"),//ul框
			lis = uls.find("li"),//li框
			num_li = lis.length,//li数量
			cur = 0,
			ra = 0,
			timer1 = 500,
			timer2 = 2000, //自动播放相隔时间
			w_width = $(window).width();//屏幕宽度

		var lefts = $(".pre.left"),rights = $(".pre.right")
			control = $(".cb a");

			lis.css({'width':w_width});
			uls.css({'width':w_width*num_li});

			var flag = false;
			function autos(){

				if(flag){		
					lis.eq(-1).css({left:-num_li*w_width});
					uls.animate({'left':w_width}, timer1, function(){
						lis.eq(-1).css({left:'auto'});
						uls.css('left', -(num_li-1)*w_width);
						cur = ra = num_li-1;
					});
				}else{
					cur++;
					if(ra == num_li-1){
						ra = 0;
						lis.eq(0).css({'left':num_li*w_width});
					}else{
						ra++
					}
					uls.animate({'left':-cur*w_width}, timer1, function(){
						if(ra == 0){
							lis.eq(0).css({'left':0})
							uls.css({'left':0})
							cur =0;
						}
					})
				}
				flag = false;

			}


			lefts.click(function(){
				if(uls.is(':animated')){
					return;
				}
				autos();
			})

			rights.click(function(){
				if(uls.is(':animated')){
					return;
				}
				if(cur == 0){
					cur = ra = num_li-2;
					flag = true;
				}else{
					cur = ra = cur-2;
				}
				autos();
			})

			control.hover(function() {
				var self = $(this)
				 hover_timer = setTimeout(function(){
				 	cur = ra = self.index()-1;
				 	autos();
				 },timer1)
			});


			if(num_li > 1){
				timers = setInterval(autos,timer2);
				boxs.hover(function() {
					clearInterval(timers)
				}, function() {
					timers = setInterval(autos,timer2);
				});
			}




		var Oul=$(".row-box").find("ul");
		var tmp=Math.ceil(Oul.find("li").length/4);
		var cur3=0;
		
		Oul.width(Oul.find("li").length*226)
		$(".par.pres").click(function(){
			if(Oul.is(':animated')){
					return;
				}
				if(cur3 == tmp-1){
					cur3 =0;
				}else{
					cur3++;
				}
				Oul.animate({'left':-cur3*888}, 500)
			});

		$(".par.nexts").click(function(){ 
			if(Oul.is(':animated')){
					return;
				}
			if(cur3==0)
			{
				cur3=tmp-1;
			}else{
				cur3=cur3-1;	
			}
			Oul.animate({'left':-cur3*888}, 500)
			
		});
		

			

	})