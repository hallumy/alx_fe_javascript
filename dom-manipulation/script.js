// Declaration of quotes array
let quotes = [];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");
const newQuoteTextInput = document.getElementById("newQuoteText");
const newQuoteCategoryInput = document.getElementById("newQuoteCategory");

// Function to show a random quote from any category
function showRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<em>No quotes available.</em>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = `<blockquote>"${randomQuote.text}"</blockquote><p><strong>— ${randomQuote.category}</strong></p>`;
}

// Function to add a new quote
function addQuote() {
  const quoteText = newQuoteTextInput.value.trim();
  const quoteCategory = newQuoteCategoryInput.value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please enter both quote text and category.");
    return;
  }

  quotes.push({ text: quoteText, category: quoteCategory });

  // Clear input fields
  newQuoteTextInput.value = "";
  newQuoteCategoryInput.value = "";

  alert("New quote added successfully!");
}

// Attach event listener to button
newQuoteButton.addEventListener("click", showRandomQuote);
