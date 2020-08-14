class Form {
constructor(){
    this.title = createElement("h1");
    this.input = createInput("Name");
    this.button = createButton("Play");
    this.greeting = createElement("h1")
}
hide(){
    this.title.hide();
    this.button.hide();
    this.input.hide();  
  }

display(){
    this.title.style("color: white");
    this.title.html("Quiz Game")
    this.title.position(windowWidth/2-80,windowHeight/2 - 220);
    this.input.position(windowWidth/2 - 90,windowHeight/2 - 100);
    this.button.position(windowWidth/2 - 40,windowHeight/2 - 30);
    
    this.button.mousePressed(()=>{
        this.title.hide();
        this.input.hide();
        this.button.hide();
         
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
      
        this.greeting.style("color: yellow")
        this.greeting.html("Hello " + player.name);
        this.greeting.position(windowWidth/2 - 700, windowHeight/2-400);
        
        
      });
  }

}