		/* STEP 1: Declare variables
		Use a-z, 0-9, A-Z and underscores, avoiding reserved names
		All program variables are generally declared at the beginning */
let myName;
let myAge;
console.log(myName);
let string;
let para= document.querySelector('body p');

		/* STEP 2: Initialize variables
		Don't confuse a variable with no value with one that doesn't exist at all */

myName = 'yash patel';
myAge = 20;
console.log(myAge);


		/* STEP 3: Updating variables
		Once a variable has been declared, this can be done any time */

myName = 'Yash m Patel';
myAge = 21;
string = 'My name is ' + myName + ' and I am ' + myAge + ' years old.';
para.textContent = string;
		// STEP 4: Variable types (use typeof in the console)
		// Numbers
let numCourse =30;
para.textContent = numCourse;
console.log(typeof (numCourse));
		// Strings (use '' or "")
let stringCourse ='Client Side JS';
para.textContent = stringCourse;
console.log(typeof (stringCourse));
		// Booleans
let iAmAlive = true;
let compare = 3>6;
console.log(iAmAlive+ ' ' +'compare value is '+ compare);
		// Arrays
let myArray = ['yash', 21, true];
console.log(myArray[0]);
		// Objects
let dog = {
	dogName: 'oreo',
	breed: 'shitzu',
	color: 'black and white',
};
console.log(dog.dogName);
console.log(dog.breed);
console.log(dog.color);	
		// STEP 5: Typing (JavaScript is a loosely-typed language)

let x= 5;
x= 'five';
x= true;
console.log(x);
