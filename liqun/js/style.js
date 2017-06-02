$(function(){
	 /*购物车专用*/
	  var odiv=document.getElementById("top-right");
		  var  op=odiv.getElementsByTagName("p")[0];
		  var oul=document.getElementById("right-tab")
		  var  obtn=oul.getElementsByClassName("btn");
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
		  	  
		  for(var  i=0; i<obtn.length;i++){
		  	obtn[i].onclick =function  (){
		   var  id=this.getAttribute("mulu-id");
		    obj[id] = obj[id] ?  ++obj[id]  :  1 ;	   		
		   				num++;
	   			if(num==0){
	   				op.style.display="none";
	   			}else{
	   				op.style.display="block";
	   				
	   			}
	   		    var  jishustr=JSON.stringify(obj);
	   			setcookie("dianji",jishustr,10);
	   			op.innerHTML=num;
	   			
		   }
 	
		  }
		   
});