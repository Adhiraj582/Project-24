var box1,box2,box3;
var ground;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(900,650,200,20);
	box2 = new Box(800,600,20,100);
	box3 = new Box(1000,600,20,100);

	ground = new Ground(450,670,1600,20);

	paper = new Ball(200,200,30);
	keyPressed();
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
	
  box1.display();
  box2.display();
  box3.display();

  ground.display();

  paper.display();



  drawSprites();
 
}


function keyPressed(){
    if (keyCode === UP_ARROW ) {
      Matter.Body.applyForce(paper.body, paper.body.position, {x: 170,y: -150})
    }
  }
