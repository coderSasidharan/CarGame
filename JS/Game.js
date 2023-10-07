class Game{
    constructor(){
    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val()
        })
    }
    start(){
        if(gameState===0){
            player = new Player()
            form = new Form()
            player.getCount();
            form.view();
        }
        
        car1 = createSprite(100,200)
        car1.addImage(c1)

        car2 = createSprite(300,200)
        car2.addImage(c2)

        car3 = createSprite(500,200)
        car3.addImage(c3)

        car4 = createSprite(700,200)
        car4.addImage(c4)


        carsArray = [car1, car2, car3, car4]

    }
    updateGameState(gameState){
        database.ref('/').update({
            gameState: gameState
        })
    }
    playGame(){
         form.hide(); 
         Player.playerDetails(); 
         player.readFinished();
         if(playerDetails !== undefined){ 
             background("green")
             image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
             var index = 0; 
             var s = 200; 
             var x; 
             var y;
             for(var plr in playerDetails){ 
                 index = index + 1 ; 
                 x = 200+s+playerDetails[plr].playerX; 
                 s+= 200;
                 y = displayHeight - playerDetails[plr].playerDistance; 
                 carsArray[index-1].x = x; 
                 carsArray[index-1].y = y; 
                 if (index === player.index){ 
                     ellipseMode(CENTER);
                     fill("red")
                     ellipse(carsArray[index-1].x,carsArray[index-1].y,70,70)
                     camera.position.x = displayWidth/2; 
                     camera.position.y = carsArray[index-1].y }
                 }
          }


        
         
        if(player.x == car1.x && car1.isTouching(car2)){
              player.x -= 8
              player.update();
          }
        if(player.x == car1.x && car1.isTouching(car3)){
              player.x -= 8
              player.update();
          }
        if(player.x == car1.x && car1.isTouching(car4)){
              player.x -= 8
              player.update();
          }

        if(player.x == car2.x && car2.isTouching(car1)){
              player.x -= 8
              player.update();
          }
        if(player.x == car2.x && car2.isTouching(car3)){
              player.x -= 8
              player.update();
          }
        if(player.x == car2.x && car2.isTouching(car4)){
              player.x -= 8
              player.update();
          }

        if(player.x == car3.x && car3.isTouching(car1)){
              player.x += 8
              player.update();
          }
        if(player.x == car3.x && car3.isTouching(car2)){
              player.x += 8
              player.update();
          }
        if(player.x == car3.x && car3.isTouching(car4)){
              player.x += 8
              player.update();
          }

        if(player.x == car4.x && car4.isTouching(car1)){
              player.x += 8
              player.update();
          }
        if(player.x == car4.x && car4.isTouching(car2)){
              player.x += 8
              player.update();
          }
        if(player.x == car4.x && car4.isTouching(car3)){
              player.x += 8
              player.update();
          }



        

        
          if(keyIsDown(UP_ARROW) && player.index !== null){ 
              player.distance +=10 
              player.update(); 
            } 
            if(keyIsDown(DOWN_ARROW) && player.index !== null){ 
                player.distance -=10 
                player.update(); 
              } 
            if(keyIsDown(LEFT_ARROW) && player.index !== null){ 
              player.x -=8 
              player.distance += 4
              player.update(); 
            } 
            if(keyIsDown(RIGHT_ARROW) && player.index !== null){ 
                player.x +=8
                player.distance += 4
                player.update(); 
              } 
            if(player.distance>3690){
                gameState = 2
                if(player.carsAtEnd<4){

            
                player.carsAtEnd += 1
                }
                Player.finished(player.carsAtEnd);

            }
            if(player.carsAtEnd === 4){
                game.updateGameState(2)

            }
            drawSprites(); 
        }
    end(){
      
        //game.updateGameState(2)
    }
    
}
