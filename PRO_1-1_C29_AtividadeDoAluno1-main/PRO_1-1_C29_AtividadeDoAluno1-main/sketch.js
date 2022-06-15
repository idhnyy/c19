const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var bolinha;
var ligacao;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
  rope = new Rope(8,{x:245, y:30});
  
  var options = {
    density: 0.001
  }
  bolinha = Bodies.circle(300,300,20,options);
  Matter.Composite.add(rope.body,bolinha);
  ligacao = new Link(rope, bolinha);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
  rope.show();
 
  ellipse(bolinha.position.x, bolinha.position.y, 20,20)
}
