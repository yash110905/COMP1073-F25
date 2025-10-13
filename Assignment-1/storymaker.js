/* See 'N' Say Storymaker storymaker.js */

document.addEventListener("DOMContentLoaded", () => {
  // Word arrays
  const subjects=["The cat","A pirate","My teacher","An alien","The robot"];
  const verbs=["found","stole","painted","hugged","discovered"];
  const adjectives=["a shiny","a spooky","a funny","a huge","a tiny"];
  const places=["in the park","at school","on the moon","under the bed","in the forest"];
  const objects=["banana","spaceship","pencil","pizza","trophy"];

  // Track selected word and current index
  let currentIndex={subject:0,verb:0,adjective:0,place:0,object:0};
  let selections={subject:"",verb:"",adjective:"",place:"",object:""};

  // Get button and output references
  const subjectBtn=document.getElementById("subjectBtn");
  const verbBtn=document.getElementById("verbBtn");
  const adjectiveBtn=document.getElementById("adjectiveBtn");
  const placeBtn=document.getElementById("placeBtn");
  const objectBtn=document.getElementById("objectBtn");
  const showStoryBtn=document.getElementById("showStoryBtn");
  const randomBtn=document.getElementById("randomBtn");
  const resetBtn=document.getElementById("resetBtn");
  const storyOutput=document.getElementById("storyOutput");

  // Cycle through words for a button
  function cycleWord(part,array,button){
    currentIndex[part]=(currentIndex[part]+1)%array.length;
    selections[part]=array[currentIndex[part]];
    button.textContent=selections[part];
  }

  // Button click events
  subjectBtn.addEventListener("click",()=>cycleWord("subject",subjects,subjectBtn));
  verbBtn.addEventListener("click",()=>cycleWord("verb",verbs,verbBtn));
  adjectiveBtn.addEventListener("click",()=>cycleWord("adjective",adjectives,adjectiveBtn));
  placeBtn.addEventListener("click",()=>cycleWord("place",places,placeBtn));
  objectBtn.addEventListener("click",()=>cycleWord("object",objects,objectBtn));

  // Show story    (use this "👉"emoji form "https://unicode.org/emoji/charts/full-emoji-list.html#1f449")
  showStoryBtn.addEventListener("click",()=>{
    const {subject,verb,adjective,place,object}=selections;
    if(!subject||!verb||!adjective||!place||!object){
      storyOutput.textContent="👉 Please select a word for each button first!";
      return;
    }
    const story=`${subject} ${verb} ${adjective} ${object} ${place}.`;
    storyOutput.textContent=story;

    // Speak story
    if('speechSynthesis' in window){
      const speech=new SpeechSynthesisUtterance(story);
      speech.rate=1;
      window.speechSynthesis.speak(speech);
    }
  });

  // Random story
  randomBtn.addEventListener("click",()=>{
    selections.subject=subjects[Math.floor(Math.random()*subjects.length)];
    selections.verb=verbs[Math.floor(Math.random()*verbs.length)];
    selections.adjective=adjectives[Math.floor(Math.random()*adjectives.length)];
    selections.place=places[Math.floor(Math.random()*places.length)];
    selections.object=objects[Math.floor(Math.random()*objects.length)];

    subjectBtn.textContent=selections.subject;
    verbBtn.textContent=selections.verb;
    adjectiveBtn.textContent=selections.adjective;
    placeBtn.textContent=selections.place;
    objectBtn.textContent=selections.object;

    storyOutput.textContent=`${selections.subject} ${selections.verb} ${selections.adjective} ${selections.object} ${selections.place}.`;
  });

  // Reset selections
  resetBtn.addEventListener("click",()=>{
    Object.keys(selections).forEach(key=>selections[key]="");
    storyOutput.textContent="";
    subjectBtn.textContent="Choose Subject";
    verbBtn.textContent="Choose Verb";
    adjectiveBtn.textContent="Choose Adjective";
    placeBtn.textContent="Choose Place";
    objectBtn.textContent="Choose Object";
  });
});
