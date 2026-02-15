function calculate() {

  let research = parseInt(document.getElementById("research").value) || 0;
  let trend = parseInt(document.getElementById("trend").value) || 0;

  let narrative = parseInt(document.getElementById("narrative").value) || 0;
  let action = parseInt(document.getElementById("action").value) || 0;
  let emotion = parseInt(document.getElementById("emotion").value) || 0;
  let depth = parseInt(document.getElementById("depth").value) || 0;

  let director = parseInt(document.getElementById("director").value) || 0;
  let lead = parseInt(document.getElementById("lead").value) || 0;
  let tech = parseInt(document.getElementById("tech").value) || 0;
  let visual = parseInt(document.getElementById("visual").value) || 0;

  let scriptScore = (research * 5) + (trend * 5) +
                    narrative + action + emotion + depth;

  let productionScore = director + lead + tech + visual;

  let total = scriptScore + productionScore;

  let message;

  if (total >= 130)
    message = "🔥 Blockbuster Potential";
  else if (total >= 110)
    message = "⭐ Strong Hit";
  else if (total >= 90)
    message = "👍 Safe Movie";
  else
    message = "⚠️ Risky Build";

  document.getElementById("result").innerText =
    "Overall Score: " + total + "\n" + message;
}
