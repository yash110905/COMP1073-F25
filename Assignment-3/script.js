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
    const card = document.createElement('div');
    card.classList.add('dog-card');

    const dogImg = document.createElement('img');
    dogImg.src = data[0].url;
    card.appendChild(dogImg);

    const breedName = document.createElement('p');
    if (data[0].breeds && data[0].breeds.length > 0) {
      breedName.textContent = `Breed: ${data[0].breeds[0].name}`;
    } else {
      breedName.textContent = `Breed: Unknown`;
    }
    card.appendChild(breedName);

    container.prepend(card);
  
})
