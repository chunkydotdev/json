async function getJoke () {
  console.log('click')
  const response = await fetch('https://api.chucknorris.io/jokes/random')
  const jokeJson = await response.json()
  console.log(jokeJson)
  const jokeBox = document.getElementById('joke-container')
  jokeBox.textContent = jokeJson.value
}
