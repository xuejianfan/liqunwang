			/*数据调用*/
		$(function(){
				$.get("json/yema.json",function(data){
					$("#banner-ul li").hover(function(){
						var index=$(this).index();
					  $(this).find(".content").show();
						var data1=data[index];
					 var html = template("tabs",data1);
						 $(".content").html(html);
					},function(){
						  $(this).find(".content").hide();
					});
			
				});
					
			});
$(function(){
	$("#nav-left").hover(function(){
			$("#banner-ul").show();
	},function(){
		$("#banner-ul").hide();
	});
});

 var  str =chacookie("dianji");
		    var  op=$("#top-right p").eq(0)
		   var  obj =  str  ?  JSON.parse(str)  :  {};
		   var  num = 0;
		   for(var  i  in  obj){
		   	   num  +=obj[i];
		   	   if(num!=0){
		   	   	  op.show();
		   	   	   op.html(num);
		   	   }else{
		   	   	$("#top-right p").eq(0).hide();
		   	   }
		   }
	