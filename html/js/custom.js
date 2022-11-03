$(document).ready(function(){
	//img height 
	
	var imgHegiht2 = $(".news_img img").height();
	$(".news_img").css("height",imgHegiht2);

	var imgHeight3 =$(".img_wrap").height();
	$(".gallery_txt").css("height",imgHeight3);
	//gnb hover
	$(".gnb>li").mouseover(function(){
		$(".lnb_bg").addClass("on");
		$("header").addClass("on");
		$(".menu").addClass("active");
	});
	$(".gnb>li").mouseout(function(){
		$(".lnb_bg").removeClass("on");
		$("header").removeClass("on");
		$(".menu").removeClass("active");
	});
	//menu_humberger
	$(".menu").click(function(){
		$(this).toggleClass("active");
		$(".lnb_bg").toggleClass("on");
		$("header").toggleClass("on")
		
	})
	//반응형 메뉴 
	$(window).resize(function(){
		var imgHegiht = $("ul.bna_box li .after_box img").height();
		$(".before_box").css("height",imgHegiht);
		var imgHegiht2 = $(".news_img img").height();
		$(".news_img").css("height",imgHegiht2);
		var imgHeight3 =$(".img_wrap").height();
		$(".gallery_txt").css("height",imgHeight3);




	});

	//반응형 메뉴 
	if($(window).width() < 600){
		
		$(".menu").click(function(){
			console.log("dddd")
			$(".mhd").toggleClass("on");
		});
		$(".gnb").mouseout(function(){
			$("header").addClass("on");
			$(".lnb_bg").addClass("on");
			$(".menu").addClass("active");
		});
		$(".gnb>li").each(function(){
			var idx = $(this).index();
			$(this).click(function(){
				$(".gnb>li").not(this).removeClass("on");
				$(this).toggleClass("on");
				

				
			})
		})
	}



	 var swiper = new Swiper('.swiper-container', {
		loop: true,
		slidesPerView: 'auto',
     	centeredSlides: true,
      	spaceBetween: 10,
     	allowTouchMove: true,
         	
		
	 // autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
	   	breakpoints: { 
	   		
	   		600: {
		      	slidesPerView: 1,
		      	allowTouchMove: false,
	        }
	  	},
     	pagination: {
       		 el: '.swiper-pagination',
        	 // clickable: true,
         	 type: 'progressbar',
     	},
	    navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },
    });
	 var swiper = new Swiper('.swiper-container2', {
	 	loop: true,
	 	allowTouchMove: true,
	 	slidesPerView: 'auto',
     	slidesPerGroup: 1,
	 	spaceBetween: 10,

	 	pagination: {
       		el: '.swiper-pagination2',
        	clickable: true,
         
      	},
	    breakpoints: {
	        768: {
	        	slidesPerView: 3,
		      	spaceBetween: 15,
		      	centeredSlides: false,
		      	slidesPerGroup: 3,
		      	
	        },
	        600 : {
	        	slidesPerView: 2,
			    spaceBetween: 15,
			    centeredSlides: false,
			 	slidesPerGroup: 2,

	        }
	        
	        
	    }
	 });
	//docoter-tap 

	$(".doctor_steff li").each(function(){
		$(this).click(function(e){
			e.preventdefault;
			$(".doctor_steff li").removeClass("on");
			$(this).addClass("on");
			var idx = $(this).index();
			$(".steff_box li").removeClass("on");
			$(".steff_box li").eq(idx).addClass("on");
			
		})
		
		
	})

	// //before&after 롤링 
	// var bnaLen = $(".bna_box li").length;
	// var bnapager = bnaLen/3;
	// var bnaWrapWidth = $(".bna_wrap").width();
	

	
	// $(".bna_box").css({
	// 	"width" : (100*bnaLen)/3 +"%",
	// })
	// $(".bna_box li").css({
	// 	"width" : (100/bnaLen)+-0.5+"%",

	// })
	// for(var i =0; i<bnapager; i++){
	// 	$(".bna_pager").append("<li class='pager-item'></li>");
	// }
	// var bnaPagerLen = $(".bna_pager li").length;

	// $(".bna_pager li").each(function(){

	// 	$(".bna_pager li").first().addClass("on");
	// 	$(this).click(function(e){
	// 		$(".bna_pager li").removeClass("on");
	// 		$(this).addClass("on");
	// 		var idx = $(this).index();
	// 		for(var i = 0; i<bnaPagerLen; i++ )
	// 		if(idx == i) {
	// 			$(".bna_box").css({
	// 				"margin-left" : -i*bnaWrapWidth,
	// 			})
	// 		}

	// 	})
		
	// })

	//galllery

	$(".small_img li").each(function(){
		
		
		$(this).click(function(){
			$(".small_img li").removeClass("on");
			$(this).addClass("on");
			var imgSrc = $(this).children("img").attr("src");
			$(".big_img img").attr("src",imgSrc);

			var idx = $(this).index();
			if(idx == 0){
				$(".gallery_txt .num").text("01.");
				$(".gallery_txt .gallery_tit").text("미소치과병원 데스크");
				$(".gallery_txt .gallery_desc").text("깔끔한 화이트 톤에 모던한 인테리어로 치과의 이미지와 맞도록 청결한 느낌을 주는 공간입니다.세계 최고의 환기 및 공기청정시스템 미국식(OSHA)감염 예방 방지 및 소독시스템으로 병원 위생에 주의를 기울이고 있습니다.");

				$(".sub_img img").attr("src","./img/small_gallery01.jpg")
			}else if (idx == 1){
				$(".gallery_txt .num").text("02.");
				$(".gallery_txt .gallery_tit").text("미소치과병원 진료실 ");
				$(".gallery_txt .gallery_desc").text("고객을 위해 최선을 다하는 미소치과병원입니다. 청결하고 안전한 진료를 위한 철저한 위생관리를 진행하고 있습니다.");
				$(".sub_img img").attr("src","./img/small_gallery02.jpg")
			}else if (idx == 2){
				$(".gallery_txt .num").text("03.");
				$(".gallery_txt .gallery_tit").text("미소치과병원 3DCT");
				$(".gallery_txt .gallery_desc").text("저희 병원에서는 최첨단 3D CT를 도입하여, 임플란트 및 여러 진료에 활용하며 보다 정확한 진료를 위하여 노력하고 있습니다.  ");
				$(".sub_img img").attr("src","./img/small_gallery03.jpg")
			}else if (idx == 3){
				$(".gallery_txt .num").text("04.");
				$(".gallery_txt .gallery_tit").text("미소치과병원 기공소 ");
				$(".gallery_txt .gallery_desc").text("일반적인 치과에서는 보철물을 제작하기 위하여 외부 기공소에 의뢰를 하지만, 미소치과병워에서는 워내 기공실을 보유하고 있어 보다 빠르고 정확하게 보철물을 제작할 수 있습니다.");
				$(".sub_img img").attr("src","./img/small_gallery04.jpg")
			}

		})
	})

	//스크롤 
	
	function animation_y (){
		var window_height = $(window).height();
		var window_top_position = $(window).scrollTop();
		var window_bottom_position = (window_top_position + window_height);

		$(".animate_element").each(function(){
			var element_height = $(this).outerHeight();
			var element_top_position = $(this).offset().top;
			var element_bottom_positon = (element_top_position + element_height);
			$(this).css({ transform: "translateY(50px)", transition:"all 1s",opacity:"0"})

			if((element_bottom_positon >= window_top_position) && (element_top_position <= window_bottom_position)){
				$(this).css({transform: "translateY(0px)",opacity:"1"});

			}else {
				$(this).css({transform: "translateY(50px)",opacity:"0"});
			}
		})

	}

	$(window).scroll(function(){
		animation_y();
		//top_btn 

	});
	$(".top_btn").click(function(){
			$("html, body").animate({
				scrollTop :0
			}, 1000);
			 return false;
	});
	// $(".bna_wrap ").click(function(){
	// 			console.log("터치스타트 ");
	// });
	
	$('.bna_wrap').on('tap',function(e){ 
		  e.preventDefault(); 
		console.log("터치스타트 ");
		});
	$('.bna_wrap').bind('touchmove', function(e){ 
		  e.preventDefault(); 
		console.log("터치무 ");

		});

	
});