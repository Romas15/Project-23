var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,boxLeft,boxRight,boxBottem;
var boxRight,boxLeftBody,boxBottemBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	boxLeft = createSprite(280,625,12,93)
	boxLeft.shapeColor = 'red';

    boxRight = createSprite(500,625,12,93);
    boxRight.shapeColor= 'red';

	boxBottem = createSprite(390,665,210,12)
	boxBottem.shapeColor = 'red';

	engine = Engine.create();
	world = engine.world;
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);

	boxRightBody = Bodies.rectangle(boxRight.x,boxRight.y,boxRight.width,boxRight.height, {isStatic:true});
	World.add(world, boxRightBody);

	boxLeftBody = Bodies.rectangle(boxLeft.x,boxLeft.y,boxLeft.height,boxLeft.width, {isStatic: true})
	World.add(world,boxLeftBody)

    boxBottemBody = Bodies.rectangle(boxBottem.x,boxBottem.y,boxBottem.height,boxBottem.width, {isStatc: true})
    World.add(world, boxBottemBody)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    //changing properties of ground and ball
   
   Matter.Body.setStatic(packageBody,false)
  
 } 
  
}



