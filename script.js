// Array of tips (demonstrates scope & return values)
const tips = [
  "Drink a glass of water first thing in the morning.",
  "Take a 10-minute walk during your breaks.",
  "Turn off screens 30 minutes before bedtime.",
  "Practice deep breathing to reduce stress.",
  "Include more vegetables in your meals."
];

// Function with parameters & return value
function getRandomTip(tipArray) {
  const randomIndex = Math.floor(Math.random() * tipArray.length);
  return tipArray[randomIndex]; // returns a random string
}

// Function to trigger animation and show the tip
function showRandomTip() {
  const tipBox = document.getElementById("randomTipBox");
  const newTip = getRandomTip(tips);

  // Update text
  tipBox.textContent = newTip;

  // Ensure visible and trigger animation
  tipBox.classList.remove("hidden");
  tipBox.classList.remove("fade-in"); // reset animation
  void tipBox.offsetWidth; // reflow trick
  tipBox.classList.add("fade-in");
}

// Event listener (demonstrates scope & trigger)
document.getElementById("showTipBtn").addEventListener("click", showRandomTip);
