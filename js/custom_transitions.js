$( document ).ready(function() {
  $("body").css("display", "none");
  $("body").fadeIn(1000);

  var win_h = $(window).height();
  console.log('win_h', win_h);

  function down() {
    var scr_t = $(window).scrollTop();
    $('.transition').each(function() {
        var top = $(this).position().top;
        if ( $(this).hasClass('move-right') || $(this).hasClass('move-left') || $(this).hasClass('fade-in')) {
          if (top - scr_t < win_h - 0.3*win_h) {
            $(this).removeClass('move-right');
            $(this).removeClass('move-left');
            $(this).removeClass('fade-in');
          }
        }
      });
  }
  $(window).scroll( function() {
    down();
  });
  down();

});