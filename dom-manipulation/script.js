const quotes = JSON.parse(localStorage.getItem("quotes")) || [
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

window.addEventListener("DOMContentLoaded", () => {
  const lastQuote = sessionStorage.getItem("lastQuote");
  if (lastQuote) {
    const parsed = JSON.parse(lastQuote);
    quoteDisplay.innerHTML = `Quote: ${parsed.text} <br/>
     Category: ${parsed.category}`;
  }
}); // This loads the last viewed quote from sessionStorage if it exists

const showRandomQuote = () => {
  showQuotesBtn.addEventListener("click", () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quoteDisplay.innerHTML = `Quote: ${randomQuote.text} <br/>
     Category: ${randomQuote.category}`;

    sessionStorage.setItem("lastQuote", JSON.stringify(randomQuote));
  });
}; // Displays the random qoute

showRandomQuote();

const createAddQuoteForm = () => {}; // Has to create form

const saveQuotes = () => {
  localStorage.setItem("quotes", JSON.stringify(quotes));
};

const addQuotes = () => {
  const textInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = textInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote);

    // localStorage.setItem("quotes", JSON.stringify(quotes));

    saveQuotes();

    quoteDisplay.innerText = `Quote: ${newQuote.text} \nCategory: ${newQuote.category}`;
    sessionStorage.setItem("lastQuote", JSON.stringify(newQuote));

    alert("Quote Added!");

    textInput.value = "";
    categoryInput.value = "";
  } else {
    alert("Please enter both the quote and category");
  }

  console.log(quotes);
}; // Adds a new qoute

const importFromJsonFile = (event) => {
  const fileReader = new FileReader();
  fileReader.onload = (event) => {
    try {
      const importedQuotes = JSON.parse(event.target.result);
      if (Array.isArray(importedQuotes)) {
        quotes.push(...importedQuotes);
        saveQuotes();
        alert(`Quotes imported successfully!`);
      } else {
        alert(`Invalid file format: JSON should be an array of quotes.`);
      }
    } catch (err) {
      alert(`Failed to parse JSON file. Please check the file format.`);
    }
  };
  fileReader.readAsText(event.target.files[0]);
};

const exportToJsonFile = () => {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "quotes_export.json";

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  URL.revokeObjectURL(url);
}; // Exports quotes to JSON file

document
  .getElementById("exportJSON")
  .addEventListener("click", exportToJsonFile);
