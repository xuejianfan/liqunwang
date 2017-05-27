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
