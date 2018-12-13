$(function(){
  $('.clip-box').hover(function(){
    $(this).find('.change-size').fadeIn();
  },function(){
    $(this).find('.change-size').fadeOut();
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

  //
  // $('form').on('ajax:success'), function(xhr,data,status){
  //   // var video = $('#addvideo').text();
  //   alert('video');
  //   //$('#addvideo2').replaceWith(video);
  // }

  // 空欄でpushボタンclickするとエラーメッセージ
  $('form').submit(function(){
    if($('#htmlcode').val() == '') {
      $('.error-msg').css('display', 'block');
      return false;
    }else{
      var code = $('#htmlcode').val();
      $('#addvideo-codepool').attr('data', code);
    }
  });

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
});
