$(document).ready(function() {


			$(".nav>ul>li").mouseover(function(){
					$(this).addClass('on').siblings().removeClass('on');
					$(this).siblings().addClass('none');
				
					 var abcd =  $(this).attr("id");
					 
					  if(abcd == "m1"){
					  			$(".logo_img").attr('src','./img/logo.png');
					  		//	abc.addClass('active').siblings().removeClass('active');
					  }
					  else if(abcd == "m2"){
					  		$(".logo_img").attr('src','./img/logo2.png');	
					  		//abc.addClass('active').siblings().removeClass('active');	
					  }
					  else if(abcd == "m3"){
					  		$(".logo_img").attr('src','./img/logo3.png');
					  		//abc.addClass('active').siblings().removeClass('active');
					  }
					  else if(abcd == "m4"){
					  		$(".logo_img").attr('src','./img/logo4.png');
					  		//abc.addClass('active').siblings().removeClass('active');
					  }




				})
				var img_name = $(".logo_img").attr("src");
				

				$(".nav>ul>li").mouseout(function(){
					  $(this).removeClass('on');
					   $(this).siblings().removeClass('none');
				
					 // var abcd =  $(this).parent().attr("id");
					// if(abcd == "m1"){
					// 	$(".logo_img").attr('src',img_name);
					// }
					// else if(abcd == "m2"){
					// 	$(".logo_img").attr('src',img_name);
					// }
					// else if(abcd == "m3"){
					// 	$(".logo_img").attr('src',img_name);
					// }
					// else if(abcd == "m4"){
					// 	$(".logo_img").attr('src',img_name);
					// }
					//console.log("b")
						$(".logo_img").attr('src','./img/logo.png');
				})
				$("#m1 .all>a").click(function(){
					$("#m1 .all").addClass("active");
				})
				$("#m2 .all>a").click(function(){
					$("#m2 .all").addClass("active");
				})
				$("#m3 .all>a").click(function(){
					$("#m3 .all").addClass("active");
				})
				$("#m4 .all>a").click(function(){
					$("#m4 .all").addClass("active");
				})
					
				$(".all_menu_tit .close").click(function(){
					$(".all").removeClass("active");
				})
				$(".nav>ul>li>a").mouseover(function(){
					$(".all").removeClass("active");
				})

				$(".nav_mid>ul>li").hover(function(){
					$(this).toggleClass("sub_on");
					//console.log("ds");
				})



				

					$(".breadcrumb>ul>li").hover(function(){
						$(this).toggleClass("on");
					})
					$(".share_sns").hover(function(){
						$(this).toggleClass("on");
					})

					$(".tip").hover(function(){
						$(this).toggleClass("left");
					})


					 $('.prd_view ul').bxSlider({
					 	
						mode: 'fade',
						touchEnabled: false,
						pagerCustom: '.prd_view_thumb ul'
						
					 });
					


					 $('.prd_like ul').bxSlider({
					 	
						
						maxSlides: 6,
						moveSlides: 6,
						slideWidth: 200,
						slideMargin: 25,
						touchEnabled: false,
						pager: false,

						
					 });

					$(".select_ty").click(function(){
						$(this).toggleClass("on");
						
					}) 	

					$(".select_ty ul li").click(function(e){





						 e.preventDefault(); 
						// console.log("dsdsd");
						
					}) 	




					$(".review_area").click(function(e){
						$(this).toggleClass("on");
						 e.preventDefault(); 
					
						
					}) 

						
					$(".prd_qna_short").click(function(e){
						$(this).parent().parent().next().toggleClass("on");

						 e.preventDefault(); 
						
						
					}) 
					 $('.brand_prd ul').bxSlider({
						maxSlides: 5,
						moveSlides: 5,
						slideWidth: 240,
						slideMargin: 25,
						touchEnabled: false,
						pager: false,
					});










			var ftTop = $("#ft").height();
			var tabTop = $(".prd_detail .tab ").offset();

			$(window).scroll(function(){

			/* tab의 스크롤 */
			if($(window).scrollTop() > tabTop.top  ) {
				$(".prd_detail .tab").addClass("stuck");
			}
			else {
				$(".prd_detail .tab").removeClass("stuck");
			}

			/* prd_fixed의 스크롤 */
			var scrollBottom = $(document).height() - $(window).height();
			if($(window).scrollTop() > scrollBottom-ftTop){
				$(".prd_fixed").addClass("act");
			}
			else{
				$(".prd_fixed").removeClass("act");
			}
			
		 	if($(window).scrollTop() < 800){
				$(".prd_fixed").css({opacity:'0', transition :'all 0.5s'});
			}
			else if ($(window).scrollTop() > 800){
				$(".prd_fixed").css({opacity:'1',  transition :'all 0.5s'});
			}
		
	


});





					$(".prd_fixed").click(function(e){
						$(this).toggleClass("on");
						// $(this).children().next().animate({"height":"285px"});
						 e.preventDefault(); 

						
					}) 


					$(".quick_side li button").click(function(){
						$(this).parent().parent().parent().addClass("active");
						 var ccc = $(this).attr('name');
						 $("."+ccc).addClass("active").siblings().removeClass('active');
						// console.log(ccc);

					})

					$(".quick_cont .close").click(function(){
						$(".quick_menu ").removeClass("active");
						
					})



					$(".to_top").click(function(){
						$("body,html").animate({
							scrollTop : 0
						}, 800);
						return false;
					})

					var scrollHeight = $(document).height();
					
					$(".to_bottom").click(function(){
						
						$("body,html").animate({
							scrollTop : scrollHeight
						}, 800);
						return false;
					})
					



					$(".search_box>ul>li").hover(function(){
						var s =	$(this).text();

						var si = $(".search_box>div>input").val(s);
					//	console.log(si);
					})


					$(".search_box>ul>li>a").click(function(e){
						 var sc = $(this).attr("href");
						
						 e.preventDefault(); 

						 alert(sc);


						// console.log(sc);
					})
					
						
						// function searchListIdx (thsidx){
						// 	$(".search_box ul li").mouseover(function(){
						// 	var thsidx = $(this).index();
						// 	//console.log(thsidx);
						// })
						// }
					
					//console.log(searchListIdx(thsidx));
						
					$(".search_box .search_icon").hover(function(e){

						 //var vv = $(".search_list li a").index().addClass("loe");
						  var vv = $(".search_list li").index();

						//console.log(vv)
						 //var sv = $(this).attr(sc1);
						 e.preventDefault(); 

						//alert(vv);
					})
			

					$(".search .btn").click(function(){
						$(".search").toggleClass("search_on");

					})

					


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



					$(".opt").click(function(e){
						 e.preventDefault();
						 // 누를때 price_option tr 생성 
						 var index = $(".opt").index(this);
						 var prdName = $(this).text();
						 var prdPrice = $(this).attr("price");
						 var prdColor = $(this).attr("title");
						console.log()
						 var opt = "<tr class="+ prdColor +">"+
									 "<th>색상 - " + "<span class='prdName'> "+ prdName +"</span>"+"</th>"+
									"<td>"+
										"<div class='plusminus_wrap'>"+
											"<input type='number' name class='text' title='수량설정' value='1'>"+
											"<button type='button' count_range='m' class='numbtn_minus'></button>"+
											"<button type='button' count_range='p' class='numbtn_plus'></button>"+
										"</div>"+
									"</td>"+
									"<td class='price'>"+ addComma(prdPrice) +"</td>"+
									"<td>"+
										"<button type='button' class='del optdel'  name='btnOptdelete' title='delet'></button>"+
									
									"</td>"+

								"</tr>";
						
						$(".price_option").show();
						$(".main_option tbody").append(opt);
						
						//리스트 존재 체크확인
						
						var i = 1;
						var prdList = $(".main_option tr").length;
						var prdTxt = $(".main_option tr").last().children().children(".prdName").text();

						 

						var green = $(".main_option tr.green").length;
						var pink = $(".main_option tr.pink").length;
						var white = $(".main_option tr.white").length;
						if( green > 1 ) {
								$(".main_option tbody tr").last().remove();
								var greenVal = $(".main_option tr.green").children("td").eq(0).children(".plusminus_wrap").children(".text").val();
								$(".main_option tr.green").children("td").eq(0).children(".plusminus_wrap").children(".text").val(  parseInt(greenVal)  + i);
								//console.log(greenVal);
							
						}else if(pink > 1 ) {
							$(".main_option tbody tr").last().remove();
								var pinkVal = $(".main_option tr.pink").children("td").eq(0).children(".plusminus_wrap").children(".text").val();
								$(".main_option tr.pink").children("td").eq(0).children(".plusminus_wrap").children(".text").val(  parseInt(pinkVal)  + i);
								//console.log(pinkVal);
						}else if(white > 1 ) {
							$(".main_option tbody tr").last().remove();
								var whiteVal = $(".main_option tr.white").children("td").eq(0).children(".plusminus_wrap").children(".text").val();
								$(".main_option tr.white").children("td").eq(0).children(".plusminus_wrap").children(".text").val(  parseInt(whiteVal)  + i);
								//console.log(whiteVal);
						}

						



						//가격 계산 더하기
						var totalTxt = GetNumString($(".price_total .main_total").text());
						var sum = parseInt(prdPrice) + parseInt(totalTxt);

						$(".price_total .main_total").text(addComma(sum));

						
						
					}) 	


					$(document).on("click", ".optdel", function(e){
						e.preventDefault();
						 
						 //삭제
						 var index = $(".optdel").index(this);
						 $(".price_option tr").eq(index).remove();
						 //가격 계산 빼기 
						 var totalTxt = GetNumString($(".price_total .main_total").text());
						 var prdPrice =GetNumString($(this).parent().siblings(".price").text());
						 var prdamount = $(this).parent().siblings("td").children(".plusminus_wrap").children(".text").val();
						 var m = prdamount * prdPrice
						 var minus = parseInt(totalTxt) - parseInt(m);
						console.log(prdamount);
						 $(".price_total .main_total").text(addComma(minus));
						 //빈값일경우 hide 처리
						 var tr =  $(".main_option tr").length;
						 //console.log(tr);
						 if(tr < 1 ){
						 	$(".price_option").hide();
						 	$(".price_total .main_total").text("0");
						 }
						
						
						
					}) 	
					$(document).on("click", ".plusminus_wrap button[type='button']", function(e){
							var index = $(".plusminus_wrap button[type='button']").index(this);
							var type = $(this).attr('count_range');
						
					        var count = $(this).siblings(".text");
					        var count_val = count.val(); // min 1
					        if(type=='m'){
					            if(count_val< 2 ){
					            	
					                return;

					            }
					            count.val(parseInt(count_val)-1);
					            var totalTxt = GetNumString($(".price_total .main_total").text());
					            var priceTxt = GetNumString($(this).parent().parent().siblings(".price").text());
					            console.log(priceTxt);
					            var total = totalTxt - parseInt(priceTxt);
					            $(".price_total .main_total").text(addComma(total));
					        }else if(type=='p'){
					            count.val(parseInt(count_val)+1);
					            var count_total = parseInt(count_val)+1;
					            
					            var totalTxt = GetNumString($(".price_total .main_total").text());
					            var priceTxt = GetNumString($(this).parent().parent().siblings(".price").text());
								 //console.log(priceTxt);
					            var multiply = totalTxt + parseInt(priceTxt);
					           
					            
					            $(".price_total .main_total").text(addComma(multiply));
					        }

					        

						}) 	




});