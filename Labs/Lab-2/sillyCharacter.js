/* 
Project: "Silly Character Customizer"
Objective:
You’ll create a small interactive webpage that generates a random, 
funny character with attributes like name, age, favorite food, and special powers. 
The user can also customize some aspects like updating the character's name or age.

Project Breakdown:
Declare, Initialize, and Update Variables:

You’ll create variables to store different character attributes 
(name, age, favorite food, etc.).
Users will have the option to update some of these variables, like 
changing the character’s name or age.

Use different data types for each attribute:
characterName (string)
Age (number)
Is the character a superhero? (boolean)
Special powers (array)
Favorite food (string)
Conduct Basic Math Operations:

You can randomly generate the character's age using math operations.
You could also include a small feature where the character's age increases 
or decreases when a button is clicked.
Create and Manipulate Strings:

Use string manipulation to generate a funny description of the character 
based on the data. You can concatenate strings or use template literals to 
display the character's attributes in a creative and humorous way.

*/

// Declare and initialize variables
// Declare and initialize variables
let characterName = "Captain Waffles";
let age = Math.floor(Math.random() * 80) + 1; // Random age between 1–80
let isSuperhero = true;
let specialPowers = ["fly", "invisibility", "super strength", "time travel"];
let favoriteFood = "pizza";



// Function to generate a random character description

// Function to generate a random character description
function generateCharacter() {
    characterName = getRandomName();
    age = Math.floor(Math.random() * 80) + 1;
    favoriteFood = getRandomFood();
    isSuperhero = Math.random() > 0.5; // random true/false
    updateDescription();
}

function getRandomName() {
    const names = ["Captain Waffles", "Sir Pickles", "Lady Spaghetti", "Dr. Giggles"];
    return names[Math.floor(Math.random() * names.length)];
}

function getRandomFood() {
    const foods = ["pizza", "tacos", "ice cream", "sushi"];
    return foods[Math.floor(Math.random() * foods.length)];
}

// Functions to update character's age

// Functions to update character's age
function increaseAge() {
    age++;
    updateDescription();
}

function decreaseAge() {
    if (age > 1) age--;
    updateDescription();
}



// Function to update the character's description after changing age


// Add event listeners for buttons using querySelector

