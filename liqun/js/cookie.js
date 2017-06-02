$(function(){
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
		});

