const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   
  engine = Engine.create();
  world = engine.world;
	
   
  playerBase = new PlayerBase(width - 300, height - 200, 200, 200);
  computerBase = new ComputerBase(width - 1300, height - 200, 200, 200);
  player = new Player(width - 300, height - 430, 150, 300);
  computerPlayer = new ComputerPlayer(width - 1300, height - 430, 150, 300);

 }

function draw() {

  background(180);
  
  Engine.update(engine);

  
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   playerBase.display();
   computerBase.display();

   player.display();
   computerPlayer.display();

}
