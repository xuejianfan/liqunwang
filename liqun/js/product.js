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


	$(function(){
    	var  oul=document.getElementById("right-tab");
		   	var oli=oul.getElementsByTagName("li")[0];
              var oyema=document.getElementById("yema");
              var aspan=$("#yema span");
              var oshuzi=document.getElementById("shuzi");
              aspan.eq(0).html("每条20页/");
             
		   	var col=20;
		   	var random=Math.random();
    		$.get("json/product.json?="+random,function(data){
				var bigarr=[];
				var num=Math.ceil(data.length/col);
				aspan.eq(1).html("共"+data.length+"条");
				aspan.eq(3).html("共"+num+"页");
					var  html="";
			for(var i=0;i<col;i++){
				for(var attr in data[i]){
					 html+="<li class='wupin'><a class='list-img' target='_block' href='danpin.html?id="+data[i][attr].id+"'><img src='"+data[i][attr].imgsrc+"'/></a><a class='list-zi' target='_block' href='danpin.html?id="+data[i][attr].id+"'>"+data[i][attr].name+"</a><p class='jiaqian'>商城价：<span>"+data[i][attr].money+"</span><input type='button' mulu-id='"+data[i][attr].id+"' class='che' value='加入购物车'></p><p class='tab-last'><img src='product/shangcheng.png'</p></li>";
				}
				} 	
				oul.innerHTML=html;
				aspan.eq(2).html("第1页");
	for (var j=0;j<num;j++){
		     
				var ye=document.createElement("a");
			     ye.href="#";
				 ye.innerHTML=j+1;
				 oshuzi.appendChild(ye);
				 var html1="";
				 var arr=[];
				
				 	for(var i=j*col;i<Math.min(col*(j+1),data.length);i++){
				 		for(var attr in data[i]){
				 			html1+="<li class='wupin'><a class='list-img' target='_block' href='danpin.html?id="+data[i][attr].id+"'><img src='"+data[i][attr].imgsrc+"'/></a><a class='list-zi' target='_block' href='danpin.html?id="+data[i][attr].id+"'>"+data[i][attr].name +"</a><p class='jiaqian'>商城价：<span>"+data[i][attr].money+"</span><input  type='button' mulu-id='"+data[i][attr].id+"' class='che' value='加入购物车'></p><p class='tab-last'><img src='product/shangcheng.png'</p></li>";
				 		}
				}
			   		 arr.push(html1);
			   		bigarr.push(arr);
				}
					var jishu=0;
					var ayema=oyema.getElementsByTagName("a");
					$("#yema  a").eq(2).addClass("cur").siblings().removeClass("cur");
					$("#yema a").hover(function(){
						$(this).addClass("cur");
					},function(){
						$(this).removeClass("cur");
					});
					
					for(var i=0;i<ayema.length;i++){
						ayema[i].index=i;
						 ayema[i].onclick=function (){
					switch(this.index){
		        	      case 0 :
	     				 jishu=0;
	     				 break;
	     				 case 1:
	     				 if(jishu>0){
	     				 jishu=jishu-1;
	     					 };
	     					 break;
	     				 case ayema.length-1:
	     					 jishu=ayema.length-5;
	     					 break;
	     					 case ayema.length-2:
	     					 if(jishu<ayema.length-5){
	     		 				jishu++;
	     				 };
	     					 break;
	     				 default :
	     					 jishu=this.index-2;
	     		}
					aspan.eq(2).html("第"+(jishu+1)+"页");
					$("#shuzi a").eq(jishu).addClass("cur").siblings().removeClass("cur");
					oul.innerHTML=bigarr[jishu];
				
					}
						}
					
    		}).done(function(){
    				  var odiv=document.getElementById("top-right");
		  var  op=odiv.getElementsByTagName("p")[0];
		  var oul=document.getElementById("right-tab")
		  var  obtn=oul.getElementsByClassName("che");
		 var  str =chacookie("dianji");
		   var  obj =  str  ?  JSON.parse(str)  :  {};
		   
		   var  num = 0;
		   for(var  i  in  obj){
		   	   num  +=obj[i];
		   	   if(num!=0){
		   	   	   op.style.display="block";
		   	   	   op.innerHTML=num;
		   	   }
		   }
		  	$("#right-tab").on("click","input",function(){
		  		var  id=this.getAttribute("mulu-id");
		  
		    obj[id] = obj[id] ?  ++obj[id]  :  1 ;	   		
		   				num++;
	   		    var  jishustr=JSON.stringify(obj);
                console.log(jishustr);
                console.log(obj);
	   			setcookie("dianji",jishustr,10);
	   			op.innerHTML=num;
	   			
		  	});
		   
    		});
    		
    		$(window).on("scroll",scroll);
    		function  scroll(){
    			if($(window).scrollTop()>300){
    				$("#dingbu").show();
    			}else{
    				$("#dingbu").hide();
    			}
    		};
    		scroll();
    		$("#dingbu").hover(function(){
    			$(this).find("span").addClass("ding-hover");
    			$(this).find("span").show();
    		},function(){
    			$(this).find("span").hide();
    			$(this).find("span").removeClass("ding-hover");
    		});
    		$("#dingbu").on("click",function(){
    			
    			 $("body").animate({scrollTop :0},0);
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