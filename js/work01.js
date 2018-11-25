	
		
			var app = new Vue({
				el: '#app .choose',
				data: {
					nums01: 1,
					goods
				}
			});

			
			
			
			
		
			//底部切换
			$(function() {
				$('.weui-tabbar__item').on('click', function() {
					$(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
				});
			});

			//选择切换1

			var img1 = document.querySelector(".img1");
			img1.onclick = function() {
				if(this.src.search("chooses.png") != -1) {
					this.src = "img/ok.png";
				} else {
					this.src = "img/chooses.png";
				}
			};


			//全选

//			var alls = document.querySelector(".chs");
//			alls.onclick = function() {
//				if(this.src.search("chooses.png") != -1) {
//					this.src = "img/ok.png";
//					img1.src = "img/ok.png";
//					img2.src = "img/ok.png";
//					img3.src = "img/ok.png";
//				} else {
//					this.src = "img/chooses.png";
//					img1.src = "img/chooses.png";
//					img2.src = "img/chooses.png";
//					img3.src = "img/chooses.png";
//				}
//
//			};