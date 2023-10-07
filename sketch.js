const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var database, form, player,game, gameState = 0, playerCount = 0, playerDetails, distance=0

var car1, car2, car3, car4, carsArray, c1, c2, c3, c4, track

function preload(){
  c1 = loadImage("attachments/car1.png")
  c2 = loadImage("attachments/car2.png")
  c3 = loadImage("attachments/car3.png")
  c4 = loadImage("attachments/car4.png")
  track = loadImage("attachments/track.jpg")
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  engine = Engine.create();
  world = engine.world;
  database = firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  Engine.update(engine);
  if(playerCount === 4){
    game.updateGameState(1)
  }
  if(gameState=== 1){
    clear()
    game.playGame()
  }
 /* if(gameState === 2){
    game.updateGameState(2)
   game.end()
  }*/
  if(gameState === 2){
   // game.updateGameState(2)
    game.end();
  }
}
