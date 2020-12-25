
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
player1=loadAnimation("shotputimage3.png")
throws=loadAnimation("shotputimage3.png","shotputimage4.png","shotputimage5.png")
}


function setup() {
	createCanvas(1200, 700);
	
 player = createSprite(200, 400, 20, 20);
 player.addAnimation("stand",player1);
 player.addAnimation("throwing",throws)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  player.shapeColor = "green";
  
if (keyDown("space")){
player.changeAnimation("throwing",throws)
}
  

  
  drawSprites();
 
}