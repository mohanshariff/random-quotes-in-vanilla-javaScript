// selecting the necessary elements
const generateBtn = document.querySelector(".btn")
const quote= document.querySelector(".quote")
const author= document.querySelector(".author")


// creating the  async function to fetch the API
async function  randomQuote(){
      // adding the generateBtn a loading animation
      generateBtn.textContent = "loading..."
      generateBtn.classList.add("loading")
      // fetching the api
      const  url = "https://api.quotable.io/random"
      const response = await fetch(url);
      const data = await response.json();
      
      quote.innerHTML = `"${data.content}"`
      author.innerHTML = `-${data.author}`
      
      // removing the generateBtn a loading animation
      generateBtn.classList.remove("loading")
      generateBtn.textContent = "new quote"
}

// adding event listner to the generateBtn and referencing the randomQuote function
generateBtn.addEventListener("click", randomQuote);
