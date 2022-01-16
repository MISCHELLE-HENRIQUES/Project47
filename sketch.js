var girlimg;
var trampolineimg;
var butterflyimg1,butterflyimg2,butterflyimg3,butterflyimg4,butterflyimg5;
var bg;
var jump;
var invisibleground;

function preload(){
  bg = loadImage ("Background.jpg");
  trampolineimg = loadImage("Trampoline.png");
  girlimg = loadImage("girl.png");
  butterflyimg1 = loadImage("butterfly1.png");
  butterflyimg2 = loadImage("butterfly2.png");
  butterflyimg3 = loadImage("butterfly3.png");
  butterflyimg4 = loadImage("butterfly4.png");
  butterflyimg5 = loadImage("butterfly5.png");
  jump = loadSound("jump.mp3");
}

function setup() {
  createCanvas(800,400);
  
  butterfly1 = createSprite(100,40);
  butterfly1.addImage(butterflyimg1);
  butterfly1.scale = 0.10;

  butterfly2 = createSprite(150,50);
  butterfly2.addImage(butterflyimg2);
  butterfly2.scale = 0.25;

  butterfly3 = createSprite(200,80);
  butterfly3.addImage(butterflyimg3);
  butterfly3.scale = 0.15;

  butterfly4 = createSprite(270,60);
  butterfly4.addImage(butterflyimg4);
  butterfly4.scale = 0.15;

  butterfly5 = createSprite(190,30);
  butterfly5.addImage(butterflyimg5);
  butterfly5.scale = 0.15;

  trampoline = createSprite(185,360);
  trampoline.addImage(trampolineimg);
  trampoline.scale = 0.55;

  girl = createSprite(185,250);
  girl.addImage(girlimg);
  girl.scale = 0.45

  invisibleground = createSprite(185,360);
  invisibleground.visible = false;
}

function draw() {
background(bg);

textSize(20);
text("Use Space Bar to Jump & Left And Right Arrows to Move",290,20);

if(keyDown("space")){
  girl.velocityY =  -5;
  jump.play();
  }
girl.velocityY = girl.velocityY + 0.1;

girl.collide(invisibleground);

if(butterfly1.isTouching(girl)){
  butterfly1.visible = false;
}
if(butterfly2.isTouching(girl)){
  butterfly2.visible = false;
}
if(butterfly3.isTouching(girl)){
  butterfly3.visible = false;
}
if(butterfly4.isTouching(girl)){
  butterfly4.visible = false;
}
if(butterfly5.isTouching(girl)){
  butterfly5.visible = false;
}
  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    girl.x = girl.x - 20;
  }
  if(keyCode === RIGHT_ARROW){
    girl.x = girl.x + 20;
  }
}