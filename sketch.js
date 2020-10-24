
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,ground

function preload()
{
	
}

function setup() { 
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,670,10,10)

    box1 = new DustBin(600,695,130,10);
    box2 = new DustBin(530,660,10,80);
    box3 = new DustBin(670,660,10,80);
    
    ground = Bodies.rectangle(width/2, 710, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);  
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:3.9,y:-2.9});
  }


}
