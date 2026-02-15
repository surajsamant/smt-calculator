function showTab(tab) {
  document.getElementById("script").style.display = "none";
  document.getElementById("movie").style.display = "none";
  document.getElementById(tab).style.display = "block";
}

// SCRIPT CALCULATOR
function calculateScript() {

  let trend = parseInt(document.getElementById("scriptTrend").value);
  let theme = parseInt(document.getElementById("theme").value);
  let research = parseInt(document.getElementById("research").value);

  let researchScore = research >= 90 ? 20 :
                      research >= 80 ? 15 :
                      research >= 70 ? 10 : 5;

  let total = trend + theme + researchScore;

  let result;

  if (total >= 55)
    result = "⭐ 5-Star Script Potential";
  else if (total >= 45)
    result = "⭐ 4-Star Script";
  else
    result = "⚠️ Weak Script";

  document.getElementById("scriptResult").innerText =
    "Script Score: " + total + "/60\n" + result;
}

// MOVIE CALCULATOR
function calculateMovie() {

  let genre = parseInt(document.getElementById("genreCombo").value);
  let actor = parseInt(document.getElementById("actor").value);
  let director = parseInt(document.getElementById("director").value);
  let budget = parseInt(document.getElementById("budget").value);
  let marketing = parseInt(document.getElementById("marketing").value);

  let actorScore = actor >= 90 ? 20 :
                   actor >= 80 ? 15 :
                   actor >= 70 ? 10 : 5;

  let directorScore = director >= 90 ? 20 :
                      director >= 80 ? 15 :
                      director >= 70 ? 10 : 5;

  let total = genre + actorScore + directorScore + budget + marketing;

  let result;

  if (total >= 85)
    result = "🔥 Likely 10/10 Movie";
  else if (total >= 75)
    result = "⭐ 9+ Rating Expected";
  else if (total >= 65)
    result = "👍 Solid Movie";
  else
    result = "⚠️ Risky Production";

  document.getElementById("movieResult").innerText =
    "Movie Score: " + total + "/100\n" + result;
}
