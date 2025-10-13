/*
   page-color-changer.js
   Interactive RGB background color changer
  */

// Get references to sliders
const redSlider = document.getElementById('redSlider');
const greenSlider = document.getElementById('greenSlider');
const blueSlider = document.getElementById('blueSlider');

// Get references to value display spans
const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');

// Get references for RGB display text
const rText = document.getElementById('rText');
const gText = document.getElementById('gText');
const bText = document.getElementById('bText');

// Reference to body element
const body = document.body;

/**
 * Updates the background color of the page
 * based on the slider values.
 */
function updateBackgroundColor() {
    // Get current slider values
    const red = redSlider.value;
    const green = greenSlider.value;
    const blue = blueSlider.value;

    // Construct the RGB color string
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    // Apply the color to the body background
    body.style.backgroundColor = rgbColor;

    // Update the numeric displays
    redValue.textContent = red;
    greenValue.textContent = green;
    blueValue.textContent = blue;

    // Update the RGB text display
    rText.textContent = red;
    gText.textContent = green;
    bText.textContent = blue;
}

// Add event listeners to update color live
redSlider.addEventListener('input', updateBackgroundColor);
greenSlider.addEventListener('input', updateBackgroundColor);
blueSlider.addEventListener('input', updateBackgroundColor);

// Initialize color on page load
updateBackgroundColor();
