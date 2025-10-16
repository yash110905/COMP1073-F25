/* 
    File: page-color-changer.js
    Author: Yash Patel
    */
// Step 1: Get references to HTML elements
// Range sliders
const redSlider = document.getElementById("red");
const greenSlider = document.getElementById("green");
const blueSlider = document.getElementById("blue");

// Body element (whose background color will change)
const body = document.querySelector("body");

// Step 2: Function to update the background color
function updateBackgroundColor() {
    //Get the current values from sliders
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    //Create the rgb() color string
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    //Apply the new background color to the page
    body.style.backgroundColor = rgbColor;

    //Log the current color for debugging
    console.log(`Background color changed to: ${rgbColor}`);
}
// Step 3: Event listeners for user input
// Whenever the user moves any of the sliders, the background color updates
redSlider.addEventListener("input", updateBackgroundColor);
greenSlider.addEventListener("input", updateBackgroundColor);
blueSlider.addEventListener("input", updateBackgroundColor);
// Step 4: Initialize default color on page load
updateBackgroundColor();
