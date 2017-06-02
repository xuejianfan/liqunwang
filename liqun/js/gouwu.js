	$(function() {
		var str = chacookie("dianji");
		var op = $("#top-right p").eq(0)
		var obj = str ? JSON.parse(str) : {};
		var num = 0;
for(var i in obj) {
				num += obj[i];
				op.show();
				op.html(num);
		}
		$.get("json/product.json", function(data) {
			var dianjistr = chacookie("dianji");
			var oul = document.getElementById("chelist");
			var obj = JSON.parse(dianjistr);
			for(var i = 0; i < data.length; i++) {
				for(var attr in obj) {
					var html = "";
					if(data[i][attr]) {
						var oli = document.createElement("li");
						var str = Number(data[i][attr].money.substring(1));

						html = "<div  class='pic'><img src='" + data[i][attr].imgsrc + "'/></div><div class='name'><a href='danpin.html?id=" + data[i][attr].id + "'>" + data[i][attr].name + "</a></div><div class='pirce'>" + data[i][attr].money + "</div><div class='num'><a href='javascript:void(0);' title='减少'>-</a><input value='" + obj[attr] + "'><a href='javascript:void(0);' title='增加'>+</a></div><div class='xiaoji'>￥" + (obj[attr] * str) + ".00</div><div class='jifen'>" + parseInt((obj[attr] * str) / 10) + "</div><div class='caozuo'><a id='shanchu' href='javascript:void(0);'>清除</a></div><div class='other'></div>";
						oli.innerHTML = html;
						oul.appendChild(oli);
					}
				}

			}
			$(".caozuo a").on("click", function() {
				var idstr = $(this).parent().parent().find(".name a").attr("href");
				var idarr = idstr.split("=");
				var id = idarr[1];
				$(this).parent().parent().remove();
				for(var attr in obj){
					if(attr==id){
						delete  obj[attr] ;
					}
				}
				str = JSON.stringify(obj);
				setcookie("dianji", str, 12);
				location.reload();
			});

			$(".num").find("a:nth-of-type(1)").on("click", function() {
				var dianjistr = chacookie("dianji");
				var obj = JSON.parse(dianjistr);
				var idstr = $(this).parent().parent().find(".name a").attr("href");
				var idarr = idstr.split("=");
				var id = idarr[1];
				var danjia = $(this).parent().prev().html().substring(1);
				var shuliang = Number($(this).next().val());
				if(shuliang <= 1) {
					$(this).parent().parent().remove();
					for(var attr in obj){
					if(attr==id){
						delete  obj[attr] ;
					}
				}
				str = JSON.stringify(obj);
				setcookie("dianji", str, 12);
				location.reload();
				} else {
					--shuliang;
					obj[id] = shuliang;
					var jishustr = JSON.stringify(obj);
					setcookie("dianji", jishustr, 10);
					$(this).next().val(shuliang);
					var strs = "￥" + (danjia * shuliang) + ".00";
					var jifen = parseInt((danjia * shuliang) / 10);
					$(this).parent().next().html(strs);
					$(this).parent().next().next().html(jifen);
					location.reload();
				}
			});
			$(".num").find("a:nth-of-type(2)").on("click", function() {
				var dianjistr = chacookie("dianji");
				var obj = JSON.parse(dianjistr);
				var idstr = $(this).parent().parent().find(".name a").attr("href");
				var idarr = idstr.split("=");
				var id = idarr[1];
				var danjia = $(this).parent().prev().html().substring(1);
				var shuliang = Number($(this).prev().val());
				++shuliang;
				obj[id] = shuliang;
				var jishustr = JSON.stringify(obj);
				setcookie("dianji", jishustr, 10);
				location.reload();
				$(this).next().val(shuliang);
				var strs = "￥" + (danjia * shuliang) + ".00";
				var jifen = parseInt((danjia * shuliang) / 10);
				$(this).parent().next().html(strs);
				$(this).parent().next().next().html(jifen);

			});
		});

	});