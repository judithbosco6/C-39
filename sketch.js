
var database;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var cars,car1,car2,car3,car4;
var car1Image,car2Image,car3Image,car4Image;
var trackImage;

function preload(){
    car1Image=loadImage("images/images/car1.png");
    car2Image=loadImage("images/images/car2.png");
    car3Image=loadImage("images/images/car3.png");
    car4Image=loadImage("images/images/car4.png");
    trackImage=loadImage("images/images/track.jpg");
}


function setup(){
    createCanvas(displayWidth-100,displayHeight-50);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
    
} 


function draw(){
  if(playerCount===4){
      game.update(1);

  }
  if(gameState===1){
      clear();
      game.play();
      
  }
  if(gameState===2){
      game.end();
  }
}

