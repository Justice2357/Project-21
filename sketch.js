var damage, speed, weight, thickness;
var bullet, wall, pathway;

function setup() {

  createCanvas(1535,720);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  pathway = createSprite(767.5,360, 1535,400);
  pathway.shapeColor = "black";

  bullet = createSprite(50,360,25,15);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  
  wall = createSprite(1500,360,thickness,200);
  wall.shapeColor = color(255,0,0);
}

function draw() {

  background(255,0,0);  

  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
    damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }

   else if(damage>10){
     // wall.shapeColor = color(255,0,0);
     wall.shapeColor = "yellow";
    }

    if(thickness<61){
    bullet.x = 1470;
    }
    else if(thickness>61){
    bullet.x = 1458.5;  
    }  

    bullet.velocityX = 0;
  }

  drawSprites();
}

//wall.x - bullet.x < (bullet.width+wall.width)/2