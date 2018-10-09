//targeting elements in the HTML 

let printResponse = document.getElementById("response");
let eightballCircle = document.getElementById("eightball");
let displayedQuestion = document.getElementById("questionAsked");
let form = document.getElementById("userResponses");
let submitButton = document.getElementById("formButton");
let eightBallResponse = document.getElementById("eightBallResponse");
let displayedResponse  = document.getElementById("displayedAnswers");

//setting up the global variables
let username;
let askedQuestion = "";
let randomNumber;
let eightBall = "";


const startGame = () => {
let gameOn = true;

while (gameOn) {

  randomNumber = Math.floor(Math.random() * 8);

    switch(randomNumber) {
   case 0:
     eightBall = "It is certain";
     break;
   case 1: 
     eightBall = "It is decidedly so";
     break;
   case 2: 
     eightBall = "Reply hazy, try again";
     break;
   case 3: 
     eightBall = "Cannot predict now";
     break;
   case 4:
     eightBall = "Do not count on it";
     break;
   case 5:
     eightBall = "My sources say no";
     break;
   case 6:
    eightBall = "Outlook not so good";
   case 7:
     eightBall = "Signs point to yes";
     break;
    default: 
    eightBall = "";
    break;
  }
    displayedResponse.classList.add("display");
    displayedQuestion.innerHTML = `Hi, ${username}. The question you asked is: "${askedQuestion}". The Magic Eight Ball responds: `;
    eightBallResponse.innerHTML = `"${eightBall}"`;
    eightBallResponse.classList.add("responseStyle");
    //Adding the shaking animation to the eight ball and then removing it after it finishes
    eightballCircle.classList.add("shakinganimation");
    function callback() {
      eightballCircle.classList.remove("shakinganimation");
    }
    eightballCircle.addEventListener("webkitAnimationEnd", callback);
  gameOn = false;
}
}


submitButton.addEventListener("click", function(){
    username = form.name.value;
    askedQuestion = form.question.value;
    if (username && askedQuestion) {
      startGame();
    }
    else {
    	displayedQuestion.innerHTML = `You haven't asked a question yet`;
      eightBallResponse.innerHTML = "";
    }
    form.reset();
});

