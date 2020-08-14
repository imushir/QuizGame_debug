class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.score = 0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount : count
        });
      }
      update(){
        var playerIndex = "player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          score : this.score
        });
      }
    
}