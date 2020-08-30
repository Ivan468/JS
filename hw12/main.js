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

    users.forEach(user => {
        const actorElement = document.createElement(`div`);
        actorElement.className = 'actor';
       

        actorElement.innerHTML = `
         <h3> ${user}</h3>
        `;

    
        container.append(actorElement);



         function getActors() {
            return axios.get(user)
              .then((res) => {
              return res.data.name;
            }).catch((err) => {
                console.dir( err);
                return [];
            });
          }

        // let actorOnFilm = axios.get(user);
        // console.log(actorOnFilm);
        console.log(  getActors());
          

    });


}




getActorsOnFilms().then(renderActors);
