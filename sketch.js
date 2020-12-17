var car,wall,speed,weigth
function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 speed=random(55,90)
  weight=random(400,1500)
  wall=createSprite(1200,200,60,200)
  car.velocityX=speed;
}

function draw() {
  background(155,155,55); 
  if(wall.x-car.x>(car.writh+wall.width)/2)
{
  car.velocityX=0
  var deformation=0.5 * weigth *speed* speed/22509;
  if(deformation>180){
    car.shapeColor=color(230,140,0);
  }


 if (deformation<100)
 {
   car.shapeColor=color(0,233,0);
 }
if (deformation<180 && deformation>100)
{
  car.shapeColor=colr(230,210,0);
}
}
drawSprites();
}