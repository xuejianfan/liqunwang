$(function(){
	for(var i=1; i<=$("#LoutiNav ul li").length; i++){
	 	var   yanshi="url(img/louti/nav"+i+".jpg) no-repeat left -2px top 0";
	    	   $("#LoutiNav  li").eq(i-1).css("background",yanshi)
	    }
	 $(window).on("scroll",scroll);
		   //滚动函数
		   function  scroll(){
		   	var height=$(this).scrollTop();
		   	if($(window).scrollTop()>700){
		   		$("#LoutiNav").css("display","block");
		   	}else{
		   		$("#LoutiNav").css("display","none");
		   	}
		   	$(".Louti").each(function(){
		   		var gun=$(this).index();
		   		var  scroll=$(".Louti").eq(gun).offset().top-300;
		   	console.log(scroll);
		   		if(height>scroll)
		   		{
		   			$("#LoutiNav  li").eq(gun).addClass("hover").siblings().removeClass("hover");
		   		}
		   	});
		   };
		   scroll();
		   var  louti=$("#LoutiNav ul li").not('.last');
		   //点击事件
		   louti.on("click",function(){
		   	  $(window).off("scroll");
		   	       $(this).addClass("hover").siblings().removeClass("hover");
		   	       var index=$(this).index();
		   	     var top=$(".Louti").eq(index).offset().top;
		   	     $("body").stop().animate(
		   	     	   { scrollTop :top}
		   	     ,1000,function(){
		   	     	 $(window).on("scroll",scroll);
		   	     });
		   	    
		   });
		   $("#LoutiNav ul li:last ").on("click",function(){
		   		$("#LoutiNav").css("display","none");
		   	   $("body").animate({scrollTop :0},1000,function(){
		   	   
		   	   });
		   })
});
