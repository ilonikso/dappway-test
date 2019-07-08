var slide = document.getElementsByClassName('slide'),
    rightArrow = document.getElementsByClassName('rightArrow')[0],
    leftArrow = document.getElementsByClassName('leftArrow')[0];

leftArrow.onclick = function() {
  var temp = slide[0].getAttribute('class');
  
  slide[0].setAttribute('class', slide[1].getAttribute('class'));
  
  slide[1].setAttribute('class', slide[2].getAttribute('class'));
  
  slide[2].setAttribute('class', temp);
}

rightArrow.onclick = function() {
  var temp = slide[0].getAttribute('class');
  console.log(temp);
  
  slide[0].setAttribute('class', slide[2].getAttribute('class'));
  
  slide[2].setAttribute('class', slide[1].getAttribute('class'));
  
  slide[1].setAttribute('class', temp);
}