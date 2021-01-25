
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var backgroundImg2;
var player, playerImg;
var ground;
//var trees;
var obstacles,obstacleImg;
var position;

function preload()
{
	backgroundImg = loadImage("mario2.png");
	backgroundImg2 = loadImage("background.png");
	playerImg = loadAnimation("mario3.png","mario4.png","mario5.png");
	obstacleImg = loadImage("insect11.png");
	obstacleImg2 = loadImage("insect12.jpg");
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//treesGroup = createGroup();
	obstaclesGroup = createGroup();
	
	background2 = createSprite(550,300,2500,1000);
	background2.addImage("back",backgroundImg2);
	background2.scale = 2.5;
	background2.velocityX = -3;

	ground = createSprite(100,740,800,20);
	ground.velocityX = -3;
	ground.scale = 3;
	ground.x = ground.width/2;
	ground.visible = false;
	console.log(ground.x);

	// tree = createSprite(300,500,780,110);
	// tree.addImage("tree",treeImg1);
	// tree.scale = 0.5;
	
	player = createSprite(60,660,0,0);
	player.addAnimation("run",playerImg);
	//player.velocityX = 3;	

	Engine.run(engine);
  
}

function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(0);
	//background(backgroundImg);

	if (background2.x < 0){
		background2.x = background2.width/2;
	}

	if (ground.x < 0){
		ground.x = ground.width/2;
	}
	 
	player.collide(ground);

	//spawnTrees();
	spawnObstacles();

  	drawSprites();
}

/*function spawnTrees(){
	if(frameCount % 200===0){
		trees = createSprite(850,550,50,50);
		trees.velocityX = -3;
		trees.shapeColor = "red";
		console.log(trees.x,trees.y);
		trees.scale = 0.5;
		player.depth = player.depth+1;

		rand = Math.round(random(1,2));
		switch(rand){
			case 1: trees.addImage(treeImg1);
					break;
			case 2: trees.addImage(treeImg3);
					break;
					default:break;
		}
		treesGroup.add(trees);
	}
}
*/

function spawnObstacles(){
	if(frameCount % 200===0){
		obstacles = createSprite(300,650,30,30);
		obstacles.velocityX = 3;
		obstacles.addImage(obstacleImg);
		obstacles.shapeColor = "black";
		console.log(obstacles.x,obstacles.y);
		obstacles.scale = 0.2;
		player.depth = player.depth+1;

		position = random(1,2);
		if(position===1){
			obstacles.x = 0;
			obstacles.addImage(obstacleImg);
			obstacles.velocityX = 3;
		}
		if(position===2){
			obstacles.x = 400;
			obstacles.addImage(obstacleImg2);
			obstacles.velocityX = -3;
		}
		// push();
		// translate(obstacles.x,obstacles.y);
		// rotate(180);
		// pop();
		// rand = Math.round(random(1,2));
		// switch(rand){
		// 	case 1: trees.addImage(treeImg1);
		// 			break;
		// 	case 2: trees.addImage(treeImg3);
		// 			break;
		// 			default:break;
		// }
		//obstaclesGroup.add(obstacles);

	}
}
