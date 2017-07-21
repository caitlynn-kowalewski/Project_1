

//first, define variables.

var quotes;
var randomnum;
var quoteDisplayed;
var print;

//creat an array of objects that each have a "quote" property and a "source" property

quotes = [

   {quote:"Every man is where he is by the law of his being; the thoughts which he has built into his character have brought him there.",
    source:"- James Allen"},
   
   {quote:"Silence is foolish if we are wise, but wise if we are foolish.",
   source: "- Charles Caleb Colton"
   },

   {quote:"The darkest day in life is the one in which we expect something for nothing.",
    source:"- Allen Shawn"
   },

   {quote:"To live is the rarest thing in the world. Most people exist, that is all.",
    source:"- Oscar Wilde"},

   {quote:"Be yourself; everyone else is already taken.",
    source:"- Oscar Wilde"}

];

//call a function that generates a random number, then takes the random number to grab a quote from the array.  

function getRandomQuote(){
	randomnum = Math.floor(Math.random() * quotes.length);
  return quotes[randomnum];
 };

/*create a function named "printQuote" that calls "getRandomQuote" and stores the returned random quote in a variable. The random quote 
along with its source is then displayed on the website.*/

function printQuote () {
   quoteDisplayed = getRandomQuote();
   print = '<p class ="quote">' + quoteDisplayed.quote + '</p>';
   print += '<p class="source">' + quoteDisplayed.source;
   print += '</p>'
   document.getElementById('quote-box').innerHTML = print;
}


// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

