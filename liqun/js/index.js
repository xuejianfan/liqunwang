			
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
			
			
			
			
