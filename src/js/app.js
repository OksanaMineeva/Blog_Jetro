$('.menu-small').click(function() {
  if ($('.navigation-small').is(':visible')) {
	  $('.navigation-small').css('display', 'none');
  		$('.menu-small').removeClass('menu-small_is-active');	
  } else {
    $('.navigation-small').css('display', 'block');
    $('.menu-small').addClass('menu-small_is-active');
  }
});
