const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,370,70,70);
    box2 = new Box(920,370,70,70);
    pig1 =new Pig(800,370);
    log1 =new Log(810,250,300,PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 =new Pig(800,240);
    log2 =new Log(810,230,300,PI/2);
    box5 =new Box(800,220,70,70);
    log3 =new Log(750,120,140,PI/6);
    log4 =new Log(860,120,140,-PI/6);
    bird =new Bird(100,100);
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}