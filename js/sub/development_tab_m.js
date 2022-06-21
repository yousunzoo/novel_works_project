// development_tab_m.js
/** 기능 설명
 * 스크롤 내리면 탭박스 고정(class "fixed" 부여)
 * 탭 클릭할 때 탭박스 펼쳐짐 (slideDown)
 * 탭의 해당 a 클릭하면 $(this.hash).offset().top 기능 이용해 해당 DevelopCon으로 스크롤 이동
 */

 (function($){
  const tabmenu = $('.tabmenu');
  const mobileTab = tabmenu.find('.develop_tab_m');
  const openBtn = mobileTab.find('.m_open_btn');
  const tabList = mobileTab.find('.tab_list_wrapper');
  let mobileTabheight = mobileTab.offset().top;
  let permission = true;

  //event
  // 탭박스 고정 이벤트
  $(window).on('scroll', function(){
    let windowTop = $(window).scrollTop();
  
    if (windowTop >= mobileTabheight){
      mobileTab.addClass('fixed');
    } else {
      mobileTab.removeClass('fixed');
    }
  });

  //탭 아코디언 이벤트
  openBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
    tabList.stop().slideDown(500);
      permission = false;
    } else {
      tabList.stop().slideUp(500);
      permission = true;
    }
    return;
  })
  
  })(jQuery);