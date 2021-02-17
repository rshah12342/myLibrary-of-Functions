var ironMan, drStrange;

function setup() {
  //create the background/base
  createCanvas(800,400);
  
  //the moving sprite
  ironMan = createSprite(400, 200, 50, 50);
  ironMan.shapeColor = "red";
  ironMan.debug = true;
  //to fly ironMan to the right
  ironMan.velocityX= 2;
  
  //the fixed sprite
  drStrange = createSprite(700, 200, 50, 50);
  drStrange.shapeColor = "darkblue";
  drStrange.debug = true;
  drStrange.velocityX = -2;
}

function draw() {
  //to clear screen and give background color
  background("lightBlue"); 
  
  bounceOff(drStrange, ironMan);

  if(isTouching(drStrange, ironMan)){
    drStrange.shapeColor ="black";
    ironMan.shapeColor ="black";
  }

  else {
    drStrange.shapeColor ="darkblue";
    ironMan.shapeColor ="red";
  }
  //display the sprites
  drawSprites();
}
