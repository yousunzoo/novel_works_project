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
const modalInner = siteMapModal.find('.modal_pop_inner');
const modalClose = siteMapModal.find('.modal_close_btn');
let time = 300;

const location = `<section id="siteMapCon">
<button type="button" class="modal_close_btn">
  <i class="fa-solid fa-xmark"></i>
</button>
<h1>사이트맵</h1>
<article class="sitemap_wrapper">
  <ul class="clearfix">
    <li>
      <h2>company</h2>
      <div class="sitemap_2dep">
        <ul>
          <li><a href="./company_ceo.html"><span>회사정보</span></a></li>
          <li><a href="./company_certi.html"><span>특허사항</span></a></li>
        </ul>
      </div>
    </li>
    <li>
      <h2>business</h2>
      <div class="sitemap_2dep">
        <ul>
          <li><a href="./business_production.html"><span>제품개발 생산</span></a></li>
          <li><a href="./business_development.html"><span>원천기술 개발</span></a></li>
        </ul>
      </div>
    </li>
    <li>
      <h2>product</h2>
      <div class="sitemap_2dep">
        <ul>
          <li><a href="./product_all.html"><span>All</span></a></li>
          <li><a href="#"><span>UV 소독</span></a></li>
          <li><a href="#"><span>CLEAN</span></a></li>
          <li><a href="#"><span>소형가전</span></a></li>
        </ul>
      </div>
    </li>
    <li>
      <h2>technology</h2>
      <div class="sitemap_2dep">
        <ul>
          <li><a href="./tech_uv.html"><span>UV LED 살균</span></a></li>
          <li><a href="./tech_vio.html"><span>광촉매 살균</span></a></li>
        </ul>
      </div>
    </li>
    <li>
      <h2>contact us</h2>
      <div class="sitemap_2dep">
        <ul>
          <li><a href="./contact.html"><span>Contact us</span></a></li>
        </ul>
      </div>
    </li>
  </ul>
</article>
  </section>`

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
  modalInner.html(location);
  siteMapModal.stop().fadeIn(time);
});

modalClose.on('click', function(e){
  e.preventDefault();
  siteMapModal.stop().fadeOut(time);
});

})(jQuery);