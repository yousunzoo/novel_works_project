// m_header.js
/** 기능구현
 * sitemap 버튼 클릭하면 gnb 메뉴 옆으로 슬라이드, sitemap 모양 바뀌도록
 * gnbLi click 하면 gnb2dep 나타나도록
 * 스크롤 내릴 때 헤더 상단 고정 (class 'fixed' 부여)
 */

(function($){
  const wrap = $('#wrap');
  const header = wrap.find('header');
  const headerHeight = header.height();
  // console.log(headerHeight);
  const gnb = header.find('#gnb');
  const gnbBg = gnb.find('#gnbBg');
  const gnbLi = gnb.find('li');
  const gnbOverlay = header.find('.gnb_overlay_bg');
  const siteMap = header.find('.site_map');
  const siteMapModal = wrap.find('.modal_pop_wrapper');
  const modalClose = siteMapModal.find('.modal_close_btn');
  let time = 300;

  //function
  const siteMapFn = function(e){
    // sitemap icon 바꾸기
    gnb.toggleClass('show');
    $(this).removeClass('active');
    $(this).siblings().addClass('active');
    let gnb2dep = gnbLi.find('.gnb_2dep');
    gnb2dep.slideUp(time);
  }; //siteMapFn

  const gnb2depOpen = function(e){
    e.preventDefault();
    e.stopPropagation();
    // gnb2dep slideDown
    let gnb2dep = $(this).parent().find('.gnb_2dep');
    let moreIcon = $(this).find('.mobile_more_icon');
    let gnb2depOthers = $(this).parent().siblings().find('.gnb_2dep');
    let moreIconOthers = $(this).parent().siblings().find('.mobile_more_icon');

    if (gnb2dep.is(":visible")){
      gnb2dep.stop().slideUp(time);
      moreIcon.html('<i class="fa-solid fa-plus"></i>');
      moreIcon.removeClass('active');
    }else{
      gnb2dep.stop().slideDown(time);
      gnb2depOthers.stop().slideUp(time);
      moreIcon.html('<i class="fa-solid fa-minus"></i>');
      moreIcon.addClass('active');
      moreIconOthers.html('<i class="fa-solid fa-plus"></i>');
      moreIconOthers.removeClass('active');
    }
    $(this).unbind('click').click()
  };

  // event
  siteMap.children('i').on('click',siteMapFn);
  gnbLi.children('a').on('click', gnb2depOpen);

  $(window).on('scroll', function(){
    let windowTop = $(window).scrollTop();
    // scroll 이동시 header 상단 고정
    if(windowTop > 0){
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  })

})(jQuery);