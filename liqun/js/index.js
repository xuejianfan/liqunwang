			/*数据调用*/
			$(function() {
				$.get("json/yema.json", function(data) {
					$("#banner-ul li").hover(function() {
						var index = $(this).index();
						$(this).find(".content").show();
						var data1 = data[index];
						var html = template("tabs", data1);
						$(".content").html(html);

					}, function() {
						$(this).find(".content").hide();
					});

				});

			});

			$(function() {
				$.get("json/louti.json", function(data) {

					for(var i = 0; i < data.length; i++) {
						var html = template("loutab", data[i]);
						$(".lou-content").eq(i).html(html);
					}
				}).done(function() {
					for(var i = 0; i < $(".Louti").length; i++) {
						banner($(".lou-content").eq(i).find(".list  li"), $(".Louti").eq(i).find(".lou-ul span"), "lou-hover");
						banner($(".lou-content").eq(i).find(".lou-banner  li"), $(".Louti").eq(i).find(".last-ul span"), "last-hover");
					}
					$.get("json/louti.json", function(data) {
						for(var i = 0; i < data.length; i++) {
							$(".lou-right").eq(i).attr({
								index: i
							});
							var data1 = data[i].tab;
							$(".lou-right").eq(i).find(".lou-tab li").eq(0).css("background-image", "url(img/3f/floor_pdt_tab.jpg)");
							var htmls = "";
							if(i != 4) {
								for(var j = 0; j < data1[0].length; j++) {
									htmls += "<div  class='tab-ye'><a class='tab-dan' href='product.html'><img src='" + data1[0][j].imgsrc + "'/></a><a class='tab-zi' href='product.html'>" + data1[0][j].name + "</a><p>" + data1[0][j].money + "<span>自营</span></p></div>";
								}
							} else {
								for(var j = 0; j < data1[0].length; j++) {
									htmls += "<a href='product.html'><img src='" + data1[0][j].imgsrc + "'/></a>"
								}
							}

							$(".last-left").eq(i).html(htmls);
							$(".last-left").eq(4).find("img").css({
								"float": "left"
							});
							$(".last-left").eq(4).find("img:nth-of-type(1)").css({
								"height": "250",
								"width": "100%"
							});
							$(".last-left").eq(4).find("a:nth-of-type(n+2)").css({
								"width": "25%",
								"float":"left",
								"height":"66",
								"box-sizing": "border-box",
								"border": "1px solid #dedede"
							});
							$(".last-left").eq(4).find("a:nth-of-type(n+2) img").css({"width":"100%","height":"100%"});
							$(".lou-right").eq(i).find(".lou-tab li").hover(function() {
								$(this).css("background-image", "url(img/3f/floor_pdt_tab.jpg)").siblings().css("background-image", "");
								var num = $(this).parent().parent().attr("index");
								var data2 = data[num].tab
								var index = $(this).index();
								var html = "";
								if(num != 4) {
									for(var k = 0; k < data2[index].length; k++) {
										html += "<div  class='tab-ye'><a class='tab-dan' href='product.html'><img src='" + data2[index][k].imgsrc + "'/></a><a class='tab-zi' href='product.html'>" + data2[index][k].name + "</a><p>" + data2[index][k].money + "<span>自营</span></p></div>";
									}
								} else {
									if(index != 4) {
										for(var k = 0; k < data2[index].length; k++) {
											html += "<a href='product.html'><img src='" + data2[index][k].imgsrc + "'/></a>"
										}
									} else {
										for(var k = 0; k < data2[index].length; k++) {
											html += "<div  class='tab-ye'><a class='tab-dan' href='product.html'><img src='" + data2[index][k].imgsrc + "'/></a><a class='tab-zi' href='product.html'>" + data2[index][k].name + "</a><p>" + data2[index][k].money + "<span>自营</span></p></div>";
										}
									}

								}

								$(this).parent().next().find(".last-left").html(html);
								if(index != 4) {
									$(".last-left").eq(4).find("img").css({
										"float": "left"
									});
									$(".last-left").eq(4).find("img:nth-of-type(1)").css({
										"height": "250",
										"width": "100%"
									});
				$(".last-left").eq(4).find("a:nth-of-type(n+2)").css({
								"width": "25%",
								"float":"left",
								"height":"66",
								"box-sizing": "border-box",
								"border": "1px solid #dedede"
							});
							$(".last-left").eq(4).find("a:nth-of-type(n+2) img").css({"width":"100%","height":"100%"})
								}

							}, function() {

							});

						}

					});

				});
				var str = chacookie("dianji");
				var op = $("#top-right p").eq(0)
				var obj = str ? JSON.parse(str) : {};

				var num = 0;
				for(var i in obj) {
					num += obj[i];
					if(num != 0) {
						op.show();
						op.html(num);
					} else {
						$("#top-right p").eq(0).hide();
					}
				}
			});
			/*  楼梯运动*/
			$(function() {
				for(var i = 1; i <= $("#LoutiNav ul li").length; i++) {
					var yangshi = "url(img/louti/nav" + i + ".jpg) no-repeat left -2px top 0";
					$("#LoutiNav  li").eq(i - 1).css("background", yangshi);
				}
				$(window).on("scroll", scroll);
				//滚动函数
				function scroll() {
					var height = $(this).scrollTop();
					if($(window).scrollTop() > 500) {
						$("#LoutiNav").css("display", "block");
					} else {
						$("#LoutiNav").css("display", "none");
					}
					$(".Louti").each(function() {
						var gun = $(this).index();
						var scroll = $(".Louti").eq(gun).offset().top - 300;

						if(height > scroll) {
							$("#LoutiNav  li").not('.last,.first').eq(gun).addClass("hover").siblings().removeClass("hover");
						}
					});
				};
				scroll();
				var louti = $("#LoutiNav ul li").not('.last,.first');
				//点击事件
				louti.on("click", function() {
					$(window).off("scroll");
					$(this).addClass("hover").siblings().removeClass("hover");
					var index = $(this).index();
					var top = $(".Louti").eq(index - 1).offset().top;
					$("body").stop().animate({
						scrollTop: top
					}, 1000, function() {
						$(window).on("scroll", scroll);
					});

				});
				$("#LoutiNav ul li:last").hover(function() {
					$(this).find("span").show();
				}, function() {
					$(this).find("span").hide();

				});
				$("#LoutiNav ul li:last ").on("click", function() {
					$("#LoutiNav").css("display", "none");
					$("body").animate({
						scrollTop: 0
					}, 1000, function() {

					});
				})
			});
$(function(){
	banner($(".lunbo li"),$("#list-btn span"),"list-hover");
			banner($("#banner-last li"),$(".btn-ul span"),"ul-hover");
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
			
