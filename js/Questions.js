class Questions{
    constructor(){

    }
    getQuestions(){
        var getQuestionInfo = database.ref('questions');
        getQuestionInfo.on("value",(data)=>{
        allQuestions = data.val();
        })
    }
    
    static getEachQuestion(qNum){
        var getQuestion = database.ref('questions/q'+qNum);
        getQuestion.on("value",(data)=>{
        question = data.val();
        })
      }

}