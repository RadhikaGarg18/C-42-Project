var craftimg1,craftimg2,craftimg3,craftimg4,bgimg,issimg;
var iss,spaceCraft,hasDocked = false;

function preload(){
  craftimg1 = loadImage("Docking-undocking/Docking-undocking/spacecraft1.png");
  craftimg2 = loadImage("Docking-undocking/Docking-undocking/spacecraft2.png");
  craftimg3 = loadImage("Docking-undocking/Docking-undocking/spacecraft3.png");
  craftimg4 = loadImage("Docking-undocking/Docking-undocking/spacecraft4.png");
  bgimg = loadImage("Docking-undocking/Docking-undocking/spacebg.jpg");
  issimg = loadImage("Docking-undocking/Docking-undocking/iss.png");
}

function setup() {
  createCanvas(800,600);

  spaceCraft = createSprite(350,500,50,50);
  spaceCraft.addImage(craftimg1);
  spaceCraft.scale = 0.2;

  iss = createSprite(400, 220, 50, 50);
  iss.addImage(issimg);
  iss.scale = 0.8;

}

function draw() {
  background(bgimg);  

  if(!hasDocked){
    spaceCraft.x = random(348,352)
    if(keyDown(LEFT_ARROW)){
      spaceCraft.addImage(craftimg3);
    }
    if(keyDown(RIGHT_ARROW)){
      spaceCraft.addImage(craftimg4);
    }
    if(keyDown(DOWN_ARROW)){
      spaceCraft.addImage(craftimg2)
    }
    if(keyDown(UP_ARROW)){
      spaceCraft.y = spaceCraft.y-2
    }
    if(spaceCraft.y === 310){
      hasDocked = true;
      fill("pink");
      textSize(24)
      text("Docking Successfull!",500,350);
      console.log("Docking Successfull")
    }
  }
  
  drawSprites();
}