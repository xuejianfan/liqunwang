function banner(oli, obtn, classname) {
	$(function() {
		var index = 0;
		oli.eq(0).fadeIn();
		var ali = oli;
		var abtn = obtn;
		var ming=setInterval(move, 3000);
		abtn.eq(0).addClass(classname).siblings().removeClass(classname);
		function move() {
			index++;
			if(index == ali.length) {
				index = 0;
			}
			ali.eq(index).fadeIn(300).siblings().hide();
			abtn.eq(index).addClass(classname).siblings().removeClass(classname);
		}
		ali.hover(function() {
			clearInterval(ming);
			index = $(this).index();
		}, function() {
			ming = setInterval(move, 3000);
		});
		
		
		abtn.hover(function() {
			clearInterval(ming);
			index = $(this).index();
			ali.eq(index).fadeIn(300).siblings().hide();
			abtn.eq(index).addClass(classname).siblings().removeClass(classname);
		}, function() {
			ming = setInterval(move, 3000);
		});

	});

};

/*左右运动banner*/
(function($, undefined) {
	$.fn.slider = function(opts) {
		var defaults = {
			width: 760,
			height: 300,
			direction: "left",
			interval: 3000,
			showNav: false,
			showBtns: false,
			olists: $(".sliderList"),
			obtn: $(".sliderBtns"),
			movetime: 600

		};
		var options = $.extend(true, {}, defaults, opts);

		function Slider(options) {
			/*this.ele = mubiao;*/
			this.lists = options.olists;
			this.nav = $(".sliderNav");
			this.btns = options.obtn;

			this.lists.find("li").eq(0).clone(true).appendTo(this.lists);
			this.list = this.lists.find("li");

			/*	this.ele.css({"width":options.width,"height":options.height});*/
			this.list.css({
				"width": options.width,
				"height": options.height
			});
			/*this.list.find("img").css({"width":options.width,"height":options.height});*/
			this.btns.find(".btns").css("top", ((options.height / 2) - 35));

			switch(options.direction) {
				case "top":
					this.topBottom();
					break;
				default:
					this.leftRight();
			}
			if(options.showNav) {
				this.nav.show();
			}
			if(options.showBtns) {
				this.btns.show();
			}
		}
		Slider.prototype.leftRight = function() {
			this.lists.css({
				"width": options.width * this.list.length,
				"height": options.height
			});
			this.list.css("float", "left");
			this.timer = setInterval(move, options.interval);
			var _this = this;
			var index = 0;

			function move() {
				index++;
				if(index == _this.list.length) {
					index = 1;
					_this.lists.css("left", 0);
				}
				if(index == _this.list.length - 1) {
					_this.nav.find("li").eq(0).addClass("hover").siblings().removeClass("hover");

				} else {
					_this.nav.find("li").eq(index).addClass("hover").siblings().removeClass("hover");
				}
				_this.lists.stop().animate({
					"left": -index * options.width
				}, options.movetime, function() {

				});

			}
			this.list.hover(function() {
				clearInterval(_this.timer);
				index = $(this).index() - 1;
				move();
			}, function() {
				_this.timer = setInterval(move, options.interval);
			});

			this.nav.find("li").hover(function() {
				clearInterval(_this.timer);
				index = $(this).index() - 1;
				move();
			}, function() {
				_this.timer = setInterval(move, options.interval);
			});

			this.btns.find(".btns").eq(1).click(function() {
				clearInterval(_this.timer);
				move();
				_this.timer = setInterval(move, options.interval);
			})
			this.btns.find(".btns").eq(0).click(function() {
				clearInterval(_this.timer);
				console.log(index);
				if(index == 0) {
					index = _this.list.length - 3;
					_this.lists.css("left", (-(_this.list.length - 1)) * options.width);
				} else {
					index = index - 2;
				}
				move();
				_this.timer = setInterval(move, options.interval);
			})
		}
		Slider.prototype.topBottom = function() {

		}

		new Slider(options);
		return this;
	}

})(jQuery)

$(function() {
	$.get("json/banner.json", function(data) {
		var data = data.list;
		var html1 = "";

		for(var i = 0; i < data.length; i++) {
			var html = "";
			for(var j = 0; j < data[i].length; j++) {
				html += "<a href='product.html'><img src='" + data[i][j] + "'/></a>";
			}
			html1 += "<li>" + html + "</li>";
		};
		$("#menu-right ul").html(html1);
	}).done(function() {
		$("#menu-right").slider({
			"width": "1007",
			"height": "100%",
			"showBtns": "true",
			"interval": 5000
		});
	});
	$.get("json/banner.json", function(data) {
		var data1 = data.miao;
		var html2 = "";
		var time = "";
		for(var i = 0; i < data1.length; i++) {
			var html = "";
			var odate = "";
			for(var j = 0; j < data1[i].length; j++) {
				html += "<div  class='miaodan'><a class='miaopic' href='product.html'><img src='" + data1[i][j].imgsrc + "' /></a><a class='miaozi' href='product.html'>" + data1[i][j].title + "</a><p>抢购价：<span>" + data1[i][j].money + "</span></p><p><img src='img/banner1/biao.jpg'/><span  class='ms'>" + time + "</span></p></div>";
			}
			html2 += "<li>" + html + "</li>";
		}

		$(".miaolist").html(html2);

	
		$(data1).each(function(index, item) {
			$(item).each(function(i, m) {
				odate = new Date(m.time);
				(function(s) {
					setInterval(function() {
						for(var k = 1; k <= (data1.length+1); k++) {
							$(".miaolist li:nth-of-type(" + k + ") .ms").eq(i).html(miaosha(s));
						}
					}, 1000)
				})(odate)

			})
		})


	}).done(function() {
		$(".miao-box").slider({
			"width": 795,
			"height": 500,
			"showBtn": true,
			"olists": $(".miaolist"),
			"obtn": $(".sliderBtn"),
			"interval": 10000,
			"movetime": 1000
		})
	});

});