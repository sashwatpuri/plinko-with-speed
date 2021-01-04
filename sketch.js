const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint ; 

var engine , world ; 
var ground ; 

var particles = [];
var plinko = [];
var divisions = [];
var score = 0 ; 
var particle ; 
var turn = 0 ;

var divisionHeight = 300 ; 

function setup() {
  var canvas = createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,795,800,10);

  for(var k = 0 ; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2  ,10,divisionHeight))
  }

  for (var j = 40; j <=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }

  for ( var j = 15; j <=width-10; j = j+50){
    plinko.push(new Plinko(j , 175));
  }

  for(var j = 65; j <= width; j = j+50){
    plinko.push(new Plinko(j,275));
  }

  for(var j = 90; j <=width+20; j = j+50){
    plinko.push(new Plinko(j,375));
  }

  
}

function draw() {
  background(0,0,0); 
  Engine.update(engine); 

  text('SCORE',50,50);


  if(frameCount%60==0){
    particles.push(new Particle(random(width/2-10 , width/2+10) , 10 ,10 ))
  }

  for(var j = 0; j< particles.length; j++){
    particles[j].display();
  }

  for(var k = 0 ; k< divisions.length; k++){
    divisions[k].display(); 
  }

  for(var i = 0; i<plinko.length; i++){
    plinko[i].display();
  }

  ground.display();

  

}