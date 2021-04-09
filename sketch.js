const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer1;
var stone1;
var rubber1;
var iron1;
var plane;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
   // hammer = new Hammer(10,100);

    iron1 = new Iron(300,350) ;

    stone1 = new Stone(700,320,100,100);
    rubber1 = new Rubber(900,450,70);
    hammer1 = new Hammer(10,100);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer1.display();
    iron1.display();
    stone1.display();
    rubber1.display();
}


    
 
