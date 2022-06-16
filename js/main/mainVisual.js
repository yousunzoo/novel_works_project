// mainVisual.js
/**기능설명
 * next, prev indicator 이용하여 슬라이드 구현 (fadein, out)
 * 드래그 기능 이용하여 슬라이드 구현
 * mobile에서 터치했을 때 이벤트(touchstart, touchend)
 */

(function($){
  const mainVisual = $('#mainVisual');
  const btns = mainVisual.find('.visual_slider_btn');
  const next = btns.find('.next');
  const prev = btns.find('.prev');
  const visualSlider = mainVisual.find('.visual_slider');
  const visualSliderUl = visualSlider.find('ul');
  let slide = visualSlider.find('.visual_slide_li');
  let startX, endX;

  slide.eq(0).addClass('active');

  //function
  const slideNextFn = function(){
    let slideActive = visualSlider.find('.active');
    slideActive.removeClass('active');
    slideActive.next().addClass('active');
    slideActive.appendTo(visualSliderUl);
    return
  }; //slideNextFn

  const slidePrevFn = function(){
    let slideActive = visualSlider.find('.active');
    slideActive.appendTo(visualSliderUl);
    slideActive.removeClass('active');
    slideActive.prev().addClass('active');
  }; //slidePrevFn
  
  //event
  // button 입력
  next.on('click', function(e){
    e.preventDefault();
    slideNextFn()
  });
  prev.on('click',function(e){
    e.preventDefault();
    slidePrevFn();
  });

  //drag했을 떄의 이벤트(mousedown, mouseup)
  visualSlider.on('mousedown', function(e){
    startX = e.clientX;
  }); //mousedown

  visualSlider.on('mouseup', function(e){
    endX = e.clientX;
    let resultX = startX - endX;

    if(resultX > 100){
      slideNextFn()
    } else if (resultX < -100){
      slidePrevFn()
    };
  }); //mouseup

  //mobile에서 터치했을 때 이벤트(touchstart, touchend)
  visualSlider.on('touchstart', function(e){
    startX = parseInt(e.originalEvent.touches[0].clientX);
    // console.log(startX);
  }); //touchstart

  visualSlider.on('touchend', function(e){
    endX = parseInt(e.originalEvent.changedTouches[0].clientX);
    let resultX = startX - endX;
    // console.log(resultX);

    if(resultX > 100){
      slideNextFn()
    } else if (resultX < -100){
      slidePrevFn()
    };
  }); //touchend


})(jQuery);