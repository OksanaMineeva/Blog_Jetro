import {TimelineMax} from 'gsap';

let tl = new TimelineMax({paused: true});
tl
  .to('.navigation-small',0.5,{height:200})
  .to('.navigation-small__item_1',1,{height:200})
  .to('.navigation-small__item_2',1,{height:200},0.75)
  .to('.navigation-small__item_3',1,{height:200},1)
  .to('.navigation-small__item_4',1,{height:200},1.25)
  .to('.navigation-small__item_5',1,{height:200},1.5);

$('.menu-small').click(function() {
  if($('.navigation-small').height() === 0) {
    tl.play();
  } else {
  	tl.timeScale(2);
    tl.reverse();
  }
});



