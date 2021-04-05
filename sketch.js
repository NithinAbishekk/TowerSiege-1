const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var star;

var stand1;
var stand2;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var sbox1,sbox2,sbox3,sbox4,sbox5,sbox6,sbox7,sbox8,sbox9,sbox10,sbox11,sbox12,sbox13,sbox14,sbox15,sbox16,sbox17,sbox18,sbox19,sbox20,sbo21,sbox22,sbox23,sbox24,sbox25;
var elastic;


function preload(){

}

function setup(){
  var canvas = createCanvas(1300,550);
  engine = Engine.create();
  world  = engine.world;

  //create bodies here;
  ground = new Ground(650,539,1300,20);
  
  star = new Star(200,300);
  
  stand1= new Stand(650,350);
  stand2= new Stand(1000,250);

  box1 = new Box(560,300);
  box2 = new Box(589,300);
  box3 = new Box(618,300);
  box4 = new Box(647,300);
  box5 = new Box(676,300);
  box6 = new Box(705,300);
  box7 = new Box(734,300);
  //second layer;
  box8 = new Box(574,200);
  box9 = new Box(603,200);
  box10 = new Box(632,200);
  box11 = new Box(661,200);
  box12 = new Box(690,200);
  box13 = new Box(719,200);
  //third layer;
  box14 = new Box(583,100);
  box15 = new Box(612,100);
  box16 = new Box(641,100);
  box17 = new Box(670,100);
  box18 = new Box(699,100);
  //fouth layer;
  box19 = new Box(592,0);
  box20 = new Box(621,0);
  box21 = new Box(650,0);
  box22 = new Box(679,0);
  //fifth layer;
  box23 = new Box(601,-100);
  box24 = new Box(630,-100);
  box25 = new Box(659,-100);
  

  sbox1 = new Box(910,150);
  sbox2 = new Box(939,150);
  sbox3 = new Box(968,150);
  sbox4 = new Box(997,150);
  sbox5 = new Box(1026,150);
  sbox6 = new Box(1055,150);
  sbox7 = new Box(1084,150);
  //second layer;
  sbox8 = new Box(919,50);
  sbox9 = new Box(948,50);
  sbox10 = new Box(977,50);
  sbox11 = new Box(1006,50);
  sbox12 = new Box(1035,50);
  sbox13 = new Box(1064,50);
  //third layer;
  sbox14 = new Box(928,-50);
  sbox15 = new Box(957,-50);
  sbox16 = new Box(986,-50);
  sbox17 = new Box(1015,-50);
  sbox18 = new Box(1044,-50);
  //fourth layer;
  sbox19 = new Box(937,-150);
  sbox20 = new Box(966,-150);
  sbox21 = new Box(995,-150);
  sbox22 = new Box(1024,-150);
  //fifth layer;
  sbox23 = new Box(946,-250);
  sbox24 = new Box(975,-250);
  sbox25 = new Box(1004,-250);



  elastic = new Elastic(star.body,{x:200,y:300});

  /*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
		Engine.run(engine);
		Render.run(render);*/ 
 
   Engine.run(engine);

  
}

function draw(){
   background(0);
   Engine.update(engine);
   
   ground.display();
  
   star.display();
   
   stand1.display();
   stand2.display();
  
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
   box13.display();
   box14.display();
   box15.display();
   box16.display();
   box17.display();
   box18.display();
   box19.display();
   box20.display();
   box21.display();
   box22.display();
   box23.display();
   box24.display();
   box25.display();
   //displaying stand2 boxes;
   sbox1.display();
   sbox2.display();
   sbox3.display();
   sbox4.display()
   sbox5.display();
   sbox6.display();
   sbox7.display();
   sbox8.display();
   sbox9.display();
   sbox10.display();
   sbox11.display();
   sbox12.display();
   sbox13.display();
   sbox14.display();
   sbox15.display();
   sbox16.display();
   sbox17.display();
   sbox18.display();
   sbox19.display();
   sbox20.display();
   sbox21.display();
   sbox22.display();
   sbox23.display();
   sbox24.display();
   sbox25.display();


   elastic.display();

   
}
function mouseDragged(){
	Matter.Body.setPosition(star.body,{x: mouseX,y: mouseY});
}

function mouseReleased(){

	elastic.fly();
}

