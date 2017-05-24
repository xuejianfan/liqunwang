function banner(oli,obtn,classname,ming){
				$(function(){
				var index=0;
				oli.eq(0).show();
				var ali=oli;
				var abtn=obtn;
			 ming=setInterval(move,3000); 
				function move (){
					index++;
				if(index==ali.length){
						index=0;
					}
					ali.eq(index).show().siblings().hide();
					abtn.eq(index).addClass(classname).siblings().removeClass(classname);
				}
				ali.hover(function(){
					clearInterval(ming);
					index=$(this).index();
				},function(){
					 ming=setInterval(move,3000);
				});
					abtn.hover(function(){
					clearInterval(ming);
					index=$(this).index();
					ali.eq(index).show().siblings().hide();
					abtn.eq(index).addClass(classname).siblings().removeClass(classname);
				},function(){
					 ming=setInterval(move,3000);
				});
				
				});
				
			};
				
			
