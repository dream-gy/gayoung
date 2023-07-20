$(document).ready(function(){

  $(window).scroll(function(){
    
      if($(window).scrollTop() > 1 ){
        $("header").addClass("on");
      }else {
        $("header").removeClass("on");
      }
     
  });

  function gallery(){
      
  }
  
    
     
  //비디오 화면 크기 
  function rescaleVideo (){
    var videoWidth = $("#player").width();
    var videoHeight = videoWidth/16*9;

    $("#player").height(videoHeight);
    $(".video_wrap").height(videoHeight+25);
    
  }
   //메인화면 모바일버전
   function rescalMain (){
   
    if($(window).width() < 750){
        $(".main_tit").attr("src","./img/m_title.png");
    }else{
        $(".main_tit").attr("src","./img/title.png");
    }

  }
  function galleryHeight () {
    var gallery = $("#gallery .image").width();
    var galleryHeight = gallery/3*2;
    $("#gallery .image").height(galleryHeight);
    
    
  }



  rescaleVideo();
  rescalMain();  
  galleryHeight(); 
      
      
  $(window).resize(function(){
    //비디오 화면 크기 
    rescaleVideo();
    rescalMain();
    galleryHeight(); 
     
    
    // var bb = $("#gallery ul li").width();
    // //var aa = $("#gallery ul").css("margin-left",-bb)
    // console.log()

     
      console.log( );
     
      

  });
      var gallery_lenght = $(".gallery_wrap ul li").length;
      var gallery_width = $(".gallery_wrap").width();  
      var img_count = 1;

      $(".gallery_wrap ul").css({ width : 100 * gallery_lenght+"%"});
      $(".gallery_wrap ul li").css({ width : 100/gallery_lenght+"%"});
    $(".fa-chevron-right").click(function(e){
        if(gallery_lenght > img_count){
          $(".gallery_wrap ul").animate({
            "margin-left": "-="+gallery_width
          });
          img_count++;
        }
      });
       $(".fa-chevron-left").click(function(e){
        if(1 < img_count){
          $(".gallery_wrap ul").animate({
            "margin-left":  "+="+gallery_width
          });
         img_count--;
        }
      });



});




 /**
 * Youtube API 로드
 */
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 /**
 * onYouTubeIframeAPIReady 함수는 필수로 구현해야 한다.
 * 플레이어 API에 대한 JavaScript 다운로드 완료 시 API가 이 함수 호출한다.
 * 페이지 로드 시 표시할 플레이어 개체를 만들어야 한다.
 */
// 영상의 정보를 담을 player 전역 변수 선언
var player = "";




// 영상의 세부정보를 playser 변수에 담는다.
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
         
         videoId : '_zvISogwvx8'
        , playerVars: {
            'autoplay': 0                     // 자동재생  0: 안함    
            , 'controls': 1                     // 동영상 플레이어 컨트롤 표기 0: 안함
            , 'disablekb' : 0                 // 키보드 컨트롤 사용 중지  1: 비허용
         	, 'rel' : 0 
         	, 'showinfo' : 0                  // 정보표시 0:안함 

        }
        , events: {
            'onReady' : playVideo,      // 플레이어 로드가 완료되고 API 호출을 받을 준비가 될 때마다 실행
            
        }
    });
}
// 재생
function playVideo() {
    player.playVideo();
}