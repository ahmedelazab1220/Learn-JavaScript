'use strict';

// Task 1

const calcAverage = (a , b , c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44 , 23 , 71);
let scoreKoalas = calcAverage(65 , 54 , 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(scoreDolphins , scoreKoalas){

    if(scoreDolphins * 2 >= scoreKoalas){
        console.log(`Dolphins win 🏆(${scoreDolphins} vs ,${scoreKoalas})`);
    }
    else if(scoreKoalas * 2 >= scoreDolphins){
        console.log(`Koalas win 🏆 (${scoreKoalas} vs ,${scoreDolphins})`);
    }
    else{
        console.log("NO WINNER IN THIS GAME!");
    }

}

// Test 1
console.log(checkWinner(scoreDolphins , scoreKoalas));
// Test 2
console.log(checkWinner(scoreDolphins = calcAverage(85 , 54 , 41) , scoreKoalas = calcAverage(23 , 34 , 27)));
