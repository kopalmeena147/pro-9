
function setup() {
  createCanvas(400,400);
var box = createSprite(300,300,500,500);
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW)){
    background("red");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("blue");
  }

  if(keyIsDown(UP_ARROW)){
    background("white");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("green");
  }
drawSprites();
}




