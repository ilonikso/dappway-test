var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString('Research')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Design')
  .pauseFor(2500)
  .deleteAll()
.typeString('Development')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Scaling')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Testing')
  .pauseFor(2500)
  .deleteAll()
  .typeString('Support')
  .pauseFor(2500)
  
  
  
  .start();