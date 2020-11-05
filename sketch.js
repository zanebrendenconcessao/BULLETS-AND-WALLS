var wall,thikness;
var bullet, speed, weight; 

function setup() {
  createCanvas(1600, 400);

	speed=random(223,321)
	weight=random(30,52)
	thikness=ramdom(23,83)

	bullet=createSprite(50, 200, 50,50);   
	bullet.velocityX = speed;
	bullet.shapeColor=color("red");

  	wall=createSprite(1200,200, thikness, width/2)
  	wall.shapeColor=color("grey")
}


function draw() {
  background(0);

  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0 * weight * speed * speed/(thikness * thikness* thikness);

if(damage>10){
	wall.shapeColor=color("red");
}

if(damage<10){
	wall.shapeColour=colour("green");
}







  }
    drawSprites();
}

function hasCollided(bullet,wall){

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;

if(bulletRightEdge>=wallLeftEdge){
return (true)
}
return(false);
}


