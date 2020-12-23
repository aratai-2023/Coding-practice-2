$(document).ready(function(){
  // bx slider
  $('.slider').bxSlider({
    mode: 'fade',
    // auto: true,
    speed: 200
    // pause: 3500,
    // autoHover: true
  });

  // 斜め背景に動きをつける
  $('.topics').on({
    'mouseover': function() {
      $('.topics').addClass('tpc-active');
    },
    'mouseout': function() {
      $('.topics').removeClass('tpc-active');
    }
  });
  
  $('.recruit').on({
    'mouseover': function() {
      $('.recruit').addClass('rct-active');
    },
    'mouseout': function() {
      $('.recruit').removeClass('rct-active');
    }
  });
});