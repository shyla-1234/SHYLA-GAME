var p;
var m;
var l;
var z;
function preload(){
gImg=loadImage("g.png")
GHOSTIMG=loadImage("GHOST.png")
GUNIMG=loadImage("GUN.png")
HAMMERIMG=loadImage("HAMMER.png")
IRONRODIMG=loadImage("IRON ROD.png")
LAVAIMG=loadImage("LAVA.png")
LIONIMG=loadImage("LION.png")
MEATIMG=loadImage("MEAT.png")
MONSTERIMG=loadImage("MONSTER.png")
STICKIMG=loadImage("STICK.png")
STONEBRIDGEIMG=loadImage("STONEBRIDGE.png")
WATERBUCKETIMG=loadImage("WATER BUCKET.png")
WOODSTICKIMG=loadImage("WOOD STICK.png")
}
function setup(){
    createCanvas(600,200)
    p=createSprite(50,150,20,50);
  
    g = createSprite(0,150,400,20);
    g.addImage(gImg);
    g.scale=0.3;
  g.x = g.width /50
g.velocityX = -4;

    
}
function draw(){
    background(0, 229, 255);

 
  
 
    if (g.x < 0){
        g.x = g.width/50;
      }
      
    drawSprites();
}