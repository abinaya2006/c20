var car, wall; 
var greencar,redcar,yellowcar,whitecar;
var speed, weight; 

function preload(){

  whitecar=loadImage("whitecar.png");
  greencar=loadImage("greencar.png");
  yellowcar=loadImage("yellowcar.png");
  redcar=loadImage("redcar.png");

}

function setup() {

  createCanvas(1400,400);

  speed=random(30,100);
  weight=random(700,2500);
  
  car=createSprite(50, 200, 50,50);
  //car.shapeColor="white";
  car.addImage(whitecar);
  car.scale=0.5;
  car.addAnimation("s",greencar);
  car.addAnimation("a",yellowcar);
  car.addAnimation("l",redcar);
  car.velocityX=speed;

  wall=createSprite(1340, 200, 40, 200);
  wall.shapeColor="grey";

}

function draw() {
  background("black");

  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;
    var deformation=(0.5*weight*speed*speed)/22509

    if((deformation)>180){
      car.changeAnimation("l",redcar);
    }else if((deformation)<100){
      car.changeAnimation("s",greencar);
    }else if((deformation)<180 && (deformation)>80){
      car.changeAnimation("a",yellowcar);
    }

  }

  drawSprites();
}