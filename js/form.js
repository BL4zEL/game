class Form {
    constructor()
    { 
    this.input = createInput("NAME")
    this.button = createButton("PLAY") 
    this.greeting = createElement("h3")

    }
    display(){
    var title = createElement("h2")
    title.html("CAR RACING GAME")
    title.position(600,50)

   

    this.input.position(620,400)
    this.button.position(680,600) 
    
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        this.greeting.html("HELLO "+ player.name);
        this.greeting.position(650,500);
        playerCount += 1;
        player.update();
        player.updateCount(playerCount);
    });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}