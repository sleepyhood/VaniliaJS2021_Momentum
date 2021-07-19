const quotes = [
  {
    quote: "Without continuous personal development, you are now all that you will ever become and hell starts when the person you are meets the person you could have been",
    author: "Eli cohen"
  },
  {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso"
  },
  {
    quote: "We need men who can dream of things that never were.",
    author: "John F. Kennedy"
  },
  {
    quote: "Write injuries in dust, benefits in marble.",
    author: "Benjamin Franklin"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;