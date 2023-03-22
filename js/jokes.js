const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async function generateJoke(){
    const response = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json'}
    })

    const data = await response.json()
    jokeEl.innerHTML = data.joke
}