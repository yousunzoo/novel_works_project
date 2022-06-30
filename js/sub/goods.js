// goods.js
/** 기능 구현
 * go prev btn 누르면 이전 페이지로 이동
 * 갤러리 슬라이드 구현
 * next, prev 버튼 누름에 따라 슬라이드 이동
 * slide thumb 누르면 해당 슬라이드로 이동
 */

(function($){
let goPrevBtn = $('.go_prev_btn');

goPrevBtn.on('click', function(e){
  e.preventDefault();
  history.back();
})







})(jQuery);
