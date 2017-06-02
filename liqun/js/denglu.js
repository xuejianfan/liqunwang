$(function(){
	$("#user").get(0).oninput=function(){
		this.style.background="#fff";
	}
	
	$("#pas").on("input",function(){
		$(this).css("background","#fff");
	});
	$("#deng-btn").on("click",function(){
		$.post("http://localhost/liqunwang/liqun/php/denglu.php",{"username":$("#user").val(),"password":$("#pas").val()},function(data){
			if(data==0){
				$("#yz").css("display","block");
			}else{
				setcookie("username",$("#user").val(),15);
				 location.href="index.html";
			}
		})
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