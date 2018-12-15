$(function(){

  // マウスオーバーでバーを表示
  $('.clip-box').hover(function(){
    $(this).find('.option-bar').fadeIn();
  },function(){
    $(this).find('.option-bar').fadeOut();
  });


  // $('.fa-trash-alt').click(function(){
  //   alert('このVideoをPageから外します');
  //   // $(this).parent('span').next('.clip').fadeOut();
  // });
  // ゴミ箱clickで動画削除
  $('a[data-method="delete"]').on('ajax:success', function(xhr,data,status){
    alert('このVideoをPageから外します');
    $(this).parent('span').parent('i').fadeOut();
  });

  // 空欄でpushボタンclickするとエラーメッセージ
  $('form').submit(function(){
    if($('#htmlcode').val() == '') {
      $('.error-msg').css('display', 'block');
      return false;
    }else{
      var pushed = $('#htmlcode').val();
      var url = pushed.match(/https:\/\/www.youtube.com\/watch\?v=(.+)/);
      var param = url[1]
      var vid = param.substr(0, 11);
      var htmlcode = `<iframe width='560' height='315' src='https://www.youtube.com/embed/${vid}' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`
      $('#addvideo-codepool').attr('data', htmlcode);
      $('#ajaxcomplete').text(`vid:${vid}`);
    }
  });

  // ラジオボタンで画面の大小切り替え
  $('input[name^="size"]:radio').change(function(){
    var radioval = $(this).val();
    $(this).nextAll('p').text(radioval);
    if(radioval == 'S') {
      $(this).parent('span').next('.clip').find('iframe').attr('width', '400');
      $(this).parent('span').next('.clip').find('iframe').attr('height', '225');
    }else if(radioval == 'M') {
      $(this).parent('span').next('.clip').find('iframe').attr('width', '560');
      $(this).parent('span').next('.clip').find('iframe').attr('height', '315');
    }else if(radioval == 'L') {
      $(this).parent('span').next('.clip').find('iframe').attr('width', '720');
      $(this).parent('span').next('.clip').find('iframe').attr('height', '405');
    }
  });

  // Pushボタンclickしてajax成功すると発火
  $('form[method="post"]').on('ajax:success', function(event, xhr, settings){
    // $('#ajaxcomplete').text('comp');
    // マウスオーバーでバーを表示
    $('.clip-box').hover(function(){
      $(this).find('.option-bar').fadeIn();
    },function(){
      $(this).find('.option-bar').fadeOut();
    });
    // ラジオボタンで画面の大小切り替え
    $('input[name^="size"]:radio').change(function(){
      var radioval = $(this).val();
      $(this).nextAll('p').text(radioval);
      if(radioval == 'S') {
        $(this).parent('span').next('.clip').find('iframe').attr('width', '400');
        $(this).parent('span').next('.clip').find('iframe').attr('height', '225');
      }else if(radioval == 'M') {
        $(this).parent('span').next('.clip').find('iframe').attr('width', '560');
        $(this).parent('span').next('.clip').find('iframe').attr('height', '315');
      }else if(radioval == 'L') {
        $(this).parent('span').next('.clip').find('iframe').attr('width', '720');
        $(this).parent('span').next('.clip').find('iframe').attr('height', '405');
      }
    });
    // ゴミ箱clickで動画削除
    $('a[data-method="delete"]').on('ajax:success', function(xhr,data,status){
      alert('このVideoをPageから外します');
      $(this).parent('span').parent('i').fadeOut();
    });
  });
});
