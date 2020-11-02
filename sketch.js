
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bar =new Bar(200,50,300,20);

ball1=new Ball(90,180,30);
ball2=new Ball(150,180,30);
ball3=new Ball(210,180,30);
ball4=new Ball(270,180,30);
ball5=new Ball(330,180,30);

}


function draw() {
 
  background(0);
  bar.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
 
  Engine.update(engine);
  
 
}



