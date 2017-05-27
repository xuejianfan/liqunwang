$(function(){
	/*   shujujiaohu*/
	
	
	
	
	
	
	
	
	
	
	$("#txt,#mima,#chong").on("focus",function(){
		 $(this).next("span").show();
		 $(this).attr("placeholder","");
	});
	$("#txt,#mima,#chong").on("blur",function(){
		 $(this).next("span").hide();
	});
	$("#txt").on("blur",panduan1);
	/*             用户名判断*/
	 function panduan1(){
			 	if($(this).get(0).value.length!=""){
			 	var  reg1=/[a-z A-Z 0-9]+|-/ ;
			 	var shuzi=/\d+/;
			 	$(this).next("span").show();
			 	console.log();
			 	console.log($(this).get(0).value.length);
			 	 if($(this).get(0).value.length >=6 && $(this).get(0).value.length<=20){
			 	  $(this).next("span").html("该用户名可用");
			 	  if(shuzi.exec($(this).get(0).value)==$(this).get(0).value){
			 	  	$(this).next("span").html("用户名不能是纯数字");
			 }
			 }else{
			 	$(this).next("span").html("用户名长度只能在6-20位字符之间");
			 }		
			 }
			}
	 
	 /*      密码判断*/
      $("#mima").on("input",panduan2);
	function panduan2() {
		var ainput = $(this).get(0);
		var aspan = $(this).next("span");
		if(ainput.value != "") {
			var flag1 = 0;
			aspan.show();
			var flag2 = 0;
			var flag3 = 0;
			var sum = 0;
			if(ainput.value==""){
				$("#pan").css("display","none");
			}
			if(ainput.value.length < 6 || ainput.value.length > 20) {
				aspan.html("密码长度只能在6-20为字符之间");
					$("#pan").hide();
				return;
			} else {
				$(this).css("background-image","url(zhuce/sucess.png)");
				$("#pan").show();
				var shuru = ainput.value;
				for(var i = 0; i < shuru.length; i++) {
					if(shuru.charCodeAt(i) >= 49 && shuru.charCodeAt(i) <= 57) {
						flag1 = 1;
					} else if(shuru.charCodeAt(i) >= 65 && shuru.charCodeAt(i) <= 90) {
						flag2 = 1
					} else {
						flag3 = 1;
					}
				}
				sum = flag1 + flag2 + flag3;
				if(sum == 1 && ainput.value.length < 10) {
					aspan.html("该密码比较简单，有被盗风险，建议您更改为复杂的密码，如字母+数字组合");
					$("#pan").children("span").eq(0).css("background", "#ebbd05");

				} else {
					if(ainput.value.length > 10 && ainput.value.length <= 20) {
						$("#pan").children("span").eq(0).css("background", "#ebbd05");
						$("#pan").children("span").eq(1).css("background", "#ebbd05");
						aspan.hide();
						if(sum > 1) {
							$("#pan").children("span").eq(2).css("background", "#ebbd05");
						} else {
							$("#pan").children("span").eq(2).css("background", "#b5b4b4");
						}
					} else {
						$("#pan").children("span").eq(2).css("background", "#b5b4b4");
						$("#pan").children("span").eq(1).css("background", "#b5b4b4");
					}
				}
	
			}
		}

	}
	   $("#chong").on("blur",panduan3);
	    function panduan3(){
	    	var ainput=$(this).get(0);
        	if(ainput.value!=$("#mima").get(0).value){
        		    $(this).next("span").show();
        		     $(this).next("span").html("两次输入密码不一致");
        		     $(this).css("background-image","url(zhuce/one5.jpg)");
        		     
        	}else{
        		 $(this).next("span").hide();
        		$(this).css("background-image","url(zhuce/sucess.png)");
        	}
        	
        }
	    
	    /*    提交*/
	   $("#btn").on("click",btn);
	    function   btn(){
	    	if($("#xuan").prop("checked")){
	    		$(this).prev().hide();
	    	}else{
	    		$(this).prev().show();
	    	}
	    	if($("#xuan").prop("checked") &&$("#mima").val()==$("#chong").val() && $("#mima").val()!=""){
	    		 //  数据传送
	   $.post("http://localhost/liqunwang/liqun/php/zhuce.php",{"username":$("#txt").val(),"password":$("#mima").val()},function(data){
					if(data == 1){
							$("#box").css("display","block");
							$("#txt").next("span").html("该用户名可用");
							$("#box a").on("click",function(){
								location.href="index.html";
							});
						}else{
							$("#txt").next("span").html("该用户名已存在");
						}
});
	    		
	    	}else{
	    		
	    	};
	    
		if($("#txt").val().length == 0 || $("#mima").val().length == 0){
						$("#mima").next("span").show();
						$("#mima").next("span").html("请输入密码");
						$("#chong").next("span").show();
						$("#chong").next("span").html("请输入密码");
						return;
					}
 
	 };   
});
