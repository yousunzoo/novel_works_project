// main_import_data.js
(function($){
  setTimeout(function(){
    // 변수
    let deviceCk = $.CheckType;
    const body = $('body');
    const header = $('header');
    const footer = $('footer');
    const baseUrl = "../page/common/";
    const importPage = ['header.html', 'footer.html'];

    // 기능 수행
    header.load(baseUrl +importPage[0], function(){
      let headScript = `<script src="../js/page/header.js" class="head_script"></script>`
      let headScriptM = `<script src="../js/page/m_header.js" class="head_script_m"></script>`

      if(deviceCk === 'smartphone' || deviceCk === 'tablet'){
        body.append(headScriptM);
        body.remove($('.head_script'));
      } else {
        body.append(headScript);
        body.remove($('.head_script_m'));
      };
    });
  
    footer.load(baseUrl + importPage[1], function(){
      let footScript = `<script src="../js/page/footer.js"></script>`;
      body.append(footScript);
    });

    let mainVisualScript = `<script src="../js/main/mainVisual.js"></script>`;
    let mainContent1Script = `<script src="../js/main/mainContent1.js"></script>`;
    let mainContent2Script = `<script src="../js/main/mainContent2.js"></script>`;
    let mainContent3Script = `<script src="../js/main/mainContent3.js"></script>`;

    body.append(mainVisualScript);
    body.append(mainContent1Script);
    body.append(mainContent2Script);
    body.append(mainContent3Script);
}, 100)
})(jQuery);
