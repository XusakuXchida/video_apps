$(function(){
  $('.clip-box').hover(function(){
    $(this).find('.change-size').fadeIn();
  },function(){
    $(this).find('.change-size').fadeOut();
  });

  $('.fa-trash-alt').click(function(){
    alert('このVideoをPageから外します');
  })

  $('form').submit(function(){
    if($('#htmlcode').val() == '') {
      $('.error-msg').css('display', 'block');
      return false;
    }
  });


});
