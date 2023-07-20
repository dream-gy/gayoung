$(document).ready(function(){

	
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
		$(".prd_favorite").toggleClass("on");
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
		}else if(mouseX + half_swidth > $(".main_img").width()){
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
	//숫자 세자리 마다 콤마
	function addComma(num) {
	  var regexp = /\B(?=(\d{3})+(?!\d))/g;
	  return num.toString().replace(regexp, ',');
	}
	//콤마 제거 
	function GetNumString(num) { 
		var rtn = parseFloat(num.replace(/,/gi, "")); 
		if (isNaN(rtn)) { 
			return 0; 
		} 
		else { 
			return rtn; 
		} 
	}



	//옵션
	//색상옵션창 클릭
	$("ul.option_color>li>a").click(function(e){
		e.preventDefault();
		$(this).parent().parent().toggleClass("on");
	});	

	$("ul.color_list>li.opt").click(function(e){
		e.preventDefault();
		$("ul.color_list>li").removeClass("selected");
		$(this).addClass("selected");

		$("ul.option_color").removeClass("on");
		var this_txt = $(this).children().text();
		$("ul.option_color>li>a").text(this_txt);
		$("ul.option_size").addClass("focus");
		$("ul.option_size>li>a").text("사이즈 옵션을 선택해 주세요.");
		
	})
	//색상 품절 상품 클릭 막기 
	$("ul.color_list>li.noti").click(function(e){
		return false;
	});

	$("ul.option_size>li>a").click(function(e){
		e.preventDefault();
		
		if($("ul.color_list li").hasClass("selected")){
			$(this).parent().parent().toggleClass("on");
		}else {
			$("ul.option_size>li>a").click(function(e){
				return false;
			});	
		}
	});	

	//옵션 선택시 
	$("ul.size_list>li.opt").click(function(e){
		e.preventDefault();
		var sel_color = $("ul.color_list li.selected").text();
		var sel_size = $(this).children().text();

		var sel_color_data = $("ul.color_list li.selected").children().attr("data-color");
		var sel_size_data =  $(this).children().attr("data-size");
		var chk_opt = sel_color_data+"_"+sel_size_data;

		//옵션 창 안에 이미 선택한 옵션이 있으면 경고창 띄우기 아니면 추가목록 요소 추가하기 
		if( $(".prd_option_list li").is("."+chk_opt) == true ){

			alert("이미 추가된 옵션입니다. 수량 조절은 아래 선택사항에서 해주십시오.");
			$("ul.option_size.main").removeClass("on");
			return false;

		}else {
		var opt = 	"<li class="+sel_color_data+"_"+sel_size_data+">"+
						"<div class='prd_chk_item'>"+
							"<span class='prd_chk_color'>"+sel_color+"</span> / "+"<span class='prd_chk_size'>"+sel_size+"</span>"+
						"</div>"+
						"<div class='cont_area'>"+
							"<button type='button' count_range='m'  class='numbtn_minus ir_pm'>수량 1감소</button>"+
							"<input type='text' name='cart_cnt' title='구매수량' value='1'>"+
							"<button type='button' count_range='p' class='numbtn_plus ir_pm'>수량 1증가</button>"+
						"</div>"+
						"<div class='opt_price'> <span class='num'>143,100</span>원</div>"+
						"<button type='button' class='opt_del ir_pm'>상품취소</button>"+
						"<a href='#' class='qucik_coupon'>쿠폰받기</a>"
					"</li>";

		$(".prd_option_list ul").append(opt);	
		}

		//가격 
		var price =  GetNumString($(".price.main .num").text());
		var total_txt = GetNumString($(".price_total.main .price").text());
		var sum = parseInt(price) + parseInt(total_txt);
		$(".price_total .price").text(addComma(sum));

		//리셋
		$("ul.option_size").removeClass("on");
		$("ul.option_color>li>a").text("[필수] 옵션을 선택해 주세요.");
		$("ul.color_list>li").removeClass("selected");
		$("ul.option_size").removeClass("focus");

	})

	//사이즈 품절 상품 클릭 막기
	$("ul.size_list>li.noti").click(function(e){ 
		return false;
	});
	

	
	//특정 영역 제외한 click 옵션창 닫기 
	$("html,body").click(function(e){
		if($("ul.option_size").hasClass("on")){
			if(!$("ul.option_size").has(e.target).length){
				//옵션창 닫기_마우스 휠 사용하기
				$("ul.option_size").removeClass("on");
			}
		}
		if($("ul.option_color").hasClass("on")){
			if(!$("ul.option_color").has(e.target).length){
				//옵션창 닫기_마우스 휠 사용하기
				$("ul.option_color").removeClass("on");
			}
		}

	});
	
	
	$("html,body").click(function(e){
						
	
	var cart_cnt_sum = 0;	

	$(".prd_option_list.main input:text[name='cart_cnt']").change( function(index) {



		$(".prd_option_list.main input:text[name='cart_cnt']").each(function(){
			//text 숫자 입력시 합계 계
			var this_val = $(this).val();
			var price =  GetNumString($(".price.main .num").text());
			var multiply = parseInt(price) * parseInt(this_val);
			$(this).parent().siblings(".opt_price").find(".num").text( addComma(multiply));
			cart_cnt_sum += parseInt($(this).val());
			console.log(cart_cnt_sum);
			var sum = parseInt(cart_cnt_sum) * parseInt(price)
	 		$(".price_total .price_num .price").text(addComma(sum));
	 		
			
	 		
			//빈 텍스트 박스에 포커스 하기 
			if(this_val == ''){
				$(this).focus();
			}
			//입력 폼에 숫자아닌 문자열이 나오면 이렇
			if(isNaN(this_val) == true ){

				alert("수량을 다시 선택해 주세요");
				$(this).val("1");
				$(this).focus();
				
			}

		});
		

		var idx = $(".prd_option_list.main input:text[name='cart_cnt']").index(this);
		var this_val = $(this).val();
		var change_price = $(this).parent().siblings(".opt_price").find(".num").text();
		
		$(".prd_option_list.quick input:text[name='cart_cnt']:eq("+idx+")").val(this_val);
		$(".prd_option_list.quick input:text[name='cart_cnt']:eq("+idx+")").parent().siblings(".opt_price").find(".num").text(addComma(change_price));


	});	
	
	//숫자 입력시 가격변동하기		
	$(".prd_option_list.quick input:text[name='cart_cnt']").change( function(index) {
			$(".prd_option_list.quick input:text[name='cart_cnt']").each(function(){
				//text 숫자 입력시 합계 계
				var this_val = $(this).val();
				var price =  GetNumString($(".price.main .num").text());
				var multiply = parseInt(price) * parseInt(this_val);
				$(this).parent().siblings(".opt_price").find(".num").text( addComma(multiply));
				cart_cnt_sum += parseInt($(this).val());
				
				var sum = parseInt(cart_cnt_sum) * parseInt(price)
		 		$(".price_total .price_num .price").text(addComma(sum));
		 		
				//빈 텍스트 박스에 포커스 하기 
				if(this_val == ''){
					$(this).focus();
				}
				//입력 폼에 숫자아닌 문자열이 나오면 경고창 띄우기 
				if(isNaN(this_val) == true ){
					alert("수량을 다시 선택해 주세요");
					$(this).val("1");
					$(this).focus();
				}
			});
			//main 창과 quick 창에 있는 가격 바뀌기 
			var idx = $(".prd_option_list.quick input:text[name='cart_cnt']").index(this);
			var this_val = $(this).val();
			var change_price = $(this).parent().siblings(".opt_price").find(".num").text();
			
			$(".prd_option_list.main input:text[name='cart_cnt']:eq("+idx+")").val(this_val);
			$(".prd_option_list.main input:text[name='cart_cnt']:eq("+idx+")").parent().siblings(".opt_price").find(".num").text(addComma(change_price));
		

		});				


	});


					
	//선택한 옵션 cancel
	$(document).on("click", ".opt_del", function(e){
		
		var opt_index = $(this).parent().index();
		
		$(".prd_option_list ul li").eq(opt_index).remove();
		$(".prd_option_list.quick ul li").eq(opt_index).remove();
		var total_txt =GetNumString($(".price_total.main .price_num .price").text());
		var change_txt = GetNumString($(this).siblings(".opt_price").find(".num").text());
		var price_txt = GetNumString($(".price.main .num").text());
		var imsub =  parseInt(total_txt) - parseInt(change_txt);
		$(".price_total .price_num .price").text(addComma(imsub));
	});

	//수량 갯수 플러스 
	$(document).on("click", ".cont_area button[type='button']", function(e){
		var type = $(this).attr("count_range");
		var opt_index = $(this).parent().parent().index();
		var count_val = $(this).siblings("input:text[name='cart_cnt']").val();
		
		if(type == "m"){
			if(count_val < 2){
				 return;
			}
			//수량 1씩 감소  
			$(".prd_option_list ul li").eq(opt_index).children(".cont_area").find("input:text[name='cart_cnt']").val(parseInt(count_val)-1);
			$(".prd_option_list.quick ul li").eq(opt_index).children(".cont_area").find("input:text[name='cart_cnt']").val(parseInt(count_val)-1);
			var price_txt = GetNumString($(".price.main .num").text());
			var change_txt = GetNumString($(this).parent().siblings(".opt_price").find(".num").text());
			var result_price = change_txt - price_txt;
			$(".prd_option_list ul li").eq(opt_index).children(".opt_price").find(".num").text(addComma(result_price));
			$(".prd_option_list.quick ul li").eq(opt_index).children(".opt_price").find(".num").text(addComma(result_price));
			var total_txt =GetNumString($(".price_total.main .price_num .price").text());
			var imsub =  parseInt(total_txt) - parseInt(price_txt);
			$(".price_total .price_num .price").text(addComma(imsub));

		}else if(type == "p"){
			//수량 1씩 증가
			$(".prd_option_list ul li").eq(opt_index).children(".cont_area").find("input:text[name='cart_cnt']").val(parseInt(count_val)+1);
			$(".prd_option_list.quick ul li").eq(opt_index).children(".cont_area").find("input:text[name='cart_cnt']").val(parseInt(count_val)+1);
			var price_txt = GetNumString($(".price.main .num").text());
			var change_txt = GetNumString($(this).parent().siblings(".opt_price").find(".num").text());
			var result_price = price_txt + change_txt;
			$(".prd_option_list ul li").eq(opt_index).children(".opt_price").find(".num").text(addComma(result_price));
			$(".prd_option_list.quick ul li").eq(opt_index).children(".opt_price").find(".num").text(addComma(result_price));
			var total_txt =GetNumString($(".price_total.main .price_num .price").text());
			var sum = parseInt(total_txt) + parseInt(price_txt) ;
			$(".price_total .price_num .price").text(addComma(sum));
		} 
		
	});



	var tab_offset= $(".tab").offset();
	var info_offset = $(".detail_layout").offset();
	var review_offset = $(".review_content ").offset();
	var qna_offset = $(".qna_content").offset();
	var rules_offset = $(".rules_content").offset();
	var recommend_offset = $(".prd_recommend").offset();
	var review_bt = review_offset.top-160 - $(window).height();
	var quick_height = $(window).height() - $(".tab").outerHeight() - $(".quick_total").outerHeight() -40;
	$(".quick_option").css("height", quick_height);
	
	
 	
	//각각의 텝 누르면  scrollTop이동 
 	$(".tab>li").click(function(e){
 		e.preventDefault(); 
		var this_idx = $(this).index();
		
		if(this_idx == 0 ){
			$("body,html").animate({
				scrollTop : info_offset.top
			}, 800);
		}else if ( this_idx == 1){
			$("body,html").animate({
				scrollTop : review_offset.top-120
			}, 800);
		}else if ( this_idx == 2){
			$("body,html").animate({
				scrollTop : qna_offset.top-60
			}, 800);
		}
		else if ( this_idx == 3){
			$("body,html").animate({
				scrollTop : rules_offset.top-60
			}, 800);
		}

	})
 	$(".prd_comment .review").click(function(e){
		e.preventDefault();
		$("body,html").animate({
			scrollTop : review_offset.top-120
		}, 800);
	})

	
	$(window).scroll(function(){
		
		 //tab 과 quick옵션 scrolltop에 알맞게 변화 
		if($(window).scrollTop() < tab_offset.top){
			$(".detail_layout").removeClass("affix_bottom");
			$(".detail_layout").removeClass("affix");
			$(".quick_tab_wrap").css("top", 61);
		}else if($(window).scrollTop() > tab_offset.top && $(window).scrollTop() < review_bt ) {
			$(".detail_layout").removeClass("affix_bottom");
			$(".detail_layout").addClass("affix");
			$(".quick_tab_wrap").css("top", 61);
		}else {
			$(".detail_layout").removeClass("affix");
			$(".detail_layout").addClass("affix_bottom");
			$(".quick_tab_wrap").css("top",  $(".prd_content").outerHeight() - $(".quick_tab_wrap").height());
		}
		
		//tab scrolltop 위치에 알맞게 ui 화면 변화 
		if($(window).scrollTop() < info_offset.top){
			$("ul.tab li").removeClass("on");
		}else if($(window).scrollTop() < review_offset.top-200) {
			$("ul.tab li").removeClass("on");
			$("ul.tab li").eq(0).addClass("on");
		}else if($(window).scrollTop() < qna_offset.top-200 ) {
			$("ul.tab li").removeClass("on");
			$("ul.tab li").eq(1).addClass("on");
		}else if ($(window).scrollTop() < rules_offset.top-200 ) {
			$("ul.tab li").removeClass("on");
			$("ul.tab li").eq(2).addClass("on");
		}else if($(window).scrollTop() < recommend_offset.top-200 ) {
			$("ul.tab li").removeClass("on");
			$("ul.tab li").eq(3).addClass("on");
		}else {
			$("ul.tab li").removeClass("on");
		}


	});

	

	$(window).resize(function(){
			//퀵 옵션 높이 
		 $(".quick_option").css("height", quick_height);
		
	});



	//추천상품 슬라이더 
	var prd_recommend_width = $(".prd_recommend_box").width();	
	var prd_recommend_list_length = $(".prd_recommend_list li").length;
	var img_count = 1;
	
	$(".prd_recommend_list").css({
		width : (100 * prd_recommend_list_length/4)+"%"
	})
	$(".prd_recommend_list li").css({
		width : 100 / prd_recommend_list_length + "%"
	})
	//이미지 슬라이더 이전버튼 
	$(".prd_recommend_btn .prev").click(function(e){
		e.preventDefault();
		if(1 < img_count){
			$(".prd_recommend_list").animate({
				"margin-left": "+="+prd_recommend_width
			});
			img_count--;
		}
	})
	//이미지 슬라이더 다음버튼 
	$(".prd_recommend_btn .next").click(function(e){
		e.preventDefault();
		
		if(prd_recommend_list_length/4 > img_count){
			$(".prd_recommend_list").animate({
				"margin-left": "-="+prd_recommend_width
			});
			img_count++;
		}
	});

	//리뷰 별점 퍼센테이 적용 
	$(".avg").each(function(idx){
		var avg_txt = $(".bar:eq("+idx+")").text();
		
		$(".avg .bar:eq("+idx+")").css({
			width : avg_txt
		});
		
	});
	//리뷰상품 이미지 크게 보기 
	$(".photoshoot img").click(function(e){
		e.preventDefault();
		var img_src = $(this).attr("src");
		
		var opt =	"<div class='review_modal'>"+
						"<a href='#' class='modal_close'></a>"+
						"<div class='photo_modal'>"+
							"<figure>"+
								"<img src='"+img_src +"' alt='구매상품리뷰 이미지'>" +
							"</figure>"
						"</div>"+
					"</div"	;

		$("#wrap").append(opt);


	})
	$(document).on("click", ".modal_close", function(e){
		e.preventDefault();
		$("#content").siblings(".review_modal").remove();
	})


	
	
	$(".prd_qna").click(function(e){
		e.preventDefault();
		if( $(this).next().hasClass("on") == true ){
			$(this).next().removeClass("on");
		}else {
			$(".prd_qna_view").removeClass("on");
			$(this).next().addClass("on");
		}
	});
	$(".download_coupon").click(function(e){
		e.preventDefault();
		alert("로그인이 필요한 서비스입니다.")
	});
	

});
