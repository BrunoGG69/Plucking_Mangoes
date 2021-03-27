
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;

var backgroundImg

function preload() {
		backgroundImg = loadImage("bg.png");
	}

function setup() {
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(800, 280, 400, 500);
	boy = new Boy(400, 440, 150, 250);

	stone1 = new Stone(600, 250, 40);

	sling = new SlingShot(stone1.body,{x:350, y:380})
	
	mango1 = new Mango(900, 220, 48);
	mango2 = new Mango(850, 240, 48);
	mango3 = new Mango(800, 210, 48);
	mango4 = new Mango(750, 240, 48);
	mango5 = new Mango(700, 260, 48);
	mango6 = new Mango(950, 240, 48);
	mango7 = new Mango(900, 170, 48);
	mango8 = new Mango(840, 170, 48);
	mango9 = new Mango(780, 140, 48);
	mango10 = new Mango(720, 160, 48);
	mango11 = new Mango(880, 130, 48);
	mango12 = new Mango(670, 200, 48);
	mango13 = new Mango(830, 90, 48);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

   stone1.display();

  sling.display();

  
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();

  tree.display();

 
  
  drawSprites();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);
  detectCollision(stone1, mango11);
  detectCollision(stone1, mango12);
  detectCollision(stone1, mango13);
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
    
}



function detectCollision(stones, mangoes){
    mangobody = mangoes.body.position();
    stonebody = stones.body.position();

    var distance = dist(stonebody.x, stonebody.y, mangobody.x, mangobody.y);

    if(distance <= mangoes.r + stones.r){
        Matter.Body.setStatic(mangoes.body, false);
    }
    
}



