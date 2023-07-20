$(document).ready(function(){

	
	//햄버거메뉴 
	// $(".menu_all").click(function(){
	// 	$(".menu_wrap").addClass("on");
	// });
	// $(".close_btn").click(function(){
	// 	$(".menu_wrap").removeClass("on");
	// });
	//메뉴호버
	$(".menu_all").mouseover(function(){
		
		$(".menu_wrap").addClass("on");

	});
	$(".menu_box").mouseover(function(){
		$(".menu_wrap").addClass("on");
	});
	$(".menu_box").mouseout(function(){
		 $(".menu_wrap").removeClass("on");
	});
	$(".menu_all").mouseout(function(){
		 $(".menu_wrap").removeClass("on");
	});
	
	//상품이미지 가로 스크롤
	$(".prd_thumb").mouseover(function(){
		$("#wrap").on('scroll touchmove mousewheel', function(e) {
			e.preventDefault();
		  	e.stopPropagation();
		  	return false;
		});
		$('.prd_thumb').on('mousewheel', function(e) {
			
			if(e.originalEvent.wheelDelta > 0){
				$('.prd_thumb').stop().animate( { scrollLeft : '-=50' },50 );
				
			}else {
				$('.prd_thumb').stop().animate( { scrollLeft : '+=50' },50 );
			}
		
		});
		 
	});
	$(".prd_thumb").mouseout(function(){
		$("#wrap").off('scroll touchmove mousewheel');
	});
	
	

	// 상품이미지 갯수에 따라 width     
	var img_len = $("ul.prd_thumb_list>li").length;
	$("ul.prd_thumb_list").css("width",img_len*85);
	


	
	//카드혜택 클릭시
	$(".credit_card ").click(function(e){
		e.preventDefault();
		$(this).toggleClass("on");
		//카드 height 
		var card_height = $(".card_info ul>li.on .card_txt").css("height");
		$(".card_info ul>li.on .card_txt_wrap").css({height:card_height});
	});
	$(".card_info ul>li").click(function(e){
		e.preventDefault();
		$(".card_info ul>li").removeClass("on");
		$(this).addClass("on");
	});	
	$(".close_btn").click(function(e){
		e.preventDefault();
		$(".credit_card").removeClass("on");
	});	
	
	
	//실시간 검색 롤링 
   	var ticker = function(){
   		 timer = setTimeout(function(){
        $('ul.trending li:first').animate( {marginTop: '-28px'}, 400, function()
        {
            $(this).detach().appendTo('ul.trending ').removeAttr('style');
        });
        ticker();
   		 }, 2000);         
 	 };
	ticker();
	//마우스 오버시 기능정지
	$("ul.trending ").mouseover(function(){
		clearTimeout(timer);
	})
	$("ul.trending ").mouseout(function(){
		  ticker();
	})


	//실시간 검색 더보기 클릭
	$(".rankmore").click(function(e){
		e.preventDefault();
		$(".trending_wrap").addClass("on");
	});	
	$(".close_btn_rank").click(function(e){
		e.preventDefault();
		$(".trending_wrap").removeClass("on");
	});	


	//찜 
	$(".prd_favorite").click(function(e){
		e.preventDefault();
		$(this).toggleClass("on");
	});	

	// 상품 이미지 클릭시 메인이미지 화면 변경
	$("ul.prd_thumb_list>li").click(function(){
		var idx = $(this).index();
		$("ul.prd_thumb_list>li").removeClass("on");
		$(this).addClass("on");
		var img_src = $(this).children().children('img').attr("src");
		$(".main_img").children().children('img').attr("src",img_src);
	});
	
	//상품 돋보기

	var offsetLeft = $(".main_img figure").offset().left;
	var offsetTop = $(".main_img figure").offset().top;

	var half_swidth = $(".zoom").width()/2;
	var half_sheight= $(".zoom").height()/2;

	

	$(".main_img").mousemove(function(e){
		var mouseX = e.pageX - offsetLeft;
		var mouseY = e.pageY - offsetTop;
		var realX, realY;

		if(mouseX < half_swidth){
			realX = 0;
		}else if(mouseX +half_swidth > $(".main_img").width()){
			realX = $(".main_img").width() - $(".zoom").width();
		}else{
			realX = mouseX - half_swidth;
		}
		if(mouseY < half_sheight){
			realY = 0;
		}else if(mouseY + half_sheight > $(".main_img").height()){
			realY = $(".main_img").height() - $(".zoom").height();
		}else {
			realY = mouseY - half_sheight;
		}
		
		$(".zoom").css({
			left: realX,
			top:realY
		});

		var img_src = $(this).find(".zoom_main img").attr("src");
		$(".zoom_view img").attr("src",img_src);
		var viewX = realX * ($(".zoom_view img").width() - $(".zoom_view").width())/($(".zoom_view").width() -$(".zoom").width() );
		var viewY = realY * ($(".zoom_view img").height() - $(".zoom_view").height())/($(".zoom_view").height() -$(".zoom").height() );
		$(".zoom_view img").css({
			left:-viewX,
			top:-viewY
		})


	});	


	$(".main_img").mouseover(function(e){
		$(".main_img").addClass("active");
	});
	$(".main_img ").mouseout(function(e){
		$(".main_img").removeClass("active");
	});

	//옵션
	//색상 옵션 클릭시 _색상 이름/품절 텍스트 _메인화면옵션	
	$("ul.option_color.main .item_color").click(function(e){
		var chk_color = $(this).text();
		$(".sign_txt").text(chk_color);
		//사이즈 옵션 활성화처럼 보이기 위해 배경색상 변경
		$("ul.option_size.main>li>a").css("background","none");
		$("ul.option_size.main>li>a").text("사이즈 옵션을 선택해 주세요.")
			
	});
	//색상 옵션 클릭시 _색상 이름/품절 텍스트 _퀵화면옵션
	$("ul.option_color.quick .item_color").click(function(e){
		//사이즈 옵션 활성화처럼 보이기 위해 배경색상 변경
		$("ul.option_size.quick>li>a").css("background","none");
		
	});

	if( $(":radio[name='prd_color']:checked").length > 0) {

		$(".sign_txt").remove();
		$("ul.option_size.main>li>a").css("background","none");


	}





	//옵션 중 품절 버튼-메인화면
	$("ul.option_color.main .color_noti").click(function(e){
		//품절버튼 눌렀을때 사이즈옵션창 비활성화처럼 보이기 위해 배경색 변경
		$("ul.option_size.main>li>a").css("background","#f8f8f8");
		//비활성화시 멘트
		$("ul.option_size.main>li>a").text("상위 옵션을 선택해 주세요.");
		//품절 안내멘트 보여지기 
		$(this).parent().parent().find(".sign_txt").remove();
		var sign_txt = "<p class='sign_txt'><span class='red'>[품절]</span> 품절 입니다.</p>";
		$("ul.option_color.main").parent().append(sign_txt);

		//비활성화 클릭시 prd_color체크 해제
		$("input:radio[name='prd_color']").attr("checked",false);

	})
	//옵션 중 품절 버튼-퀵화면
	$("ul.option_color.quick .color_noti").click(function(e){
		//품절버튼 눌렀을때 사이즈옵션창 비활성화처럼 보이기 위해 배경색 변경
		$("ul.option_size.quick>li>a").css("background","#f8f8f8");
		//비활성화 클릭시 prd_color체크 해제
		$("input:radio[name='quick_prd_color']").attr("checked",false);

	})

	//사이즈옵션창 클릭-메인화면
	$("ul.option_size.main>li>a").click(function(e){
		//색상 옵션 중 체크가 1개 라도 되어있으면 토글클래스 on 될 수 있게 /없으면 클릭 비활성화
		var chk_length = $(":radio[name='prd_color']:checked").length;

		if(chk_length > 0){
			e.preventDefault();
			$("ul.option_size.main").toggleClass("on");
			// if($("ul.option_size").hasClass("on") === true){
			// 	!$("ul.option_size").click(function(e){
			// 		console.log("응 그곳 빼고 다야 ")
			// 	});
			// }

			

		}else {
			return false;
		}



	})	
	
	//사이즈옵션창 클릭-퀵화면
	$("ul.option_size.quick>li>a").click(function(e){
		//색상 옵션 중 체크가 1개 라도 되어있으면 토글클래스 on 될 수 있게 /없으면 클릭 비활성화
		var chk_length = $(":radio[name='quick_prd_color']:checked").length;

		if(chk_length > 0){
			e.preventDefault();
			$("ul.option_size.quick").toggleClass("on");
		}else {
			return false;
		}
	})	
	//html,body click 옵션창 닫기 - 수량 갯수 입력되	
	$("html,body").click(function(e){

		//var cart_cnt = $("input:text[name='cart_cnt']").val();
		
		



		if($("ul.option_size").hasClass("on")){
			if(!$("ul.option_size").has(e.target).length){
				$("ul.option_size").removeClass("on");
			}
		}

		
	});




		









	
	function addComma(num) {
	  var regexp = /\B(?=(\d{3})+(?!\d))/g;
	  return num.toString().replace(regexp, ',');
	}
	function GetNumString(num) { 
		var rtn = parseFloat(num.replace(/,/gi, "")); 
		if (isNaN(rtn)) { 
			return 0; 
		} 
		else { 
			return rtn; 
		} 
	}


	
	

	$("ul.option_size.main ul.size_list>li.opt>a").click(function(e){
		e.preventDefault();
		var main_prd_chk_size = $(this).text();
		var main_prd_chk_color = $(":radio[name='prd_color']:checked").val();
		var main_prd_size_length = $(this).attr("data-size");
		var price =  GetNumString($(".price.main .num").text());
		
		if( $(".prd_option_list.main li").is("."+main_prd_size_length) == true ){

			alert("이미 추가된 옵션입니다. 수량 조절은 아래 선택사항에서 해주십시오.");
			$("ul.option_size.main").removeClass("on");
			return false;

		}else {
			var opt = 	"<li class="+main_prd_size_length+">"+
							"<div class='prd_chk_item'>"+
								"<span class='prd_chk_color'>"+main_prd_chk_color+"</span> / "+"<span class='prd_chk_size'>"+main_prd_chk_size+"</span>"+
							"</div>"+
							"<div class='cont_area'>"+
								"<button type='button' count_range='m'  class='numbtn_minus ir_pm'>수량 1감소</button>"+
								"<input type='text' name='cart_cnt' title='구매수량' value='1'>"+
								"<button type='button' count_range='p' class='numbtn_plus ir_pm'>수량 1증가</button>"+
							"</div>"+
							"<div class='opt_price'> <span class='num'>"+addComma(price)+ "</span>원</div>"+
							"<button type='button' class='opt_del ir_pm'>상품취소</button>"+
						"</li>";

			$(".prd_option_list ul").append(opt);	

			//리셋화면
			$("input:radio[name='prd_color']").attr("checked",false);
			$(".sign_txt").remove();
			$("ul.option_size.main").removeClass("on");
			var sign_txt = "<p class='sign_txt'><span class='red'>[필수]</span> 옵션을 선택해 주세요.</p>";
			$("ul.option_color.main").parent().append(sign_txt);
			$("ul.option_size.main>li>a").css("background","#f8f8f8");
			$("ul.option_size.main>li>a").text("상위 옵션을 선택해 주세요.");

			//계산 합계
			var total_txt = GetNumString($(".price_total.main .price").text());
			var sum = parseInt(price) + parseInt(total_txt);
			$(".price_total.main .price").text(addComma(sum));
		}





	
	});	



	$("ul.option_size.main ul.size_list li.noti>a").click(function(e){
		return false;
	});	

	//선택한 옵션 cancel
	$(document).on("click", ".opt_del", function(e){
		$(this).parent().remove();
		var total_txt =GetNumString($(".price_total.main .price_num .price").text());
		var change_txt = GetNumString($(this).siblings(".opt_price").find(".num").text());
		var price_txt = GetNumString($(".price.main .num").text());

		var imsub =  parseInt(total_txt) - parseInt(change_txt);
		$(".price_total.main .price_num .price").text(addComma(imsub));
	});
	//수량 갯수 플러스 
	$(document).on("click", ".prd_option_list.main .cont_area button[type='button']", function(e){
		var type = $(this).attr("count_range");

		var count_val = $(this).siblings("input:text[name='cart_cnt']").val();

		if(type == "m"){
			if(count_val < 2){
				 return;
			}
			$(this).siblings("input:text[name='cart_cnt']").val(parseInt(count_val)-1);
			 var price_txt = GetNumString($(".price.main .num").text());
			 var change_txt = GetNumString($(this).parent().siblings(".opt_price").find(".num").text());
			 var result_price = change_txt - price_txt;
			 $(this).parent().siblings(".opt_price").find(".num").text(addComma(result_price));
			var total_txt =GetNumString($(".price_total.main .price_num .price").text());
			 var imsub =  parseInt(total_txt) - parseInt(price_txt);
				$(".price_total.main .price_num .price").text(addComma(imsub));

		}else if(type == "p"){
			//수량 1씩 증가
			$(this).siblings("input:text[name='cart_cnt']").val(parseInt(count_val)+1);
			
			var price_txt = GetNumString($(".price.main .num").text());
			var change_txt = GetNumString($(this).parent().siblings(".opt_price").find(".num").text());
			var result_price = price_txt + change_txt;
			$(this).parent().siblings(".opt_price").find(".num").text(addComma(result_price));
			var total_txt =GetNumString($(".price_total.main .price_num .price").text());


			var sum = parseInt(total_txt) + parseInt(price_txt) ;
			console.log(change_txt,total_txt,sum)
			$(".price_total.main .price_num .price").text(addComma(sum));
			

			
		} 
		
	});
	









	// $(".cont_area input:text[name='cart_cnt']").keydown(function(e){
		

	// 	if()
	// })







	$(window).resize(function(){
		//$(window).width()
		
		
	});
	


});
			