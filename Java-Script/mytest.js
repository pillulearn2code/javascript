

// I will solve problems foem https://www.codecademy.com/courses/learn-javascrip in this file.

//Data Type (String,Numbers, Boolean)



var myString = 'Duglous';
var Age = 33;
var boolean = true;
var year = 2017

console.log('My name is :' + myString);
console.log('My Age is :' + Age);
console.log('You are working at Google?' + boolean);
console.log(Age + 3.5);
console.log(year - 1969);
console.log(65 / 240);
console.log(65 / 240 * 100);
console.log(Math.floor(Math.random() * 50));


//Controle_flow
// Exercise 1
var harryPotterFan = false;
if (harryPotterFan)
{ console.log('Mischief managed.'); }
else {
	console.log('I lead a muggle\'s life.');
}

//Exercise 2 (if else statement)

var hungerLevel = 5;
if (hungerLevel > 7) {
	console.log('Time to eat!');
}
else {
	console.log('Let\'s eat later.');
}

// functions

function takeOrder(crustType, topping) {
	console.log('Order:' + crustType, 'pizza topped with ' + topping);
}
takeOrder('thick crust', 'cheeze');

// Array

// how to define array 
var bucketList = ['mango', 'banana', 'apple'];
var listItem = bucketList[2]
console.log('Fruits in the list ' + bucketList);
console.log('we have only one fruit ' + listItem + ' in the fridge')
bucketList.push('pineapple', 'avocado', 1);
console.log(bucketList);
bucketList.pop();
console.log(bucketList);

// For loop in Array

var AjantaWishList = ['Dubai', 'London', 'Paris'];
var VirenderWishList = ['Munich', 'London', 'switzerland'];

for (var i = 0; i < AjantaWishList.length; i++) {

	for (var j = 0; j < VirenderWishList.length; j++) {
		var A = AjantaWishList[i];
		var V = VirenderWishList[j];

		if (A === V) {
			console.log('common desitnation of ajanta and virender is ' + A);
		}
	}
}

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.


function max(A, B) {
	if (A > B) {
		console.log('Grater number is :' + A);
	} else {
		console.log('Greater number is:' + B);
	}
}
max(12, 20);

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(A, B, C) {
	if (A < B) {
		console.log('Larger number A and B is ' + B);
		if (B < C) {
			console.log('largerst number is ' + C);
		}
		else {
			console.log('Largest Number is' + B);
		}
	} else {
		if (A > C) {
			console.log('largest number is ' + A);
		}
		else {
			console.log('largest number is ' + C);
		}
	}
}
maxOfThree(15, 20, 25);



// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

var vowelArray=['a','e','i','o','u'];

function vowelComp(character){
var isVowel = false;
  for(var iCount=0; iCount<=vowelArray.length; iCount++){
		if (character===vowelArray[iCount]){
			isVowel = true;	
			break;
		}
	}
	console.log(isVowel);
}
vowelComp('p');

//Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
var numberArray = [1, 2, 3, 4];

function sum(numberArray) {
	var totalSum =0;
	for (var iCount= 0; iCount< numberArray.length; iCount++) {
		totalSum = totalSum + numberArray[iCount];

	}
	console.log(totalSum);
}
sum(numberArray);


var numberArray = [100, 25, 20,18];

function mult(numberArray) {
	var totalMult =1;
	for (var iCount= 0; iCount< numberArray.length; iCount++) {
		totalMult = totalMult * numberArray[iCount];

	}
	console.log(totalMult);
}
mult(numberArray);




