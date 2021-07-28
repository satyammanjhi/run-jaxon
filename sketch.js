var bomb,coin,energydrink,jake,path,power,runner,boundary1,boundary2,running,run,bombimg;
var coinimg,energydrinkimg,jakerunning,pathimg,powerimg,runnerimg;

function preload(){
  //pre-load images
  bombimg=loadImage("bomb.png");
  pathimg=loadImage("path.png");
  jakerunning=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.PNG","jake5.png");
  runnerimg=loadAnimation("Runner-1.png","Runner-2.png");
  bombimg=loadImage("bomb.png");
  coinimg=loadImage("coin.png");
  energydrinkimg=loadImage("energyDrink.png");
  powerimg=loadImage("power.png");
}

function setup(){
  createCanvas(1360,700);
  //create sprites here
  path=createSprite(600,200,20,20);
  path.addImage(pathimg);

  jake=createSprite(600,400,20,20);
  jake.addAnimation("running",jakerunning);
  
  runner=createSprite(600,600,20,20);
  runner.addAnimation("run",runnerimg);
  runner.scale=0.1;

  boundary1=createSprite(420,350,30,200);
  boundary2=createSprite(780,350,30,200);
  
  power=createSprite(500,-300,20,20);
  power.addImage(powerimg);
  power.velocityY=+3;
  power.scale=0.2;

  energydrink=createSprite(700,-100,20,20);
  energydrink.addImage(energydrinkimg);
  energydrink.velocityY=+3;
  energydrink.scale=0.1;

  bomb=createSprite(500,50,20,20);
  bomb.addImage(bombimg);
  bomb.velocityY=+3;
  bomb.scale=0.1;

  coin=createSprite(700,200,20,20);
  coin.addImage(coinimg);
  coin.velocityY=+3;
  coin.scale=0.5;
}

function draw() {
  background(0);

  if(path.y > 400){
  path.y=height/3;
  }
  
  if (keyDown("left")) {
  jake.x=jake.x-3;
    }

  if (keyDown("right")) {
  jake.x=jake.x+3;
    }

  if (jake.isTouching(power)){
   power.visible=false; 
  }
  
  if (jake.isTouching(energydrink)){
    energydrink.visible=false; 
   }

  if (jake.isTouching(bomb)){
    bomb.visible=false; 
   }

  if (jake.isTouching(coin)){
    coin.visible=false; 
   }

  boundary2.visible=false;
  boundary1.visible=false;

  jake.collide(boundary2);
  jake.collide(boundary1);

  path.velocityY=+3;
  
  drawSprites();
}
