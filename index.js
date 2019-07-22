
  const form = document.querySelector('#joke-form');
  const jokeList = document.querySelector('#joke-list');
  const newJokeLi = document.createElement('li');
  const input = document.querySelector('#name-input');
  // let joke = "";

  function fetchJoke(username){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => newJokeParser(username, data.joke));
    // .then(jokeData => console.log(jokeData));
  }

  function newJokeParser(username, joke) {
    newJokeLi.innerHTML = `
    <span class="username">${username} says: ${joke}</span>
    `
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = input.value;
    if(username === "") return;
    fetchJoke(username);
    jokeList.appendChild(newJokeLi);
  });
