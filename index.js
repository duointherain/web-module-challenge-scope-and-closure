// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////
console.log("*** Task 1 ***")

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter1 has an extra line of code, return function counter( ) which will remember and up date, and a const value that won't update. One actually doesn't run, but two remembers and updates.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * I think one has a closure because there is a function within the higher function. Changing from const to let doesn't make it run though. 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Well counter 1 doesn't run so... never. But if it ran and I wanted to call counter in a different part of whatever I was making, then it would be good. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
  return count++;
  }
}
let counter1 = counterMaker;
console.log(counter1())
console.log(counter1())
// counter2 code
let count = 0;
console.log("*** counter 2**")
function counter2() {
  return count++;
}

console.log(counter2())
console.log(counter2())
console.log(counter2())
console.log("*** Task 2 ***")
/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

  return Math.floor(Math.random() * 3 - 0);

}

console.log(inning())
console.log(inning())
console.log(inning())
console.log(inning())
console.log(inning())


console.log("*** Task 3 ***")
/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, ins){
    let home = 0;
    let away = 0;
  for  (let i=0; i<ins; i++) {
    home = home + inning();
    away = away + inning();
  }
  return {
    hometeam:home, 
    awayteam:away
        }
      }

  console.log(finalScore(inning, 9))

      

console.log("*** Task 4 ***")
/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


// function getInningScore(inning){
//   let score = 0;
//   score = inning();
//   return score;

// }

// function getInningScore(inning, ins){
//   let home = 0;
//   let away = 0;
//   let inner = 4; 
// for  (let i=0; i<ins; i++) {
//   home = home + inning();
//   away = away + inning();
  
//   //console.log(`${inner}th inning: Away Team ${away} - ${home}`);
  

// }
// return (`${inner}th inning: Away Team: ${away}  Home team:  ${home} `) 
// }




// console.log(getInningScore(inning, 9))


// function finalScore(inning, ins)
//console.log(`Final Score: ${awayF} - ${homef}`){
//   let home = 0;
//   let away = 0;
// for  (let i=0; i<ins; i++) {
//   home = home + inning(3,0);
//   away = away + inning(3,0);
// }
// return (`Home Team: ${home}  Away team:  ${away} `) 
// }





console.log("*** Scoreboard***")

function getInningScore(home, away, index){
  if(index === 1){
    return `${index}st inning: Away Team: ${away} - Home Team: ${home}`;
  } else if(index === 2){
    return `${index}nd inning: Away Team: ${away} - Home Team: ${home}`;
  } else if(index === 3){
    return `${index}rd inning: Away Team: ${away} - Home Team: ${home}`;
  } else {
    return `${index}th inning: Away Team: ${away} - Home Team: ${home}`;
  } 
}

function scoreBoard(cb1, cb2, numsOfInnings){
  let home = 0;
  let away = 0;
  let index = 0;
  let homeF = 0;
  let awayF = 0;
  for(let i = 1; i <= numsOfInnings; i++ ){
    index++
    home += cb2()
    away += cb2()
    homeF 
    console.log(cb1(home, away, index));
  }
    console.log(`Final Score: Away Team: ${away} - Home Team: ${home}`);
};
scoreBoard(getInningScore,inning,9);











//console.log(finalScore(inning (),getInningScore(inning, 3) 3))





