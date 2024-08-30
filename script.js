/* .js files add interaction to your website */

/* Fact generator */
var factList = [
  "There are about 75 million factory workers worldwide and less than 2% of them make a living wage (Source: GWU Law).",
  "Garment workers are often forced to work 14 to 16 hours a day, 7 days a week (Source: sustainyourstyle.org).",
  "Every year, 80 billion clothing pieces are bought, that’s a 400% increase compared to 20 years ago (Source: GWU Law).",
  "Many fast fashion companies recruit workers in Asian countries like Bangladesh, India, China, Vietnam, and the Philippines, with the majority of their workers being women (Source: Goodonyou).",
  "The collapse of Rana Plaza of 2013, a commercial building in Bangladesh, killed 1,134 of their garment workers and left thousands of others injured because of the owners’ disregard of the building’s structural cracks (Source: cleanclothescampaign)."
];

var fact = document.getElementById("fact");
var factButton = document.getElementById("myBtn");
var count = 0;

factButton.addEventListener("click", displayFact);

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}