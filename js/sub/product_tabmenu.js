// product_tabmenu.js
/** 기능구현
 * sideMenu snb 각 탭 클릭시 해당 li에 on 클래스 부여
 * 해당하는 종류의 상품만 뜨도록
 * json data 이용
 */

(function($){
// 1. json data 불러오기
$.ajax({
  url : "../data/novel_works_goods.json",
  content : document.body
}).done(function(data){
  let goodsData = data;
  
  let i=0;
  let len = goodsData.length;
  let tabTitle = [];
  for (; i < len; i++){
    tabTitle.push(goodsData[i].type);
  };

  // 2. tab_list title 설정
  // 중복되는 배열의 값 정리
  let tabTitleCk = tabTitle.filter(function(data, index){
    return tabTitle.indexOf(data) === index;
  });

  // console.log(tabTitleCk)

  // tab menu 내용 구성에 맞는 목록 체크
  let tabMenuSet;
  let tabMenuFn = function(n){
    tabMenuSet = goodsData.filter(function(data){
      return data.type === tabTitleCk[n];
    });
  };

  // ------------------------------------------------------
  // 3. 불러온 json data 기반으로 구성 배치
  // 변수
  let snb = $('#sideMenu').find('.snb');
  let productList = $('#productList').find('.product_list');

  // 4. 내용을 구성하기 위한 세팅 및 함수 처리

  let productmenuSetFn = function(k){
    tabMenuFn(k);
    productList.empty();
    let productListSet = '<li><a href="#"><dl><dt class="product_list_img"><span><img></span></dt><dd class="product_list_tit"><p></p></dd></dl></a></li>'

  let j = 0;
  let tabSetLen = tabMenuSet.length;
  let liIndex, tSet, hrefText, imgUrl;

  for (; j <tabSetLen; j++){
    productList.append(productListSet);
    liIndex = productList.children('li').eq(j);
    tSet = tabMenuSet[j];
    imgUrl = '../images/product/' + tSet.image;
    imgAlt = tSet.alt;
    hrefText = './' + tSet.link;

    liIndex.addClass(tSet.id);
    liIndex.children('a').attr("href", hrefText);
    liIndex.find('img').attr("src", imgUrl);
    liIndex.find('img').attr("alt", imgAlt);
    liIndex.find('.product_list_tit').find('p').text(tSet.name);
  };
}; //productmenuSetFn
  

// 현재 페이지의 number에 맞게 tabmenu 셋팅
let currentFileName = document.URL.substring(document.URL.lastIndexOf("/")+14, document.URL.lastIndexOf("/") + 15);
let currentNum = parseInt(currentFileName);
// console.log(currentNum)
productmenuSetFn(currentNum - 1);

}); // $.ajax
})(jQuery);