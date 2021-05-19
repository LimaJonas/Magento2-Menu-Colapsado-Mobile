require(['jquery', 'jquery/ui'], function($){
  $(document).ready(function() {
  if(window.innerWidth <= 767){
    $('li.level0 li.parent > a').append('<span class="rm-expand"><i class="fas fa-sort-down"></i></span>');
    $('.rm-expand').click(function() {
      if ($(this).hasClass('open')) {
        $(this).parent().parent().find('ul:first').slideUp();
        $(this).removeClass('open');
        $(this).html('<i class="fas fa-sort-down"></i>');
      } else {
        $(this).parent().parent().find('ul:first').slideDown();
        $(this).addClass('open');
        $(this).html('<i class="fas fa-sort-up"></i>');
      }
      return false;
    });
  } else{
    $('li.level0 li.parent > a').append('<span class="rm-expand"><i class="fas fa-caret-right"></i></span>');
  }
  });
});