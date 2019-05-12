$('.next').click(function(){
  var current_img = $('.visible');
  var next_img = current_img.next('img');

  current_img.removeClass('visible');
  next_img.addClass('visible');
});

$('.prev').click(function(){
  var current_img = $('.visible');
  var prev_img = current_img.prev('img');

  current_img.removeClass('visible');
  prev_img.addClass('visible');
});
