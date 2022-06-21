// development_tab.js
/** 기능 설명
 * 스크롤 내리면 탭박스 고정(class "fixed" 부여)
 * 탭의 a 태그 눌렀을 때 $(this.hash)로 a태그에 있는 해쉬값으로 스크롤링 되면서 이동
 */

(function($){
const tabmenu = $('.tabmenu');
const pcTab = tabmenu.find('.develop_tab');
let pcTabLi = pcTab.children('ul').children('li');
let pcTabHeight = pcTab.offset().top;

//event
$(window).on('scroll', function(){
  let windowTop = $(window).scrollTop();

  if (windowTop >= pcTabHeight){
    pcTab.addClass('fixed');
  } else {
    pcTab.removeClass('fixed');
  };
});

pcTabLi.children('a').on('click', function(e){
  e.preventDefault();
  let moveScroll = $(this.hash).offset().top;
  $('html, body').animate({scrollTop:moveScroll}, 500);
})

})(jQuery);