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

  $('a[data-method="delete"]').on('ajax:success', function(xhr,data,status){
    alert('このVideoをPageから外します');
    $(this).parent('span').parent('i').fadeOut();
    $('#test').text('delete!!');
  });

  $('form').submit(function(){
    if($('#htmlcode').val() == '') {
      $('.error-msg').css('display', 'block');
      return false;
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
