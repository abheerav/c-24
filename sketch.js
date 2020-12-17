const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var bird1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    pig1= new pig(20,30)
    bird1= new bird(20,10)
    ground = new Ground(200,height,400,20)
    log1= new log(23,45,23,12)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();
}