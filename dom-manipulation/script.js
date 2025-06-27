const qoutes = [
  {
    text: "The journey doesn’t begin when you're ready—it begins when you start.",
    category: "Motivation",
  },
  {
    text: "Growth starts the moment you choose discipline over comfort.",
    category: "Self-Improvement",
  },
  {
    text: "You don’t have to be loud to be heard—clarity carries further than noise.",
    category: "Wisdom",
  },
  {
    text: "True creativity lies in showing the world what only you can see.",
    category: "Creativity",
  },
  {
    text: "Perfection is the enemy of momentum—choose progress every time.",
    category: "Productivity",
  },
];

const showQuoteBtn = document.getElementById("newQuote");
const quoteDisplay = document.getElementById("quoteDisplay");

const showRandomQuote = () => {
  showQuoteBtn.addEventListener("click", () => {
    const randomQoute = qoutes[Math.floor(Math.random() * qoutes.length)];

    quoteDisplay.innerText = `Quote: ${randomQoute.text}
     Category: ${randomQoute.category}`;
  });
}; // Displays the random qoute

showRandomQuote();

const createAddQuoteForm = () => {}; // Displays a pop up that allows users to add a qoute

const addQuotes = () => {}; // Adds the qoute
