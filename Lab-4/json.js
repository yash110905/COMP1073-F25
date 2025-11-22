/* STEP 2: Reference the HEADER and SECTION elements */
const header = document.querySelector("header");
const section = document.querySelector("section");
// STEP 3a: Create the asynchronous function populate()
async function populate() {
  // STEP 4: URL of the JSON file
  const requestURL = "js/i-scream.json";

  // STEP 5: Create new request object
  const request = new Request(requestURL);

  // STEP 6: Fetch the JSON file
  const response = await fetch(request);

  // STEP 7: Convert to JSON
  const jsonObj = await response.json();

  // STEP 8: Log JSON to console for debugging
  console.log(jsonObj);

  // STEP 9a: Call populateHeader
  populateHeader(jsonObj);

  // STEP 10a: Call showTopFlavors
  showTopFlavors(jsonObj);
}

// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build populateHeader() */
function populateHeader(jsonObj) {
  const h1 = document.createElement("h1");
  h1.textContent = jsonObj.companyName;

  const p = document.createElement("p");
  p.textContent = `Head Office: ${jsonObj.headOffice} — Established: ${jsonObj.established}`;

  header.appendChild(h1);
  header.appendChild(p);
}
/* STEP 10b: Build showTopFlavors() */
function showTopFlavors(jsonObj) {
  let topFlavors = jsonObj.topFlavors;

  for (let i = 0; i < topFlavors.length; i++) {
    // Create article + elements
    const article = document.createElement("article");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const calories = document.createElement("p");
    const type = document.createElement("p");
    const ingredientsHeader = document.createElement("p");
    const list = document.createElement("ul");
    // Fill content
    h2.textContent = topFlavors[i].name;
    img.src = "images/" + topFlavors[i].image;
    img.alt = topFlavors[i].name;

    calories.textContent = `Calories: ${topFlavors[i].calories}`;
    type.textContent = `Type: ${topFlavors[i].type}`;
    ingredientsHeader.textContent = "Ingredients:";

    // STEP 10g: Loop ingredients
    const ingredients = topFlavors[i].ingredients;
    for (let j = 0; j < ingredients.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = ingredients[j];
      list.appendChild(listItem);
    }
