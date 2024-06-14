'use strict';

/**
 * in this section i add node.js , live server (hot reload) and prettier format and learn other skills about solving and formating by prettier.
 */

// Task 1
const forecastedDayOne = [17, 21, 23];
const forecastedDayTwo = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str);
}

printForecast(forecastedDayOne);
printForecast(forecastedDayTwo);
