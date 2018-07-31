export default function startSlider() {
 	$('.slider').slick({
 		autoplay: true,
 		autoplaySpeed: 4000,
 		arrows: true,
 		prevArrow: '<button id="prev" type="button" class="btn btn-juliet"><svg class="icon icon-left-arrow"><use xlink:href="img/sprite.svg#icon-left-arrow"></use></svg></button>',
    	nextArrow: '<button id="next" type="button" class="btn btn-juliet"><svg class="icon icon-right-arrow"><use xlink:href="img/sprite.svg#icon-right-arrow"></use></svg></button>',
    	fade: true,
  		cssEase: 'linear'
 	});
};
