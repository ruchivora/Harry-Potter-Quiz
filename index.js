var readlineSync = require('readline-sync');

var score = 0 ;

console.log( "Hello Friends!" );
console.log("Lets Play A Game : Our Favorite Series \n");

console.log("About The Game : As in our school days , we were so much fond of Harry Ptter , so lets see after school , how much do you still remember about Harry Potter ? So , I have designed a quiz app !!  \n");

console.log("Rules : Each question will have three options and to select one option , you need to write the correct option number Eg: (1,2,3), For each correct answer , you will get one point and for incorrect answer you will get minus one point \n")

console.log("Lets Start The Game! \n");

console.log("-------------------------------------------\n");

function play( question , answer ){
  // Input
  var userans = readlineSync.question( question );

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

play("Who were Harry's parents? \n 1 Henry and Maggie Potter \n 2 James and Lily Potter \n 3 William and Elizabeth Potter \n Enter your answer : ", "2" );

play("Who are the muggle aunt and uncle that Harry must live with every summer? \n 1 Ned and Camilla Diddly \n 2 Ralph and Magnolia Dudley \n 3 Vernon and Petunia Dursley \n Enter your answer : ", "3") ;


play("In order of birth, who are the seven Weasley siblings? \n 1 Percy, Bill, George, Charlie, Fred, Ron, Ginny \n 2 George, Fred, Percy, Bill, Charlie, Ron, Ginny \n 3 Bill, Charlie, Percy, Fred, George, Ron, Ginny \n Enter your answer : ", "3") ;

play("What are the three Unforgivable Curses? \n 1 Impedimenta, Incarcerous and Incendio \n 2 Avada Kedavra, Crucio and Imperio \n 3 Expelliarmus, Expecto Patronum and Diffindo \n Enter your answer : ", "2") ;

play("Which of these Hogwarts professors teaches Transfiguration? \n 1 Snape \n 2 Sprout \n 3 McGonagall \n Enter your answer : ", "3") ;

console.log( "Your score is "+score );

if( score > 2 ){
console.log("Your are still my good friend as you are still Harry Potter Fan!! ") ;
}else{
  console.log(" Your score is too low! , Lets watch the Harry Potter Series together again!!!")
}
console.log("Game Over! Thanks For Playing! ");
