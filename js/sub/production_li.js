// production_li.js
/**기능설명
 * 일정 시간마다 production list 돌아가면서 active 활성화
 */
(function($){
  // 변수
  const production02 = $('.productionCon_02');
  const productionUl = production02.find('.production_down_list');
  let productionLi = productionUl.children('li');
  let i=0;

  var play = function(){
    setInterval(function(){
      productionLi.eq(i).addClass('active');
      productionLi.eq(i).siblings().removeClass('active');
      if(i<7){i++}else{i=0};
    }, 1500)
  };

  setTimeout(play, 1500);
})(jQuery);