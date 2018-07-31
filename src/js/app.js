import 'slick-carousel';
import 'lightgallery';
//import 'lg-zoom'; //подключение зума к галереи
import 'lg-pager';
import 'lg-thumbnail';
//import 'lg-share'; //подключение возможности делиться фотографиями с галереи
import 'lg-fullscreen';
import 'lg-video';
import 'jquery-lazy';
import {WOW} from 'wowjs';
import startSlider from './lib/slider.js';
import smallMenu from './lib/menu.js';

new WOW().init(); 

$(document).ready(function() {
  $('.lazy').Lazy();
  smallMenu();
  startSlider();
  $('#lightgallery').lightGallery();
  if (window.matchMedia('(min-width: 670px)').matches) {
    $('.navigation-small').css('display', 'none');
    $('.menu-small').removeClass('menu-small_is-active');
  }
});
