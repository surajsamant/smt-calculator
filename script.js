const genreFocus = {
  Action:"tech",
  "Sci-Fi":"tech",
  Horror:"tech",
  Animation:"tech",
  Romance:"design",
  Drama:"design",
  Adventure:"design",
  Comedy:"design",
  Crime:"balanced"
};

const themeAffinity = {
  Alien:["Action","Sci-Fi"],
  Disaster:["Action","Sci-Fi"],
  Dystopia:["Sci-Fi","Action"],
  Superhero:["Action"],
  Wedding:["Romance","Comedy"],
  "Serial Killer":["Horror","Crime"],
  Detective:["Crime","Adventure"],
  Magic:["Animation","Fantasy"],
  Space:["Sci-Fi"]
};

const idealAge = {
  Action:"R",
  Horror:"R",
  Crime:"R",
  Romance:"PG-13",
  Comedy:"PG-13",
  Drama:"PG-13",
  Adventure:"PG-13",
  Animation:"PG",
  "Sci-Fi":"PG-13"
};

function optimize(){

  let p = document.getElementById("primary").value;
  let s = document.getElementById("secondary").value;
  let theme = document.getElementById("theme").value;
  let age = document.getElementById("age").value;

  let focusCount = {design:0, tech:0, balanced:0};

  [p,s].forEach(g=>{
    focusCount[genreFocus[g]]++;
  });

  let finalFocus;
  if(focusCount.tech > focusCount.design) finalFocus="Technology Focus (≈60% Tech)";
  else if(focusCount.design > focusCount.tech) finalFocus="Design Focus (≈60% Design)";
  else finalFocus="Balanced Focus (≈50/50)";

  let themeMatch = themeAffinity[theme]?.includes(p) || themeAffinity[theme]?.includes(s);

  let ageWarning="";
  if(idealAge[p] !== age && idealAge[s] !== age){
    ageWarning="⚠ Age rating not ideal for selected genres.";
  }

  let themeWarning="";
  if(!themeMatch){
    themeWarning="⚠ Theme not strongly aligned with selected genres.";
  }

  document.getElementById("output").innerHTML = `
  <strong>Recommended Production Focus:</strong><br>
  ${finalFocus}<br><br>

  <strong>Priority Areas:</strong><br>
  ${finalFocus.includes("Tech") ? "High: VFX, Sound, Engine<br>Medium: Excitement<br>Low: Dialogues" :
    finalFocus.includes("Design") ? "High: Dialogues, Story, World Building<br>Medium: Emotion<br>Low: VFX" :
    "Balanced distribution across Story & Technology"}<br><br>

  <strong>Affinity Check:</strong><br>
  ${themeMatch ? "✔ Theme matches genre synergy." : themeWarning}<br>
  ${ageWarning}<br>
  `;
}
