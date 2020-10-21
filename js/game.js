class Game {
    constructor(){


    }
    getState(){
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value",function(data){
        gameState=data.val();
        }
    )
    }
    update(State){
    database.ref("/").update({
        gameState:State
    })    
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerCountref = await database.ref("playerCount").once("value");
            if(playerCountref.exists()){
                playerCount=playerCountref.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
    }
    play(){
    form.hide();
    Player. getPlayerInfo();
    if(allPlayers!==undefined){
        var displayposition = 300
        for(var plr in allPlayers){
    text(allPlayers[plr].name+":"+allPlayers[plr].distance,400,displayposition)
    displayposition += 40
        }

    }


    }
}