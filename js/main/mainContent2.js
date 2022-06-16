// mainContent2.js

/** 기능설명
 * 스크롤 내리다가 #mainContent2에서 .main_process_con에 .active 부여
 * 한번만 실행되도록
 * setInterval 기능 이용하여 process_li 차례대로 active 기능 부여
 */

 (function($){
  // 변수
  const mainContent2 = $('#mainContent2');
  const processCon = mainContent2.find('.main_process_con');
  const processList = processCon.find('.process_list').find('ul');
  let processLi = processList.children('li');
  let liLen = processLi.length;
  let isVisible = false;
  let i=0;

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


  // function
  var play = function(){
    setInterval(function(){
      processLi.eq(i).addClass('active');
      processLi.eq(i).siblings().removeClass('active');
      if(i<7){i++}else{i=0};
    }, 1500)
  };

  //event

  $(window).on('scroll', function(){
    if(checkVisible(mainContent2) && !isVisible){
      processCon.addClass('active');
      isVisible = true;
      setTimeout(play, 1000);
    }
  });



})(jQuery);