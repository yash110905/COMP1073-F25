let courses = ['Intro to Web Programming', 'Client-Side JavaScript', 'Bitmap & Vector Graphics', 'Web UI Design with CSS', 'Relational Database'];
let courseList = 'My courses this term are ';
const msg = document.querySelector('#courses');

/* STEP 1a: A simple FOR loop */
for (let i = 0; i < courses.length; i++) {
    // STEP 1b: Add a conditional for the last item so we finish the sentence with a period
    if (i === courses.length - 1) {
        courseList += courses[i] + '.';
    } else {
        courseList += courses[i] + ', ';
    }
}
msg.textContent = courseList;

/* STEP 2: Exit a loop with break */
let cities = ['Toronto', 'Montreal', 'Ottawa', 'Vancouver', 'Halifax'];
const result = document.querySelector('#searchResult');
const input = document.querySelector('input');
const btn = document.querySelector('button#cities');

btn.addEventListener('click', function() {
    var searchName = input.value;
    input.value = '';
    input.focus();

    /* STEP 2a: FOR loop to iterate through the cities array */
    for (let i = 0; i < cities.length; i++) {
        /* STEP 2b: IF/ELSE conditional comparing searchName with cities[i] */
        if (searchName === cities[i]) {
            result.textContent = searchName + ' is in the list!';
            break; // Exit loop if found
        } else {
            result.textContent = searchName + ' is NOT in the list.';
        }
    }
});

/* STEP 3: Skip a loop iteration with continue */
const numberList = document.querySelector('#numberList');
let num = 50;
for (let i = 1; i <= num; i++) {
    let sqRoot = Math.sqrt(i);

    /* STEP 3a: IF statement to check whether the square root is NOT an integer */
    if (sqRoot % 1 !== 0) {
        /* STEP 3b: Skip numbers that are NOT perfect squares */
        continue;
    }

    numberList.textContent += i + ' ';
}

/* STEP 4: WHILE and DO/WHILE loops */
let j = 0;
let outputWhile = '';

/* STEP 4a: WHILE loop to iterate through the cities array */
while (j < cities.length) {
    outputWhile += cities[j] + ' ';
    j++;
}
console.log('WHILE loop:', outputWhile);

let k = 0;
var outputDo = '';

/* STEP 4b: DO/WHILE loop for the same output */
do {
    outputDo += cities[k] + ' ';
    k++;
} while (k < cities.length);
console.log('DO/WHILE loop:', outputDo);

/* BONUS: Loop through the same array backwards! */
let outputBackwards = '';
for (let i = cities.length - 1; i >= 0; i--) {
    outputBackwards += cities[i] + ' ';
}
console.log('Backwards loop:', outputBackwards);
