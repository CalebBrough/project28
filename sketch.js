const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var tree, stone, ground, launcher;
var mango1, mango2, mango3, mango4, mango5;
var world, boyImg;


function preload(){
	boyImg = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 600, width, 20);
	tree = new Tree(1050, 610);
	stone = new Stone(400, 500, 20);

	mango1 = new Mango(1010, 120, 30);
	mango2 = new Mango(950, 250, 36);
	mango3 = new Mango(1200, 230, 33);
	mango4 = new Mango(1075, 240, 26);
	mango5 = new Mango(1120, 120, 38);

	launcher = new Launcher(stone.body, {x: 240, y: 445});
	
	Engine.run(engine);

}

function draw() {
	background(230);
	//Add code for displaying text here!
	image(boyImg, 200, 370, 200, 300);

	if (keyWentDown("space")) {
		Matter.Body.setPosition(stone.body, {x: 240, y: 445});
		launcher.attach(stone.body);
	}

	tree.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	ground.display();
	stone.display();
	launcher.display();
}

function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    launcher.fly();
}