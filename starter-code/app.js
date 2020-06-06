'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line

  var addNums = (a + b);
  var sumString = `The sum of ${a} and ${b} is ${addNums}.`;
  var output = [addNums, sumString ];

  return output;
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line

  var numsProduct = (a * b);
  var multiplyString = `The product of ${a} and ${b} is ${numsProduct}.`
  var returnArray1 = [numsProduct , multiplyString];

  return  returnArray1;
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////git add////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line

  var numbs = [a, b, c];                        //create array to work with
  var sumTotal = 0;
  var multiTotal = 1;
    
  for (var i = 0; i < numbs.length; i++)
  {
    var tempSumTotal = sum(numbs[i], sumTotal); // steps through array adding to total from last call or 0 on 1st go
    sumTotal = tempSumTotal[0];                  // strips string that was returned from sum
  }

  for (var j = 0; j < numbs.length; j++)
  {
    var tempMultiTotal = multiply(numbs[j], multiTotal); 
    multiTotal = tempMultiTotal[0];       
  }
  var sumString = `${a} and ${b} and ${c} sum to ${sumTotal}.`
  var productString = `The product of ${a} and ${b} and ${c} is ${multiTotal}.`
  var returnArray2 = [sumTotal, multiTotal, sumString, productString];

  return returnArray2;
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

sumArray(testArray);

function sumArray(sumArr) { //eslint-disable-line
  
  var numTotal = 0;

    for (var i = 0; i < sumArr.length; i++)
    {
      var total = sum(sumArr[i], numTotal); // steps through array adding to total from last call or 0 on 1st go
      numTotal = total[0];                  // strips string that was returned from sum
    }

  var sumArrayString = `${sumArr[0]},${sumArr[1]},${sumArr[2]} was passed in as an array of numbers, and ${numTotal} is their sum.`

  var returnSumArray = [numTotal, sumArrayString];

  return returnSumArray;
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here

function multiplyArray(multArr) { //eslint-disable-line

  var multiplyTotal = 1;                

  for (var i = 0; i < multArr.length; i++)
    {
      var total = multiply(multArr[i], multiplyTotal); 
      multiplyTotal = total[0];                  
    }

  var multiplyArrayString = `The numbers ${multArr[0]},${multArr[1]},${multArr[2]} have a product of ${multiplyTotal}.`

  var returnMultiplyArray = [multiplyTotal, multiplyArrayString];

  return returnMultiplyArray; 

}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line

  var getNumbers = `${dynamicArray[0]}`, multiplyTotal = 1;               

  for (var i = 0; i < dynamicArray.length; i++)
    {
      var total = multiply(dynamicArray[i], multiplyTotal); 
      multiplyTotal = total[0];                  
    }
  //create dynamic string
  for (var j = 1; j < dynamicArray.length; j++)
    {
      getNumbers = `${getNumbers},${dynamicArray[j]}`;
    }

  var dynamicArrayString = `The numbers ${getNumbers} have a product of ${multiplyTotal}.`

  var returnDynamicArray = [multiplyTotal, dynamicArrayString]; 

  return returnDynamicArray; 
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.
