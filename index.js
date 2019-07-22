
  const form = document.querySelector('#joke-form');
  const jokeList = document.querySelector('#joke-list');
  const input = document.querySelector('#name-input');

  function fetchJoke(username, newJokeLi){
    fetch('https://icanhazdadjoke.com/', {
      headers: {
        "Accept": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => newJokeParser(username, data.joke, newJokeLi));
    // .then(jokeData => console.log(jokeData));
  }

  function newJokeParser(username, joke, newJokeLi) {
    newJokeLi.innerHTML += ` <span class="username">${username} says: </span>${joke}`;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = input.value;
    if(username === "") return;
    let newJokeLi = document.createElement('li');
    fetchJoke(username, newJokeLi);
    jokeList.append(newJokeLi);
  });
