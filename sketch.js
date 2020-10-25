const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1
var ground1
function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new box(200,200,50,50)
  ground1 = new ground(200,370,400,20);
  box2 = new box(180,100,50,50);
}

function draw() {
  background("black");
  Engine.update(engine);
  box1.display()
  ground1.display();
  box2.display();
}