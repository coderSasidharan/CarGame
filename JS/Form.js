class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement('h2')
        this.reset = createButton("reset")
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    view(){
        
        this.input.position(displayWidth/2-40,displayWidth/2-80)

        this.button.position(displayWidth/2+30,displayHeight/2)
        var title = createElement('h2');
        title.position(displayWidth/2-50,0)
        title.html("Multiplayer Car Race")
        this.reset.position(displayWidth-100,20);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update()
            player.updateCount(playerCount)
            
            this.greeting.html("Details Uploaded"+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
        this.reset.mousePressed(()=>{
            game.updateGameState(0);
            player.updateCount(0);
            player.clearPlayerDetails();
            Player.finished(0);
        })
    }
}