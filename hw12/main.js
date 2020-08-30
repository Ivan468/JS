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


function getPlanets() {
  return axios.get(BASE + `planets/`)
    .then((res) => {
    return res;
  }).catch((err) => {
      console.dir( err);
      return [];
  });
}
let currentPage = 1;
function btnNext() {
  
  currentPage = ++currentPage;
  return axios.get(BASE + `planets/?page=${currentPage}`)
    .then((res) => {
    return res;
  }).catch((err) => {
      console.dir( err);
      return [];
  });
}

function btnPrew() {
  
  currentPage = --currentPage;
  return axios.get(BASE + `planets/?page=${currentPage}`)
    .then((res) => {
    return res;
  }).catch((err) => {
      console.dir( err);
      return [];
  });
}

// axios.get(`http://swapi.dev/api/people/1/`);
// axios.get(`http://swapi.dev/api/planets/`); data.next

function renderActors(users) {
    // console.log(users);
    const container = document.querySelector(`.actors`);
    container.innerHTML =` `;
    users.forEach( async user => {
      user = user.replace(/^http:\/\//i, 'https://');

        const userResult = await axios.get(user);
        
        const actorElement = document.createElement(`div`);
        actorElement.className = 'actor';
       
        actorElement.innerHTML = `
         <h2> ${ userResult.data.name  }</h2>
         <p> <b>Birth year</b>  ${  userResult.data.birth_year  }</p>
        `;

        container.append(actorElement);

        
    });
}
function renderPlanets(users) {
   console.log(users.data.results);

   users = users.data.results;
  const container = document.querySelector(`.actors`);
  container.innerHTML =` `;
  users.forEach( async user => {
    

      // const userResult = await axios.get(user);
      
      const actorElement = document.createElement(`div`);
      actorElement.className = 'actor';
     
      actorElement.innerHTML = `
       <h2> ${ user.name  }</h2>
      `;

      container.append(actorElement);

      
  });
}
