
var tomSmith= ['Tom Smith','123 street','21'];
console.log('First Index is ',tomSmith[0]);
var arraylenght=tomSmith.length+1;
tomSmith[arraylenght]= 'test@tets.com';
console.log(tomSmith);
tomSmith[arraylenght+1]= 'M';
console.log(tomSmith);
tomSmith.push('Single');
console.log(tomSmith);

//  sorting an array
var y= tomSmith.sort();
console.log('sorted array is ', tomSmith.sort());


// Adding array element 
var fruits=['banana','mango'];
fruits.push('Pineapple', 'Plum');
console.log(fruits);

//Associative Arrays
var person=[];
person['firstname']= 'John';
person['lastname']='Deo';
person['age']=21;
console.log(person);
console.log('type of fruit',typeof fruits);

var numberArray=[21,22,54,66];
console.log(typeof numberArray);

//Create an array named cars, assign the values "Saab", "Volvo" and "BMW" to it, and display it. test
var cars = ['saab','Volvo','BMW'];
console.log(cars);
console.log(cars[1]);
cars[0]='Opel';
cars.push('Mercedes');
console.log(cars);

//------ Array Methods-------

// converting array to strings comma separated  values 
console.log('converting array to string ',cars.toString());
// convert erry to strng but in addition you can specify the separator
console.log( cars.join(' * '));

// popping and pushing
//pop() removes the last element of an array.
cars.push('TATA');
console.log(cars);
cars.pop();
console.log(cars);
cars.push('Car-A','Car-B');
console.log(cars);

// shift() removes the last index of an array (pop and shift perdorms the same action but pop remove from the end and shift remove form the biggining)

cars.shift();
console.log(cars);

// unshift and pull are similer but pull add the element at an end and unshift add the array element at the biggining
cars.unshift('Car-N');
console.log(cars);

//change element 

var myArray = ['A','B','C','D','E','F'];
myArray[0]=1;
console.log(myArray);