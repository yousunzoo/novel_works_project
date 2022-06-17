// mainContent3.js
/** 기능설명
 * next, prev 버튼 누를 시 슬라이드 이동 (margin-left 값 이용)
 * 슬라이드 이동할 때마다 첫 번째 슬라이드 ul의 마지막으로 이동
 * 슬라이드 이동과 동시에 txt 영역 fade-in, fade-out 처리 및 첫 번째 영역 마지막으로 이동
 * setInterval 기능으로 일정 시간마다 자동 슬라이드 처리
 * mouse, touch 이벤트 발생할 시 처리
 */


(function($){
  // 변수
  const mainContent3 = $('#mainContent3');
  const next = $('.main_develop_wrapper').find('.next');
  const prev = $('.main_develop_wrapper').find('.prev');
  const slideTrack = mainContent3.find('.develop_slide_track');
  const devSlider = slideTrack.find('.develop_slider');
  let devSlideLi = devSlider.find('.develop_slide');
  const txtSlider = slideTrack.find('.main_develop_txt');
  const txtSlideLi = txtSlider.find('li');

  // function
  function NextFn(){
    devSlider.stop().animate({'marginLeft':-100+'%'}, "slow", 'easeInOutQuad', function(){
    devSlideLi.eq(0).appendTo(devSlider);
    devSlider.css({'marginLeft':0});
    devSlideLi = devSlider.find('.develop_slide');
  });
  } // NextFn();

  function PrevFn(){
    devSlider.stop().animate({'marginLeft':100+'%'}, "slow", 'easeInOutQuad', function(){
      devSlideLi.eq(-1).prependTo(devSlider);
      devSlider.css({'marginLeft':0});
      devSlideLi = devSlider.find('.develop_slide');
      });
  }; //PrevFn()

  // event
  // next 버튼 눌렀을 때 기능
  next.on('click', function(e){
    e.preventDefault();
    NextFn();
  });

  // prev 버튼 눌렀을 때 기능
  prev.on('click', function(e){
    e.preventDefault();
    PrevFn();
  });


})(jQuery);