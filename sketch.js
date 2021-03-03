//name spacing or nicknaming
//const: constant 's value doesn't change
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



//var for Angry Birds Game(ABG) 
var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  //created ABG engine from main Matter.Engine class
  engine = Engine.create();
  //The world of ABG is same as the world of engine
  world = engine.world;

  //to change some physical property of an object
  var options = {
    //to stop the object from falling down
    isStatic:true
  }

  ground = Bodies.rectangle(400,350,800,20,options);
  World.add(world,ground);

  console.log(ground);

  var options = {
    restitution:0.8
  }

  ball = Bodies.circle(400,200,20,options);
  World.add(world,ball);
}

function draw() {
  background("lightcyan");  

  //To update engine of birds.
  Engine.update(engine)

  //makes x and y position the center of the object
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  //To make the ball touch the ground
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}