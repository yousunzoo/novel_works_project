// header.js
/** 기능 구현
 * laptop, pc에서는 gnb menu에 마우스 올릴 시 & focus 이동시 gnb 2dep 전체 보이도록
 * site map 버튼 눌렀을 때 gnb modal 창 띄우기
 */
(function($){
// 변수
const wrap = $('#wrap');
const header = wrap.find('header');
const gnb = header.find('#gnb');
const gnbBg = gnb.find('#gnbBg');
const gnbLi = gnb.find('li');
const gnb2dep = gnbLi.find('.gnb_2dep');
const gnbOverlay = header.find('.gnb_overlay_bg');
const siteMap = header.find('.site_map');
const siteMapModal = wrap.find('.modal_pop_wrapper');
const modalClose = siteMapModal.find('.modal_close_btn');
let time = 300;

//함수
const showGnb = function(e){
  e.preventDefault();
  gnb2dep.stop().slideDown(time);
  gnbBg.stop().slideDown(time);
  gnb.stop().animate({'background-color':'#fff'}, time);
  gnbOverlay.stop().fadeIn(time);
}; //showGnb

const hideGnb = function(e){
  e.preventDefault();
  gnb2dep.stop().slideUp(time);
  gnbBg.stop().slideUp(time);
  gnb.stop().animate({'background-color':"transparent"}, time);
  gnbOverlay.stop().fadeOut(time);
}; //hideGnb

// event
// mouseenter + focus
gnbLi.on('mouseenter', showGnb);
gnbLi.children('a').on('focus', showGnb);

// mouseout + blur
gnbLi.on('mouseout',hideGnb);
gnbLi.children('a').on('blur', hideGnb);

//sitemap
siteMap.on('click', function(e){
  e.preventDefault();
  siteMapModal.stop().fadeIn(time);
});

modalClose.on('click', function(e){
  e.preventDefault();
  siteMapModal.stop().fadeOut(time);
});

})(jQuery);