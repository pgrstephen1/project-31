
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

var ground;

function setup() {
  createCanvas(480,800);
  
  ground = new Ground(240,795,480,10);
}

function draw() {
  background("black");  

  ground.display();

  for(var d = 0; d < plinkos.length; d++){
    plinkos[d].display();
  }
 
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

   for(var i = 0; i < particles.length; i++){
    particles[i].display();
  }
}

for(var i = 0; i <=480; i = i + 80){
  divisions.push(new Division(k, 800-divisionHeight/2, 10, divisionHeight));
}

for(var i = 40; i <=480; i=i+50){
  plinkos.push(new Plinko(i,75));
}

for(var i = 15; i <=480; i=i+50){
  plinkos.push(new Plinko(i,175));
}

for(var i = 40; i <=480; i=i+50){
  plinkos.push(new Plinko(i,275));
}

if(frameCount%60===0){
  particles.push(new Particle(random(480/2-10, 480/2+10),10,10));
}