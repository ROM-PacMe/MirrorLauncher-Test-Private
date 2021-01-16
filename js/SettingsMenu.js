angular.module('ionicApp', ['ionic'])

/*======================

Controllers

========================*/

.controller('appCtrl', function($scope, $ionicSideMenuDelegate) {
  setTimeout(function(){
    $ionicSideMenuDelegate.toggleLeft();
  },600)
  var e = 'slide_effect,scale_effect,fade_effect,slide_up,wave,drop_in';
  $scope.slide = function(se) {
    $('.item').removeClass().addClass('item')
    $('.item').addClass(se);
    $('button').removeClass('active')
    $('.b_' + se).addClass('active');
    $ionicSideMenuDelegate.toggleLeft();
    if($ionicSideMenuDelegate.isOpen() == true){
      setTimeout(function(){
        $ionicSideMenuDelegate.toggleLeft();
      },700)
    }
  };
});

$('button').click(function(){
  $(this).addClass('active')
});

/*==========================

UI uwu

===========================*/

$(document).ready(function(){
  for (var i=1; i <= $('.slider__slide').length; i++){
    $('.slider__indicators').append('<div class="slider__indicator" data-slide="'+i+'"></div>')
  }
  setTimeout(function(){
    $('.slider__wrap').addClass('slider__wrap--hacked');
  }, 1000);
})

function goToSlide(number){
  $('.slider__slide').removeClass('slider__slide--active');
  $('.slider__slide[data-slide='+number+']').addClass('slider__slide--active');
}

$('.slider__next, .go-to-next').on('click', function(){
  var currentSlide = Number($('.slider__slide--active').data('slide'));
  var totalSlides = $('.slider__slide').length;
  currentSlide++
  if (currentSlide > totalSlides){
    currentSlide = 1;
  }
  goToSlide(currentSlide);
})