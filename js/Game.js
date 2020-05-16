class Game {
  constructor(){}
  
play(){
  form.hide();
   textSize(30);
   text("Game Start",120,100);
   Player.getPlayerInfo();
   
   
   if(allPlayers!==undefined){
     var display_position= 130;
     //index for the array
     var index = 0;
     var x_position = 0;
     var y_position = 0;


   for(var plr in allPlayers){
        if(plr==="player"+player.index){
         index++;
         x_position = x+200;
         y_position = displayHeight-allPlayers[plr].distance;
         cars[index-1].x= x_position;
         cars[index-1].y = y_position;
         if(index===player.index){
           cars[index-1].shapeColor="red";
           camera.position.x = displayWidth/2;
           camera.poisiton.y = cars[index-1].y;
         }
        }   


   }

  }
   
  if(keyIsDown(UP_ARROW)&&player.index!==null){
   player.distance+=50;
   player.update();
   

  }


}



  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef= await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
        }
      
     
      form = new Form();
      form.display();

    }
  
car1 = createSprite(100,200,20,20);
car2 = createSprite(300,200,20,20);
car3 = createSprite(500,200,20,20);
car4 = createSprite(700,200,20,20);
cars[car1,car2,car3,car4];



  }
}
