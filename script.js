function calculateScript() {

  let genre1 = document.getElementById("genre1").value;
  let genre2 = document.getElementById("genre2").value;
  let trend = parseInt(document.getElementById("trend").value);
  let research = parseInt(document.getElementById("research").value);

  let researchScore = research >= 90 ? 20 :
                      research >= 80 ? 15 :
                      research >= 70 ? 10 : 5;

  let comboScore = (genre1 === "Action" && genre2 === "Adventure") ? 20 :
                   (genre1 === "Horror" && genre2 === "Thriller") ? 20 :
                   (genre1 === "Romance" && genre2 === "Drama") ? 20 :
                   genre2 === "None" ? 10 : 15;

  let total = trend + researchScore + comboScore;

  let rating = total >= 55 ? "⭐ 5-Star Script Potential" :
               total >= 45 ? "⭐ 4-Star Script" :
               "⚠️ Weak Script";

  document.getElementById("scriptResult").innerHTML =
    "Score: " + total + "/60<br>" + rating;
}

function calculateMovie() {

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

  let total = actorScore + directorScore + budget + marketing;

  let result = total >= 85 ? "🔥 Likely 10/10 Movie" :
               total >= 75 ? "⭐ 9+ Rating Expected" :
               total >= 65 ? "👍 Solid Movie" :
               "⚠️ Risky Production";

  document.getElementById("movieResult").innerHTML =
    "Score: " + total + "/100<br>" + result;
}
