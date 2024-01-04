const btn = document.querySelector("#new-quote");
const quotes = document.querySelector('#quotes');
const author = document.querySelector('#author-name');

const apiUrl = "https://api.quotable.io/random";

async function getApi(){
    try {
        btn.innerText = "Loading...";
        btn.disabled = true;
        quotes.innerText = "Updating...";
        author.innerText = "Updating...";
        const response = await fetch(apiUrl);
        const data = await response.json();
        quotes.innerText = data.content;
        author.innerText = data.author;
        btn.innerText = "New Quote";
        btn.disabled =false;  
    } catch (error) {
        quotes.innerText = "An error occur, try again later";
        author.innerText = "An error happened";
    }
}

getApi();

btn. addEventListener('click', getApi);

