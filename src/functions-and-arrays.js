// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    let array = [num1, num2];
    return Math.max(...array);
}

let result = maxOfTwoNumbers(10, 4);
console.log(result);
console.log("-------------------------End iteration1-----------------------------");

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
const words1 = ["tannery"];
let words_1 = ["a", "zab", "12abc", "$$abcd", "abcde", "ironhack"];


function findLongestWord(wordArray) {
    let longestWord = "";
    if(wordArray === undefined || wordArray.length === 0){  
        return null;
    }
    if(wordArray.length === 1){
        return wordArray[0];
    }
    for(let i=0; i<wordArray.length-1; i++){
        let storedWord = "";
        // console.log(wordArray[i], wordArray[i+1]);
        // console.log(wordArray[i].length, wordArray[i+1].length);
        if(wordArray[i].length > wordArray[i+1].length){
            storedWord = wordArray[i];
           // console.log(storedWord);
        }else if(wordArray[i].length < wordArray[i+1].length){
            storedWord = wordArray[i+1];
           // console.log(storedWord);
        }else if(wordArray[i].length === wordArray[i+1].length){
            storedWord = wordArray[i];
           // console.log(storedWord);
        }

        if(longestWord.length < storedWord.length){
            longestWord = storedWord;
        }
    }
    return longestWord;
}

let result1 = findLongestWord(words);
let result_2 = findLongestWord(words1);
let result_3 = findLongestWord(words_1);
console.log(result1);
console.log(result_2);
console.log(result_3);
console.log("-------------------------End iteration2-----------------------------");

// Iteration 3 | Sum Numbers
// there are two ways of doing this normal function with loop or prototype reduce method;
// Method 1:
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
const numbers_2 = [9, 10, 82, 92, 32, 102, 58];

function sumNumbers(numberArray) {
    let sum = 0;
    if(numberArray === undefined || numberArray.length === 0){  
        return 0;
    }
    if(numberArray.length === 1){
        return numberArray[0];
    }
    for(let i=0;i<numberArray.length; i++){
        sum += numberArray[i];
    }
    return sum;
}
//output from normal function
let res = sumNumbers(numbers);
let res2 = sumNumbers(numbers_2);
console.log(res);

// Method 2:
// a=accummulator; c=currentValue
const sumWithInitial = numbers.reduce((a, c) => a + c, 0);
const sumWithInitial1 = numbers_2.reduce((a, c) => a + c, 0);
//output using reduce
console.log(sumWithInitial);
console.log(sumWithInitial1);
console.log("-------------------------End iteration3-----------------------------");

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
// Method 1:
function averageNumbers(arrayOfNumbers) {
    let numberofItemsInArray = arrayOfNumbers.length;
    if(arrayOfNumbers === undefined || arrayOfNumbers.length === 0){  
        return 0;
    }
    if(arrayOfNumbers.length === 1){
        return arrayOfNumbers[0];
    }
    return sumNumbers(arrayOfNumbers)/numberofItemsInArray;
}

let result2 = averageNumbers(numbers2);
console.log(result2);
console.log("-------------------------End iteration4-----------------------------");


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {
    if(arrayOfWords === undefined || arrayOfWords.length === 0){  
        return null;
    }
    return arrayOfWords.includes(word);
}

let result3 = doesWordExist(words2, "hello"); // expected result = false
console.log(result3);
let result4 = doesWordExist(words2, "matter"); // expected result = true
console.log(result4);
let result5 = doesWordExist([], "empty"); // expected result is null
console.log(result5);

console.log("-------------------------End iteration5-----------------------------");