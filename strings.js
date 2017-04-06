
// Exercises from W3Cschools https://www.w3schools.com/js/js_strings.asp'

// example to define a string and print two strings with white spaces.

var firstNameString = 'Ajanta';
var lastnameString = 'Bisht';
var textString = 'Please locate where \'locate\' occurs!';

console.log('What\'s your name' + ' ' + firstNameString + ' ' + lastnameString);
console.log('We are from \"India\"');


// pint the string length

console.log('Number of alphabets in my name'+' '+firstNameString.length);

//Finding a String in a String
//var length=textString.indexOf('locate');
console.log ('position of word locate in string is '+ ' '+textString.indexOf('locate'));


// if the word we are serching is in more them two places last will give the position of last word in the string.
console.log ('position of word locate in string is '+ ' '+textString.lastIndexOf('locate'));
 

 // Search 
 console.log('Serch position of word where'+ ' '+ textString.search('where'));

//Slice with negatvive value  

console.log('Slice one word' + ' ' +firstNameString.slice(-5));

 // Slice() the string and dislay in same order

 for(var iCount=0;iCount<= firstNameString.length ;iCount++){

 	var nameSameOrder = firstNameString.slice(iCount,iCount+1);

 	console.log('Slice and display in same order'+ ' '+ nameSameOrder);

}
 // Slice()  the string and recerce it 
 var nameReverce= '';

 for(var iCount=firstNameString.length;iCount >= 0;iCount--){

 	nameReverce = nameReverce + firstNameString.slice(iCount,iCount+1);


 }
 console.log('Slice and reverce the string' + ' ' + nameReverce.toUpperCase());


 // substring () method

 console.log('substring'+ ' '+firstNameString.substring(2));

 // Replace 
 var questionString='what is your name?';
 var replaceString = questionString.replace(' your name', 'fathers name');
console.log(questionString);
console.log(replaceString);

// uppdar case

console.log('converting string to uppercase'+' '+ firstNameString.toUpperCase());

//contacte
console.log('combine two strings'+' '+ questionString.concat(' '+firstNameString));

// extracting string character 

//Write a function translate() that will translate a text into "rövarspråket". That is,place an occurrence of "o" after a consonant. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
var textString = 'this';
var vovalArray = ['a','e','i','o','u'];
var newString = '';
var isFound= false;
	function translate(textString){
		//console.log ('Hi');
		for(var iCount=0 ; iCount<textString.length; iCount++){
			isFound =false;	
			newString= newString+textString.charAt(iCount);
			//console.log(newString);
			for(var jCount=0;jCount<vovalArray.length;jCount++){
				if(textString.charAt(iCount) == vovalArray[jCount]){
					isFound =true;
					break;
				}
			}
			if (!isFound) {
				newString =newString+'o';
			}
		}
		return newString;
	}
	//translate(textString);
	console.log("Translated string is: "+ translate('this'));

//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
 var textString = 'jag testar';
 var reverseString ='';

 	function reverse(textString){

 		for(var iCount=textString.length; iCount>0; iCount--){
 			//console.log ('HI');
 			reverseString=reverseString+ textString.charAt(iCount);
 		}
 		//console.log('reverse string is: ' + reverse(textString));
 	return reverseString;

	}
	console.log('reverse string is: ' + reverse(textString));


// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
 /*
 var wordsArray=['12345','123456','1234567' ];
 var emptyString = '';
 	function findLongestWord(wordsArray){
 		for(var iCount=0; iCount<=wordsArray.length; iCount++){
 			
 			//emptyString=wordsArray[iCount].length;
 			if (wordsArray[iCount].length > wordsArray[iCount+1].length){
 			console.log ('longest word is '+ wordsArray[iCount]);
 			}
 			else {
 				console.log('longest word is '+ wordsArray[iCount+1]);
 			}

 		}
	}
	findLongestWord(wordsArray);

 		
 		//emptyString=wordsArray[iCount];
 	


//

/*
// Slice() and print the string in reverce order in a single string

var stringName = 'Pass';

for(var iCount= stringName.length;iCount>=0;iCount--){

	var reverceStringName= stringName.slice(-icount);
	return reverceStringName;
}

/*


//  Printing your address for members of the family

var firstNameArray = ['Ajanta', 'Virender', 'Rushil'];
var lastnameArray = ['Bisht', 'Mehta', 'Mehta'];
var address = 'R\   åcksta Gårdsvag 21';
var pin = '16273'
for (var iCount = 0; iCount <= firstNameArray.length - 1; iCount++) {
    console.log('First Name :' + firstNameArray[iCount]);
    console.log('Last Name :' + ' ' + lastnameArray[iCount]);
    console.log('Address :' + ' ' + address);
    console.log('PIN' + ' ' + pin);
}
*/



