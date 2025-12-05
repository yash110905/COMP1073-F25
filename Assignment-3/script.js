const apiKey = 'live_UQo5pZ7LChWXXYirsKLHpJqn2EXBbMI9cr2FP1GRInhNcqTCVctOHnnq4HQQLQ8r';
const btn = document.getElementById('getDogBtn');
const container = document.getElementById('dogContainer');
btn.addEventListener('click', () => {
  // fetch and display logic here
});
fetch('https://api.thedogapi.com/v1/images/search', {
  headers: { 'x-api-key': apiKey }
})
.then(res => res.json())
.then(data => {
  
})
