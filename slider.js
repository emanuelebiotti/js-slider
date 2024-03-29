$('.next').click(function(){
  //prendo l'immagine corrente
  var current_img = $('.visible');
  //al click rimuovo la classe visible a tutte le img
  $('.slider img').removeClass('visible');
  //definisco qual è l'immagine successiva
  var next_img = current_img.next('img');

//se un'immagine successiva esiste:
  if(next_img.length != 0) {
    // aggiungo la classe visible all'img successiva
    next_img.addClass('visible');
    //se invece non c'è alcuna immagine successiva
  } else {
    //riparto dalla prima img e la setto come visibile
    $('.slider img').first().addClass('visible');
  }
});

$('.prev').click(function(){
  //prendo l'immagine corrente
  var current_img = $('.visible');
  //al click rimuovo la classe visible a tutte le img
  $('.slider img').removeClass('visible');
  //definisco qual è l'immagine successiva
  var prev_img = current_img.prev('img');

//se un'immagine successiva esiste:
  if(prev_img.length != 0) {
    // aggiungo la classe visible all'img successiva
    prev_img.addClass('visible');
    //se invece non c'è alcuna immagine successiva
  } else {
    //riparto dalla prima img e la setto come visibile
    $('.slider img').last().addClass('visible');
  }
});
