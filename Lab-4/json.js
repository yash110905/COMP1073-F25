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
