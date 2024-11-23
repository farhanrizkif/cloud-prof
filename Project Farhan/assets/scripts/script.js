// Function to toggle the display of card content
function toggleCard(card) {
  let cardContent = card.querySelector(".card-content");

  if (cardContent.style.display === "" || cardContent.style.display === "none") {
    cardContent.style.display = "block";
  } else {
    cardContent.style.display = "none";
  }
}

// Typing effect function
const txtElement = ["Hello 👋, I'm Farhan Rizki Fauzi, Bangkit Cloud Computing Cohort 2024 ✨"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function typeEffect() {
  if (count == txtElement.length) {
    count = 0;
  }

  currentTxt = txtElement[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }

  setTimeout(typeEffect, 100);
})();
