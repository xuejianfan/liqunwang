$(function(){
	$("#goumai-xuan a").on("click",function(){
		
		$(this).addClass("xuan-hover").siblings().removeClass("xuan-hover");
		
	});	
	      var  ofdj=$("#fdj");
	      var obig=$("#big");
	      var opic=$("#dan-img");
	      var obigimg=$("#big img");
		$("#dan-img").on("mousemove",function(e){
			var evt=e||event;
			var x=evt.pageX-ofdj.width()/2-opic.offset().left;
				var y=evt.pageY-ofdj.height()/2-opic.offset().top;
				ofdj.show();
				obig.show();
				if(x<=0){
					x=0;
				}
				if(x>=opic.width()-ofdj.width()-5){
					x=opic.width()-ofdj.width()-5;
				}
				if(y<=0){
					y=0;
				}
				if(y>=opic.height()-ofdj.height()-5){
					y=opic.height()-ofdj.height()-5;
				}
				ofdj.css("left",x);
				ofdj.css("top",y);
				obigimg.css("left",-2.48*x);
				obigimg.css("top",-2.48*y);
		});
		$("#dan-img").on("mouseout",function(){
			ofdj.hide();
			obig.hide();
		});
			$.get("json/product.json",function(data){
					 var  strid=location.search;
					
		  		var  arrid=strid.split("=");
		  		var  id=arrid[1];
		  		    
		            for(var i=0;i<data.length;i++){
		            	var html="";
		            	if(data[i][id]){
		            	$("#dan-img .small-img").attr("src",data[i][id].imgsrc);
		            	$("#top-zi").html(">手机通讯>手机>"+data[i][id].name);
		            	$("#moneys span").html(data[i][id].money);
		            	$("#name").html(data[i][id].name);
		            	$("#dan-btn").attr("mulu-id",data[i][id].id);
		            		break;
		            	}
		            	
		            }
		      }).done(function(){  
		      	var shuliang=$("#shuliang div").html();
		      $("#shuliang a").eq(0).on("click",function(){
		      	  if(shuliang>1){
		      	  	--shuliang;
		      	  }
		      	  $("#shuliang div").html(shuliang);
		      });
		      $("#shuliang a").eq(1).on("click",function(){
		      	  ++shuliang;
		      	  $("#shuliang div").html(shuliang);
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
		   $("#dan-btn").on("click",function(){
		   	var  shuzi=Number($("#shuliang div").html());
		   	var id=$(this).attr("mulu-id");
		   	obj[id]  =obj[id] ? obj[id]+shuzi : shuzi;
		   				num+=shuzi;
	   			if(num==0){
	   				op.hide();
	   			}else{
	   			op.show();	
	   			}
	   		    var  jishustr=JSON.stringify(obj);
	   			setcookie("dianji",jishustr,10);
	   			op.html(num);
	   			location.reload();
		   	
		   });
		     
		      });
		    
			});
			$(function(){
	
	 if(chacookie("username")!=undefined){
			 	$("#head-user").html("hi，"+chacookie("username")+"欢迎来到利群商城"+"<a id='tuichu' href='index.html'> 退出</a>");
			 }
			$("#tuichu").on("click",function(){
				   removecookie("username",-2);
				   if(chacookie("username")!=undefined){}else{
				   	$("#head-user").html("hi,欢迎来到利群商城!"+"<a href='denglu.html'> 请登录 </a><a href='zhuce.html'> 免费注册 </a>");   
				   }
		
			});	
});