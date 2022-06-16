// mainVisual.js
/**기능설명
 * next, prev indicator 이용하여 슬라이드 구현 (fadein, out)
 * 드래그 기능 이용하여 슬라이드 구현
 */

(function($){
  const mainVisual = $('#mainVisual');
  const btns = mainVisual.find('.visual_slider_btn');
  const next = btns.find('.next');
  const prev = btns.find('.prev');
  const visualSlider = mainVisual.find('.visual_slider');
  const visualSliderUl = visualSlider.find('ul');
  let slide = visualSlider.find('.visual_slide_li');

  slide.eq(0).addClass('active');

  next.on('click', function(e){
    e.preventDefault();
    let slideActive = visualSlider.find('.active');
    slideActive.removeClass('active');
    slideActive.next().addClass('active');
    slideActive.appendTo(visualSliderUl);
    return
  });

  prev.on('click', function(e){
    e.preventDefault();
    let slideActive = visualSlider.find('.active');
    slideActive.appendTo(visualSliderUl);
    slideActive.removeClass('active');
    slideActive.prev().addClass('active');

  })
})(jQuery);