class Game {
  constructor() {
    this.question = createElement('h2');
    this.option1 = createButton("");
    this.option2 = createButton("");
    this.option3 = createButton("");
    this.option4 = createButton("");
    this.nextButton = createButton("Next");
    this.correct = createElement('h2');
    this.wrong = createElement('h2');
    this.finalScore = createElement('h1');
  }
  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }
  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
      question_obj = new Questions();
    }
  }
  play() {
    // form.hide();
    var displayPosition = 50;
    Questions.getEachQuestion(qNum);
    if (question !== undefined) {
      displayPosition = displayPosition + 100;
      this.question.html(question.question);
      this.question.position(windowWidth / 2 - 200, windowHeight / 2 - 170);
      this.question.style('color', '#ff0000');
      this.question.style('font-size', '20px'); 
      this.option1.html(question.option1);
      this.option2.html(question.option2);
      this.option3.html(question.option3);
      this.option4.html(question.option4);
      this.option1.position(windowWidth / 2 - 150, windowHeight / 2 - 110);
      this.option2.position(windowWidth / 2 - 150, windowHeight / 2 - 80);
      this.option3.position(windowWidth / 2 - 150, windowHeight / 2 - 50);
      this.option4.position(windowWidth / 2 - 150, windowHeight / 2 - 20);
      this.option1.mousePressed(() => {
        userAnswers = this.option1.html();
      })
      this.option2.mousePressed(() => {
        userAnswers = this.option2.html();
      })
      this.option3.mousePressed(() => {
        userAnswers = this.option3.html();
      })
      this.option4.mousePressed(() => {
        userAnswers = this.option4.html();
      })
      this.nextButton.position(windowWidth / 2 + 150, windowHeight / 2 + 75);
      if (counter === 15) {
        counter = -1;
        qNum = qNum + 1;
      }
      this.nextButton.mousePressed(() => {
        counter = -1;
        qNum = qNum + 1;
        this.option1.show();
        this.option2.show();
        this.option3.show();
        this.option4.show();
        if (userAnswers === question.answer) {
          score = score + 10;
          player.score = score;
          player.update();
        }
        if (userAnswers !== question.answer) {
        }
        this.correct.hide();
        this.wrong.hide();
      })
      if (qNum === 10) {
        this.nextButton.html("Finish");
        gameState = 2;
      }
    }
  }
}