const quotes = [
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

const showQuotesBtn = document.getElementById("newQuote");
const quoteDisplay = document.getElementById("quoteDisplay");

const showRandomQuote = () => {
  showQuotesBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteDisplay.innerHTML = `Quote: ${randomQuote.text} <br/>
     Category: ${randomQuote.category}`;
  });
}; // Displays the random qoute

showRandomQuote();

const createAddQuoteForm = () => {}; // Has to create form

const addQuotes = () => {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote);

    quoteDisplay.innerText = `Quote: ${newQuote.text} \nCategory: ${newQuote.category}`;

    alert("Quote Added!");

    textInput.value = "";
    categoryInput.value = "";
  } else {
    alert("Please enter both the quote and category");
  }

  console.log(quotes);
}; // Adds a new qoute
