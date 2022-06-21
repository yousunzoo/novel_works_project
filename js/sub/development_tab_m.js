// development_tab_m.js
/** 기능 설명
 * 스크롤 내리면 탭박스 고정(class "fixed" 부여)
 * 탭 클릭할 때 탭박스 펼쳐짐 (slideDown)
 * 탭의 해당 a 클릭하면 $(this.hash).offset().top 기능 이용해 해당 DevelopCon으로 스크롤 이동
 * 스크롤 위치에 따라 openBtn 내용 바꾸기
 */

 (function($){
  const tabmenu = $('.tabmenu');
  const mobileTab = tabmenu.find('.develop_tab_m');
  const openBtn = mobileTab.find('.m_open_btn');
  const tabList = mobileTab.find('.tab_list_wrapper');
  let tabLi = tabList.children('li').children('a');
  let mobileTabheight = mobileTab.offset().top;

  const devCon = $('.develop_content');
  let devConLi = devCon.find('li');

  let permission = true;
  let i=0;

  //function
  function addClassFn(){
    let windowTop = $(window).scrollTop();
  
    if (windowTop >= mobileTabheight){
      mobileTab.addClass('fixed');
    } else {
      mobileTab.removeClass('fixed');
    };
  };

  function changeTextFn(){
      let scroll = $(window).scrollTop();
      $.each(devConLi, function(idx, item){
        let $target = devConLi.eq(idx),
        i = $target.index();
        targetTop = $target.offset().top;

        if (targetTop <= scroll){
          let changeText = tabLi.eq(i).text();
          openBtn.find('span').text(changeText);
        }
      })
  };


  //event
  // 탭박스 고정 이벤트
  $(window).on('scroll', function(){
    addClassFn();
    changeTextFn();
  });

  //탭 아코디언 이벤트
  openBtn.on('click', function(e){
    e.preventDefault();
    if(permission){
    tabList.stop().slideDown(300);
      permission = false;
    } else {
      tabList.stop().slideUp(300);
      permission = true;
    }
    return;
  });

  // 탭 클릭 이벤트
  tabLi.on('click', function(e){
    e.preventDefault();
    let moveScroll = $(this.hash).offset().top;
    let openBtnText = $(this).find('span').text();
    openBtn.find('span').text(openBtnText);
    $('html, body').animate({scrollTop:moveScroll - 50}, 300);
    tabList.stop().slideUp(300);
    permission = true;
  })
  
  })(jQuery);