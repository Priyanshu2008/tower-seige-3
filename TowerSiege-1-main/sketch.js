const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg,platform;
var hexagon, slingshot;


function preload() {
   // backgroundImg = loadImage("sprites/bg.png");
}
var score=0
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


  ground = new Ground(600,height,1200,20);
    platform = new Ground(800,300, 700, 10);
//level 1
    box1 = new Box(700,290,50,50);
    box2 = new Box(750,290,50,50);
    box3 = new Box(800,290,50,50);
    box4 = new Box(850,290,50,50);
    box5 = new Box(900,290,50,50);

    // level 2
    box6 = new Box(750-25,250,50,50);
    box7 = new Box(800-25,250,50,50);
    box8 = new Box(850-25,250,50,50);
    box9 = new Box(900-25,250,50,50);
// level 3
box10 = new Box(700-25,200,50,50);
box11= new Box(800-25,200,50,50);
box12 = new Box(850-25,200,50,50);

  hexagon=Bodies.circle(100,100,25,25)
  World.add(world,hexagon)


  //   = new Bird(200,50);

    slingshot = new SlingShot(hexagon,{x:200, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    fill('blue')
    textSize(25)
   text("Score =" +score ,500,40)
   
    ground.display();
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
    
box1.score()
box2.score()
box3.score()
box4.score()
box5.score()
box6.score()
box7.score()
box8.score()
box9.score()
box10.score()
box11.score()
box12.score()

    // score
    
   // bird.display();
    platform.display();
    fill("blue")
    ellipseMode(RADIUS)
    ellipse(hexagon.position.x,hexagon.position.y,25,25)
  //  slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(hexagon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(hexagon,{x:100,y:100})
        slingshot.attach(hexagon);
    }
}