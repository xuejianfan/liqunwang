var dateUtil = {
	isLeapYear: function(year) {
		if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
			return true;
		}
		return false;

	},
	formatDate: function(oDate, str) {
		var yy = oDate.getFullYear();
		var mm = oDate.getMonth() + 1;
		var dd = oDate.getDate();
		mm = mm < 10 ? "0" + mm : mm;
		dd = dd < 10 ? "0" + dd : dd;
		var dateStr = yy + str + mm + str + dd;
		return dateStr;

	},
	getDays: function(year, month) {
		switch(month + 1) {
			case 2:
				if(dateUtil.isLeapYear(year)) {
					return 29;
				}
				return 28;
			case 4:
			case 6:
			case 9:
			case 11:
				return 30;
			default:
				return 31;
		}
	},
	getChaDays: function(oDate1, oDate2) {
		var ms = oDate1 - oDate2; //两个日期相减，得到相差的毫秒数
		var cha = Math.abs(ms / (1000 * 60 * 60 * 24));
		return cha;
	},
	getNDays: function(oDate, n, str) {
		var day = oDate.getDate();
		oDate.setDate(day + n); //设置日期时，直接加一个数，自动判断
		return dateUtil.formatDate(oDate, str);
	}
}



//    对外部样式获取样式的兼容写法；
/*             getComputedStyle(obj,false)[attr]谷歌兼容   */
//           obj.currentStyle[attr]   ie兼容
			function   getstyle(obj,attr){
				if(typeof  getComputedStyle=="function"){
					return  getComputedStyle(obj,false)[attr];
				}else{
					return  obj.currentStyle[attr];
				}

}
			
			function getStyle(obj,attr){
				if(obj.currentStyle){
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj,false)[attr];
				}
			}
			
			
			//获取到cookie里面的某个名字的属性
function   chacookie(name){
	      var str=document.cookie;
	      var   arrcookie=str.split("; ");
	      for( var  i  in arrcookie ){
	      	var  arr=arrcookie[i].split("=");
	      	if(name==arr[0]){
	      		return  arr[1];
	      	}
	      }
			
	}
	
	//添加cookie
	function  setcookie(name,val,day){
				var  oDate=  new  Date ();
				oDate.setDate(oDate.getDate()+day);
				document.cookie=name+"="+val+";expires="+oDate;
		}
	//删除cookie
			function  removecookie(name){
				setcookie(name,1,-1);
			}
			



//       计时器函数  

 function   jishi(){
			   	        mill++
			   	        mill=""+mill;
			   	        img7.src="img/"+mill[0]+".png";
			   	        if(mill>9){
			   	        	mill=0;
			   	        	 img7.src="img/"+"0"+".png";
			   	        	miao++;
			            	miao="" + panduan(miao);
			            	img5.src="img/"+miao[0]+".png";
							img6.src="img/"+miao[1]+".png";
			   	        }
		   				if(miao==60){
			   	    	miao=0;
			   	    	img5.src="img/"+"0"+".png";
			   	    	fen++;
			   	    	 fen="" + panduan(fen);
			            img3.src="img/"+fen[0]+".png";
							img4.src="img/"+fen[1]+".png"; 
		   				}
			      	 	if(fen==60){
			   	    		fen=0;
			   	    		img3.src="img/"+"0"+".png";
			   	    		shi++;
			   	    		  shi="" + panduan(shi);
			            	img1.src="img/"+shi[0]+".png";
							img2.src="img/"+shi[1]+".png";
			      	 	}
			       if(shi==24){
			       	  img1.src="img/"+"0"+".png";
			       	  img2.src="img/"+"0"+".png";
			       	  img3.src="img/"+"0"+".png";
			       	  img4.src="img/"+"0"+".png";
			       	  img5.src="img/"+"0"+".png";
			       	  img6.src="img/"+"0"+".png";
			     	 }	
			}	
			


//    倒计时秒杀时间处理函数 

 function   miaosha (odate){
			   	var  oDate2=  new  Date;
			   	
			   	var    cha=odate-oDate2;
			   	    if(cha<=0){
			   	    	tian="00";
			   	    	shi="00";
			   	    	fen="00";
			   	    	miao="00";
			   	    }else{
			   	    	cha=Math.abs(cha/1000);
			   var cz = Math.floor(cha);
			var   tian=	Math.floor((cz/3600)/24);
			var shi= Math.floor((cz-tian*3600*24)/3600);
			var fen = Math.floor((cz-tian*3600*24-3600*shi)/60);
			var miao = cz - 3600*24*tian-3600 * shi - 60 * fen;
			 		if(tian<10){
			 			tian="0"+tian;
			 		}
			 		tian=String(tian);
			 	   
			   	   if(shi<10){
			   	   shi	="0"+shi;
			   	   }
			   	   shi=String(shi);
			   
			   	   if(fen<10){
			   	   	fen="0"+fen;
			   	   } 
			   	  	 fen=String(fen);
			   	 
			   	     if(miao<10){
			   	     	miao="0"+miao;
			   	     }
			   	     miao=String(miao); 
			   	     
			   	    }
			  	  	    
			   	     return tian+"天"+shi+":"+fen+":"+miao;
			   }
			    