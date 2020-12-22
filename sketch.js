var backgr;
var player1;

function preload(){
  backgr=loadImage("war2.png")
 player1I=loadAnimation("Idle1.png","Idle2.png","Idle3.png","Idle4.png","Idle5.png","Idle6.png","Idle7.png","Idle8.png")
 player1h=loadAnimation("Hurt1.png","Hurt2.png","Hurt3.png","Hurt4.png","Hurt5.png","Hurt6.png","Hurt7.png","Hurt8.png","Hurt6.png")
 player1R=loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png")
 player1J=loadAnimation("Jump1.png","Jump2.png","Jump3.png","Jump4.png","Jump5.png","Jump6.png","Jump7.png","Jump8.png")
player1Ro=loadAnimation("oppoRun1.png","oppoRun2.png","oppoRun3.png","oppoRun4.png","oppoRun5.png","oppoRun6.png",)
 player1Io=loadAnimation("oppoIdle1.png","oppoIdle2.png","oppoIdle3.png","oppoIdle4.png","oppoIdle5.png","oppoIdle6.png","oppoIdle7.png","oppoIdle8.png")
 player1Jo=loadAnimation("oppoJump1.png","oppoJump2.png","oppoJump3.png","oppoJump4.png","oppoJump5.png","oppoJump6.png","oppoJump7.png","oppoJump8.png")
 player1A=loadAnimation("attack1.png","attack2.png","attack3.png","attack4.png","attack5.png","attack6.png",)
}
function setup() {
 createCanvas(windowWidth, windowHeight);
player1=createSprite(canvas.width/2,canvas.height/2)
player1.addAnimation("Idle",player1I)

player1.scale=0.1

ground=createSprite(canvas.width/2,canvas.height-50,3000,1)


}

function draw() {
  background(backgr);
  if(keyWentDown(RIGHT_ARROW)&&player1.collide(ground) ){
    player1.velocityX=6
  player1.addAnimation("Idle",player1R)
  }

  if( player1.collide(ground)&&keyWentUp(RIGHT_ARROW) ){
    player1.velocityX=0
  player1.addAnimation("Idle",player1I)
  }

  if(keyWentDown(LEFT_ARROW) ){
    player1.velocityX=-6
  player1.addAnimation("Idle",player1Ro)
  }

  if( keyWentUp(LEFT_ARROW) ){
    player1.velocityX=0
  player1.addAnimation("Idle",player1Io)
  } 

    if(keyWentDown("space")&& player1.velocityX===6) {
     player1.velocityY = -12;
  player1.addAnimation("Idle",player1J)
  }
  if(keyWentUp("space")) {

 player1.addAnimation("Idle",player1I)
 }
 if(keyWentDown("space")&& player1.velocityX===-6) {
    player1.velocityY = -12;
    player1.addAnimation("Idle",player1Jo)
}
if(keyWentUp("space")) {

player1.addAnimation("Idle",player1I)
}


  player1.velocityY = player1.velocityY + 0.8
 player1.collide(ground);
  drawSprites(); 
}

function mousePressed(){
  player1.addAnimation(player1A)
}