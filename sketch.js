function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload() {
  bg = loadImage("Hot Air Ballon-01.png");
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

if(keyDown(LEFT_ARROW)){
  balloon.x = balloon.x+10;
}
if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10;
}
if(keyDown(UP_ARROW)){
  balloon.y = balloon.y-10
}
if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y+10;
}