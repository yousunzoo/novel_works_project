// certi_modal.js
/** 기능설명
 * 특허 li 누르면 #modal 창 fadein()하면서 해당 li 내용 띄우도록
 * modal_close_btn 누르면 #modal 창 fadeout()
 */

(function($){
  // 변수
  const modal = $('#modal');
  const modalCloseBtn = modal.find('.modal_close_btn');
  let modalImg = modal.find('img');
  let modalTitle = modal.find('.modal_title');

  const popupGallery = $('.popup_gallery');
  let galleryLi = popupGallery.find('li').find('a');

  // 이벤트
  galleryLi.on('click', function(e){
    e.preventDefault();
    let galleryImg = $(this).find('.property_gallery_img').find('img').attr('src');
    let galleryTit = $(this).find('.property_gallery_tit').text();
    modalImg.attr('src', galleryImg);
    modalTitle.text(galleryTit);
    modal.stop().fadeIn();
  });

  modalCloseBtn.on('click', function(e){
    e.preventDefault();
    modal.stop().fadeOut();
  })

})(jQuery);