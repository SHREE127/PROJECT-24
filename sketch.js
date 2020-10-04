
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	paper1 = new paper(100,390);

	red1= new block(800,390,200,20);
	red2= new block(700,350,20,100);
	red3= new block(900,350,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper1.display();
  
  red1.display();
  red2.display();
  red3.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Body.applyForce(paper1.body, paper1.body.position, {x: 10 , y: -25})
	   
	 }

	 if (keyCode === DOWN_ARROW) {
	   
		Body.applyForce(paper1.body, paper1.body.position, {x: 10 , y: 25})
		
	  }
   }



