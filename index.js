var readlineSync = require('readline-sync');

var score = 0 ;

console.log( "Hello Friends!" );
console.log("Lets Play A Game : Our Favorite Series \n");

console.log("About The Game : As in our school days , we were so much fond of Harry Ptter , so lets see after school , how much do you still remember about Harry Potter ? So , I have designed a quiz app !!  \n");

console.log("Rules : Each question will have three options and to select one option , you need to write the correct option number Eg: (1,2,3), For each correct answer , you will get one point and for incorrect answer you will get minus one point \n")

console.log("Lets Start The Game! \n");

console.log("-------------------------------------------\n");

function play( question , options ,answer ){
  
  console.log(question)
  // Input
  var userans = readlineSync.question( options );

  //Function Logic
  if ( userans === answer ){
    score = score +1 ;
    console.log("you were right!   Score:" ,score );
  }else{
    score = score - 1 ;
    console.log("you were wrong!   Score:",score);
  }
  console.log();
}

//Function Calls

var QuestionList = [
  {
    question : "Who were Harry's parents? \n",
    options  : "1 Henry and Maggie Potter \n2 James and Lily Potter \n3 William and Elizabeth Potter \nEnter the option : ",
    answer : "2"
  },
  {
    question : "Who are the muggle aunt and uncle that Harry must live with every summer? \n",
    options  : "1 Ned and Camilla Diddly \n2 Ralph and Magnolia Dudley \n3 Vernon and Petunia Dursley \nEnter the option : ",
    answer   : "3"
  },
  {
  question : "In order of birth, who are the seven Weasley siblings? \n",
  options  : "1 Percy, Bill, George, Charlie, Fred, Ron, Ginny \n2 George, Fred, Percy, Bill, Charlie, Ron, Ginny \n3 Bill, Charlie, Percy, Fred, George, Ron, Ginny \nEnter the option : ",
  answer   : "3" 
  },
  {
  question : "What are the three Unforgivable Curses? \n" ,
  options  : "1 Impedimenta, Incarcerous and Incendio \n2 Avada Kedavra, Crucio and Imperio \n3 Expelliarmus, Expecto Patronum and Diffindo \nEnter the option : ",
  answer   : "2"
  },
  {
  question : "Which of these Hogwarts professors teaches Transfiguration?",
  options  : "1 Snape \n2 Sprout \n3 McGonagall \nEnter the option : ",
  answer   : "3"
  }

]

for( var i = 0 ; i < QuestionList.length ; i++){
  var currentQuestion = QuestionList[i];
  play(currentQuestion.question ,currentQuestion.options , currentQuestion.answer);
}

console.log( "Your score is "+score );

if( score > 2 ){
console.log("Your are still my good friend as you are still Harry Potter Fan!! ") ;
}else{
  console.log(" Your score is too low! , Lets watch the Harry Potter Series together again!!!")
}
console.log("Game Over! Thanks For Playing! ");
