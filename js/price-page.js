/*var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
    
      navMain.classList.remove('main-nav--nojs');
      navToggle.addEventListener('click', function() {
        if (navMain.classList.contains('main-nav--closed')) {
          navMain.classList.remove('main-nav--closed');
          navMain.classList.add('main-nav--opened');
        } else {
          navMain.classList.add('main-nav--closed');
          navMain.classList.remove('main-nav--opened');
        }
      });

*/

var button1 = document.querySelector('.sheet__button-1');
var button2 = document.querySelector('.sheet__button-2');
var button3 = document.querySelector('.sheet__button-3');
var button4 = document.querySelector('.sheet__button-4');

var slide1 = document.querySelector('.sheet__block--1');
var slide2 = document.querySelector('.sheet__block--2');
var slide3 = document.querySelector('.sheet__block--3');
var slide4 = document.querySelector('.sheet__block--4');



button1.addEventListener('click', function(){
    button2.classList.remove('sheet__button--active');
    button3.classList.remove('sheet__button--active');
    button4.classList.remove('sheet__button--active');
    
    button1.classList.add('sheet__button--active');
    
    slide2.classList.remove('sheet__block--active');
    slide3.classList.remove('sheet__block--active');
    slide4.classList.remove('sheet__block--active');
    
    slide1.classList.add('sheet__block--active');
    
});

button2.addEventListener('click', function(){
    button1.classList.remove('sheet__button--active');
    button3.classList.remove('sheet__button--active');
    button4.classList.remove('sheet__button--active');
    
    button2.classList.add('sheet__button--active');
    
    slide1.classList.remove('sheet__block--active');
    slide3.classList.remove('sheet__block--active');
    slide4.classList.remove('sheet__block--active');
    
    slide2.classList.add('sheet__block--active');
});

button3.addEventListener('click', function(){
    button2.classList.remove('sheet__button--active');
    button1.classList.remove('sheet__button--active');
    button4.classList.remove('sheet__button--active');
    
    
    button3.classList.add('sheet__button--active');
    
    slide2.classList.remove('sheet__block--active');
    slide1.classList.remove('sheet__block--active');
    slide4.classList.remove('sheet__block--active');
    
    slide3.classList.add('sheet__block--active');
});

button4.addEventListener('click', function(){
    button2.classList.remove('sheet__button--active');
    button3.classList.remove('sheet__button--active');
    button1.classList.remove('sheet__button--active');
    
    
    button4.classList.add('sheet__button--active');
    
    slide2.classList.remove('sheet__block--active');
    slide3.classList.remove('sheet__block--active');
    slide1.classList.remove('sheet__block--active');
    
    slide4.classList.add('sheet__block--active');
});