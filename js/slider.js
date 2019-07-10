var slide = document.getElementsByClassName('slide'),
    rightArrow = document.getElementsByClassName('rightArrow')[0],
    leftArrow = document.getElementsByClassName('leftArrow')[0];

rightArrow.onclick = function() {
  var temp = slide[0].getAttribute('class');
  
  slide[0].setAttribute('class', slide[1].getAttribute('class'));
  
  slide[1].setAttribute('class', slide[2].getAttribute('class'));
    
  slide[2].setAttribute('class', slide[3].getAttribute('class'));    
    
  slide[3].setAttribute('class', slide[4].getAttribute('class'));      
  
  slide[4].setAttribute('class', temp);
}

leftArrow.onclick = function() {
  var temp = slide[0].getAttribute('class');
  console.log(temp);
  
  slide[0].setAttribute('class', slide[4].getAttribute('class'));
    
  slide[4].setAttribute('class', slide[3].getAttribute('class'));
    
  slide[3].setAttribute('class', slide[2].getAttribute('class'));    
  
  slide[2].setAttribute('class', slide[1].getAttribute('class'));
  
  slide[1].setAttribute('class', temp);
}