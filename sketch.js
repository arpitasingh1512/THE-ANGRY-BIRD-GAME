// Types of data
// numbers
/*var num = 123;
console.log(num);

// string
var str = "Hey, My name is Arpita";
console.log(str);

var n1 = 2+3;
console.log(n1);
var n2 = "2+3";
console.log(n2);

// Boolean
var bool = true;
console.log(bool);

// undefined objects
var object;
console.log(object);

//null
object = null;
console.log(object);

//Arrays
// arrays with same type of data
var arr1 = [34,78,98,6345,915443789,0,13527];
console.log(arr1);
console.log(arr1[4]);


//arrays with different types of data
var arr2 = [654, "Hello World", false, null, 656457];
console.log(arr2[2]);

//arrays with lists of data 
var arr3 = [[123,446,76538],["arpita", null, 44577],["Hey","This","is"]];
console.log(arr3[2][1]);

//adding data to an array
arr1.push(6788);
console.log(arr1)

//deleting data from array
arr1.pop()
console.log(arr1)*/








const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var birds=[]
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150,320,300,150)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(275,100);
    bird2 = new Bird(125,170);
    bird3 = new Bird(75,170);
    bird4 = new Bird(25,170);

    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)


    //log6 = new Log(100, 150, 50, PI/2);
    sling = new Slingshot(bird.body,{x:275,y:100});

    getBackgroundImage()
    


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    platform.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    bird2.display();
    bird3.display();
    bird4.display();

    //log6.display();
    sling.display();

}
function mouseDragged(){
    if (gameState==="onSling"){
        Matter.Body.setPosition(birds[birds.length-1].body,{x:mouseX,y:mouseY})
        Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x:5,y:-5})
        return false();
    }
    
}
function mouseReleased(){
    sling.fly()
    birds.pop()
    gameState="launched";
    return false();
}
function keyPressed (){
   if (keyCode === 32 && gameState==="launched"){
   if (birds.length>0)
   {
       Matter.Body.setPosition(bird.body,{x:200,y:50})
       sling.attach(bird.body)
    gameState="onSling"
   }
    
   }
}

async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    console.log(response)
}