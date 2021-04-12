var pacmanUpI, pacmanRightI, pacmanDownI, pacmanLeftI;
var BlueMonsterI, RedMonsterI, GreenMonsterI, PinkMonsterI;
var cherry;
var backgroundImg;
var obstacle;
var edges=[];


function preload(){
  pacmanUpI = loadAnimation("Images/closeMouthUp.png","Images/openMouthUp.png");
  pacmanRightI = loadAnimation("Images/closeMouthRight.png","Images/openMouthRight.png");
  pacmanDownI = loadAnimation("Images/closeMouthDown.png","Images/openMouthDown.png");
  pacmanLeftI = loadAnimation("Images/closeMouthLeft.png","Images/openMouthLeft.png");
  BlueMonsterI = loadImage("Images/BlueMonster.png");
  RedMonsterI = loadImage("Images/RedMonster.png");
  GreenMonsterI = loadImage("Images/GreenMonster.png");
  PinkMonsterI = loadImage("Images/PinkMonster.png");
  cherry = loadImage("Images/cherry.png");
  //backgroundImg = load("Images/background.png");
}

function setup() {
  createCanvas(800,400);

//obstacles

  obstacle1 = createSprite(15,70,20,100);
  obstacle2 = createSprite(100,20,1000,20);
  obstacle3 = createSprite(100,100,50,20);
  obstacle4 = createSprite(200, 100, 70, 20);
  obstacle5 = createSprite(350,100,120,20);
  obstacle6 = createSprite(500,100,100,20);
  obstacle7 = createSprite(700,100,150,20);
  obstacle8 = createSprite(100,300,50,20);
  obstacle9 = createSprite(200, 300, 70, 20);
  obstacle10 = createSprite(350,300,120,20);
  obstacle11= createSprite(500,300,100,20);
  obstacle12= createSprite(700,300,150,20);
  obstacle13 = createSprite(100,200,50,20);
  obstacle14 = createSprite(200, 200, 70, 20);
  obstacle15 = createSprite(350,200,120,20);
  obstacle16 = createSprite(500,200,100,20);
  obstacle17 = createSprite(700,200,150,20);


//pacmanUp
  pacmanUp=createSprite(200,200,20,20);
  pacmanUp.addAnimation("pacmanUp",pacmanUpI);
  pacmanUp.scale=0.1;


  pacmanRight=createSprite(200,150,20,20);
  pacmanRight.addAnimation("pacmanRight",pacmanRightI);
  pacmanRight.scale=0.1;
  pacmanRight.visible=false;

  pacmanDown=createSprite(200,200,20,20);
  pacmanDown.addAnimation("pacmanDown",pacmanDownI);
  pacmanDown.scale=0.1;
  pacmanDown.visible=false;

  pacmanLeft=createSprite(200,50,20,20);
  pacmanLeft.addAnimation("pacmanLeft",pacmanLeftI);
  pacmanLeft.scale=0.1;
  pacmanLeft.visible=false;

  BlueMonster=createSprite(100,200,20,20);
  BlueMonster.addImage(BlueMonsterI);
  BlueMonster.scale=0.1;

  RedMonster=createSprite(100,150,20,20);
  RedMonster.addImage(RedMonsterI);
  RedMonster.scale=0.05;

  GreenMonster=createSprite(100,100,20,20);
  GreenMonster.addImage(GreenMonsterI);
  GreenMonster.scale=0.1;

  PinkMonster=createSprite(100,50,20,20);
  PinkMonster.addImage(PinkMonsterI);
  PinkMonster.scale=0.05;
}

function draw() {
  background("black");  
  //edges=createEdge();

  //pacmanUp.bounceOff(edges[2]);
  //pacmanDown.bounceOff(edges[3]);


  if(keyDown(UP_ARROW)){
    pacmanUp.visible=true;
    pacmanUp.velocityY= -2;
    pacmanDown.visible=false;
  }

  if(keyDown(DOWN_ARROW)){
    pacmanUp.visible=false;
    pacmanDown.visible=true;
    pacmanDown.velocityY= 2;
  }

  if(keyDown(RIGHT_ARROW)){
    pacmanUp.visible=false;
    pacmanDown.visible=false;
    pacmanLeft.visible=false;
    pacmanRight.visible=true;
    pacmanRight.velocityX=2;
  }

  drawSprites();
}