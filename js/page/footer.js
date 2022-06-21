// footer.js
// link 누를 때 해당 modal 창 띄우기
// .to_top_btn 누르면 최상단으로 스크롤 이동

(function($){
  // 변수
  const footer = $('footer');
  const topBtn = footer.find('.to_top_btn');
  const footerLinkList = footer.find('.footer_top').children('ul');
  const footerLink = footerLinkList.children('li');
  const modal = $('.modal_pop_wrapper');
  let modalInner = modal.find('.modal_pop_inner');

  const privacy = `<section class="footer_modal_con privacy">
<button type="button" class="modal_close_btn">
  <i class="fa-solid fa-xmark"></i>
</button>
<h1>개인정보처리방침</h1>
<div class="footer_inner_box">
  <p><a href="https://www.privacy.go.kr/a3sc/per/inf/perInfStep02.do">https://www.privacy.go.kr/a3sc/per/inf/perInfStep02.do</a></p>
  <p>이 주소로 들어가셔서 맟춤형 개인정보 처리방침을 만들어서 등록하세요</p>
</div>
  </section>`;
  const terms = `<section class="footer_modal_con editor">
<button type="button" class="modal_close_btn">
  <i class="fa-solid fa-xmark"></i>
</button>
<h1>이용약관</h1>
<div class="footer_inner_box">
  <p>'ooo' 은 (이하 '회사'는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.
    회사는 개인정보취급방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
    <br><br>
    회사는 개인정보취급방침을 개정하는 경우 웹사이트 공지사항(또는 개별공지)을 통하여 공지할 것입니다..
    <br><br>
    ο 본 방침은 : oooo 년 oo 월 oo 일 부터 시행됩니다..
    <br><br>
    ■ 수집하는 개인정보 항목.
    <br><br>
    회사는 회원가입, 상담, 서비스 신청 등등을 위해 아래와 같은 개인정보를 수집하고 있습니다..
    <br><br>
    ο 수집항목 : 이름 , 성별 , 휴대전화번호 , 이메일 , 회사명 , 회사전화번호 , 신용카드 정보 , 은행계좌 정보 , 서비스 이용기록 , 접속 로그 , 접속 IP 정보 , 결제기록
    <br><br>
    ο 개인정보 수집방법 : 홈페이지(회원가입) , 서면양식
    <br><br>
    ■ 개인정보의 수집 및 이용목적
    <br><br>
    회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
    <br><br>
    ο 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산 콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스
    <br><br>
    ο 회원 관리
    <br><br>
    회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 불만처리 등 민원처리 , 고지사항 전달
    <br><br>
    ο 마케팅 및 광고에 활용
    <br><br>
    신규 서비스(제품) 개발 및 특화
    <br><br>
    ■ 개인정보의 보유 및 이용기간
    <br><br>
    회사는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 지체 없이 파기합니다.
    <br><br>
    ■ 개인정보의 파기절차 및 방법
    <br><br>
    회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체없이 파기합니다.
    <br><br>
    파기절차 및 방법은 다음과 같습니다.
    <br><br>
    ο 파기절차
    <br><br>
    회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다. 
    <br><br>
    별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
    <br><br>
    ο 파기방법 - 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
    <br><br>
    - 종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
    <br><br>
    ■ 개인정보 제공 회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
    <br><br>
    다만, 아래의 경우에는 예외로 합니다. - 이용자들이 사전에 동의한 경우 - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우 ■ 수집한 개인정보의 위탁 회사는 고객님의 동의없이 고객님의 정보를 외부 업체에 위탁하지 않습니다.
    <br><br>
    향후 그러한 필요가 생길 경우, 위탁 대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한 경우 사전 동의를 받도록 하겠습니다. ■ 이용자 및 법정대리인의 권리와 그 행사방법 이용자 및 법정 대리인은 언제든지 등록되어 있는 자신 혹은 당해 만 14세 미만 아동의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자 혹은 만 14세 미만 아동의 개인정보 조회?수정을 위해서는 ‘개인정보변경’(또는 ‘회원정보수정’ 등)을 가입해지(동의철회)를 위해서는 “회원탈퇴”를 클릭하여 본인 확인 절차를 거치신 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 조치하겠습니다. 귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.
    <br><br>
    또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다. oo는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 “oo가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
    <br><br>
    ■ 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
    <br><br>
    쿠키 등 인터넷 서비스 이용 시 자동 생성되는 개인정보를 수집하는 장치를 운영하지 않습니다.
    <br><br>
    ■ 개인정보에 관한 민원서비스
    <br><br>
    회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다..
    <br><br>
    개인정보관리책임자 성명 : ooo
    <br><br>
    전화번호 : oo-oooo-oooo
    <br><br>
    이메일 : oooo@oooo
    <br><br>
    귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
    <br><br>
    회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.
    <br><br>
    기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.
    <br><br>
    1.개인정보침해신고센터 (www.1336.or.kr/국번없이 118) 2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4) 3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600) 4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
    </p>
</div>
  </section>`;
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
  let link = [privacy, terms, location];

// event

// topBtn 클릭 이벤트
topBtn.on('click', function(e){
  e.preventDefault();
  $('html, body').stop().animate({scrollTop:0}, 500);
});

// footerTop 링크 클릭 이벤트
footerLink.on('click', function(e){
  e.preventDefault();
  let i = $(this).index();
  modalInner.html(link[i]);
  modal.stop().fadeIn();
});

// modal 창 닫기 이벤트
$(document).on('click', '.modal_close_btn', function(e){
  e.preventDefault();
  modal.stop().fadeOut();

});

})(jQuery);