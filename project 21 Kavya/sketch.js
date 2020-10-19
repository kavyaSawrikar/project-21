var bullet;
var wall, thickness
var speed,weight;
var damage;

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 200, 10);
  bullet.shapeColor=color("white");
  thickness=random(22,83)
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80,80,80);
  speed=random(223,321);
  weight=random(30,52);
 
}

function draw() {
  background("black");
  bullet.velocityX = speed;
  bullet.collide(wall); 
  
  
  
    damage =(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    
  
  

  if(damage > 10){
    wall.shapeColor=color("red");
  }
  if(damage < 10 ||(damage === 10)){
    wall.shapeColor=color("green");
  }
  
  drawSprites();
}