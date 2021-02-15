
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;


function setup() {
	createCanvas(1200,800);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(200,270,60,50);
	plane = new Plane(100,height,400,20);
	stone = new Stone(33,70,30,40);
	rubber = new Rubber(70,20,10,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");


  hammer.display();
  //hammer.display1();
  plane.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}
