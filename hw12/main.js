const BASE = `https://swapi.dev/api/`;

function getActorsOnFilms() {
  return axios.get(BASE + `films/2/`)
    .then((res) => {
    return res.data.characters;
  }).catch((err) => {
      console.dir( err);
      return [];
  });
}

// axios.get(`http://swapi.dev/api/people/1/`);

function renderActors(users) {

    console.log(users);
    const container = document.querySelector(`.actors`);

    users.forEach( async user => {
        const userResult = await axios.get(user);

        const actorElement = document.createElement(`div`);
        actorElement.className = 'actor';
       
        actorElement.innerHTML = `
         <h3> ${ userResult.data.name  }</h3>
         <p> <b>Birth year</b>  ${  userResult.data.birth_year  }</p>
        `;

        container.append(actorElement);

        
    });


}




getActorsOnFilms().then(renderActors);
