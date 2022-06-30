// goods.js
/** 기능 구현
 * go prev btn 누르면 이전 페이지로 이동
 * 갤러리 슬라이드 구현
 * next, prev 버튼 누름에 따라 슬라이드 이동
 * slide thumb 누르면 해당 슬라이드로 이동
 */

(function($){
  // 1. go prev btn 활성화
  let goPrevBtn = $('.go_prev_btn');

goPrevBtn.on('click', function(e){
  e.preventDefault();
  history.back();
});

// 2. 갤러리 슬라이드 구현
// 변수
let productSlide = $('.product_slide');
let slideLarge = productSlide.find('.product_slide_large');
let slideLargeUl = slideLarge.find('.slide_large');
let slideLargeLi = slideLargeUl.children('li');
let prevBtn = slideLarge.find('.prev');
let nextBtn = slideLarge.find('.next');

let originDivLen = slideLargeLi.length;
let permission = true;
let i=0;
let timed = 1000;

// 함수


let goPrevFn = function(){
  if(permission){
    permission = false;
    i -= 1;
    slideLargeUl.stop().animate({marginLeft : -100 * i +'%'}, function(){
      if(i<0) {
        i = originDivLen - 1;
        slideLargeUl.css({marginLeft : -100 * i +'%'});
      };
      permission = true;
    })
  }; //if(permission)
} // goPrevFn()


let goNextFn = function(){
  if(permission){
    permission = false;
    i += 1;

    if (i >= originDivLen){
      slideLargeUl.css({marginLeft : 100+'%'});
      i=0;
    }
    slideLargeUl.stop().animate({marginLeft : -100 * i +'%'}, function(){
      permission=true;
    }); 
  };// if(permission)
}; // goNextFn()



// 기능 수행
let cloneLi = slideLargeLi.eq(-1).clone();
slideLargeUl.prepend(cloneLi);

let newslideLargeLi = slideLargeUl.children('li');
let newLiLen = newslideLargeLi.length;

slideLargeUl.css({width:(100 * newLiLen)+'%', left:-100+'%'});
newslideLargeLi.css({width:(100/newLiLen)+'%'});

prevBtn.on('click', function(){
  goPrevFn();
});

nextBtn.on('click', function(){
  goNextFn();
});

// 3. thumb 클릭시 large slide 구현
// 변수
let productSlideThumb = $('.product_slide_thumb');
let slideThumb = productSlideThumb.find('.slide_thumb');
let slideThumbLi = slideThumb.children('li');

// 이벤트
slideThumbLi.on('click', function(){
  let y = $(this).index();
  slideLargeUl.stop().animate({marginLeft : -100 * y +'%'});
  i = y;
});


})(jQuery);
