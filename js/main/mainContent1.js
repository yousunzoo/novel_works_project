// mainContent1.js
/** 기능설명
 * 스크롤 내리다가 #mainContent1에서 .main_company_con에 .active 부여
 * 한번만 실행되도록
 */
(function($){
  // 변수
  const mainContent1 = $('#mainContent1');
  const maincon = mainContent1.find('.main_company_con');
  let isVisible = false;

  //function

  function checkVisible(elm, eval){
    eval = eval || "object visible";
    let viewportHeight = $(window).height();
    let scrolltop = $(window).scrollTop(); // scroll의 위치
    let y = $(elm).offset().top; // element의 위치
    let elementHeight = $(elm).height();

    if(eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
    if(eval == "above") return ((y < (viewportHeight + scrolltop)));
  }; //checkVisible

  
  //event

  $(window).on('scroll', function(){
    if(checkVisible(mainContent1) && !isVisible){
      maincon.addClass('active');
      isVisible = true;
    }
  });



})(jQuery);