const genres = {
  Action: {
    writing: { narrative:1.1, action:1.5, emotion:0.8, depth:0.9, humor:0.7, gory:1.0 },
    shooting: { tech:1.4, visual:1.5, acting:0.9, sound:1.1 },
    scale:{ small:0.8, medium:1.0, large:1.2 }
  },
  Horror: {
    writing:{ narrative:1.1, action:0.7, emotion:1.4, depth:1.2, humor:0.3, gory:1.3 },
    shooting:{ tech:1.0, visual:1.1, acting:1.2, sound:1.4 },
    scale:{ small:1.0, medium:1.1, large:0.8 }
  },
  Romance: {
    writing:{ narrative:1.3, action:0.4, emotion:1.5, depth:1.2, humor:0.9, gory:0.1 },
    shooting:{ tech:0.8, visual:1.0, acting:1.5, sound:1.2 },
    scale:{ small:1.2, medium:1.0, large:0.7 }
  },
  Drama: {
    writing:{ narrative:1.4, action:0.5, emotion:1.3, depth:1.4, humor:0.8, gory:0.2 },
    shooting:{ tech:0.9, visual:1.0, acting:1.4, sound:1.1 },
    scale:{ small:1.2, medium:1.1, large:0.8 }
  },
  Comedy: {
    writing:{ narrative:1.0, action:0.7, emotion:0.9, depth:0.8, humor:1.5, gory:0.2 },
    shooting:{ tech:0.9, visual:1.0, acting:1.3, sound:1.2 },
    scale:{ small:1.1, medium:1.0, large:0.8 }
  },
  "Sci-Fi": {
    writing:{ narrative:1.2, action:1.2, emotion:1.0, depth:1.1, humor:0.6, gory:0.7 },
    shooting:{ tech:1.5, visual:1.4, acting:1.0, sound:1.1 },
    scale:{ small:0.7, medium:1.0, large:1.3 }
  }
};

const audiences = {
  Adults:{ depth:1.2, emotion:1.1, humor:0.9 },
  Teens:{ action:1.2, humor:1.2, depth:0.8 },
  "All-Age":{ gory:0.6, narrative:1.1 }
};

const themes = {
  Survival:{ emotion:1.1, depth:1.1 },
  War:{ action:1.2, gory:1.2 },
  "Virtual World":{ visual:1.2, tech:1.2 },
  Love:{ emotion:1.2, narrative:1.1 },
  Mystery:{ depth:1.2, narrative:1.2 }
};

function optimize(){

  const genre = document.getElementById("genre").value;
  const audience = document.getElementById("audience").value;
  const theme = document.getElementById("theme").value;
  const scale = document.getElementById("scale").value;

  let writing = {...genres[genre].writing};
  let shooting = {...genres[genre].shooting};

  // Apply audience modifiers
  for(let key in audiences[audience]){
    if(writing[key] !== undefined)
      writing[key] *= audiences[audience][key];
  }

  // Apply theme modifiers
  for(let key in themes[theme]){
    if(writing[key] !== undefined)
      writing[key] *= themes[theme][key];
    if(shooting[key] !== undefined)
      shooting[key] *= themes[theme][key];
  }

  // Normalize writing to 1-10 scale
  let maxW = Math.max(...Object.values(writing));
  for(let key in writing){
    writing[key] = Math.round((writing[key]/maxW)*10);
  }

  // Normalize shooting to %
  let totalS = Object.values(shooting).reduce((a,b)=>a+b,0);
  for(let key in shooting){
    shooting[key] = Math.round((shooting[key]/totalS)*100);
  }

  // Scale risk
  let riskMultiplier = genres[genre].scale[scale];
  let riskLevel = riskMultiplier < 0.9 ? "High Risk"
                   : riskMultiplier > 1.1 ? "High Reward"
                   : "Balanced";

  document.getElementById("output").innerHTML = `
  <h3>Recommended Writing (1-10)</h3>
  Narrative: ${writing.narrative}<br>
  Action: ${writing.action}<br>
  Emotion: ${writing.emotion}<br>
  Depth: ${writing.depth}<br>
  Humor: ${writing.humor}<br>
  Gory: ${writing.gory}<br>

  <h3>Recommended Shooting Focus (%)</h3>
  Tech: ${shooting.tech}%<br>
  Visual: ${shooting.visual}%<br>
  Acting: ${shooting.acting}%<br>
  Sound: ${shooting.sound}%<br>

  <h3>Scale Analysis</h3>
  ${riskLevel}
  `;
}
