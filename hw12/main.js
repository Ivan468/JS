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
  if (currentPage >5) return;
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
  if (currentPage <2) return;
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
    //  console.log(users);
    const container = document.querySelector(`.actors`);
    container.innerHTML =` `;
    users.forEach( async user => {
      user = user.replace(/^http:\/\//i, 'https://');


        const userResult = await axios.get(user);
        
        const actorElement = document.createElement(`div`);
        actorElement.className = 'actor';
       
        let gender = userResult.data.gender;

        if (gender === `male`) { gender = `<img src="./ico/gender-fluid.svg" alt="male">` } ;
        if (gender === `female`) {  gender = `<img  src="./ico/female.svg" alt="female">`   } ;
        if (gender === `n/a`   )  { gender = `<img  src="./ico/r2d2.svg" alt="droid">`   };
        if (gender === `none`) { gender = `<img  src="./ico/r2d2.svg" alt="droid">`   };

        const name = userResult.data.name;
        


        actorElement.innerHTML = ` <div class = "${name}">
         <h2> ${ userResult.data.name  }</h2>
         <p> <b>Birth year</b>  ${  userResult.data.birth_year  }</p>
         <p> <b>Gender</b>  ${ gender }</p></div>
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
      if (user.name == `unknown`) {return};

      // const userResult = await axios.get(user);
      
      const actorElement = document.createElement(`div`);
      actorElement.className = 'actor';
     
      let diam = user.diameter;

      if (diam === `unknown`) { diam = `невідомо`};

      actorElement.innerHTML = `
       <h2> ${ user.name  }</h2>
       <p><b>Diameter:</b> ${ diam  }</p>
       <p><b>Population:</b> ${ user.population  }</p>
       <p><b>Orbital period:</b> ${ user.orbital_period }</p>  
       <p><b>Rotation period:</b> ${ user.rotation_period}</p> 
      `;

      container.append(actorElement);

      
  });
}
[
  {
    id: 8387,
    title: "Doggo dog",
    description:
      "A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.",
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png",
    created: "7/24/2020",
    advID: "2a9b7dd6-e859-4537-8cd5-32b1f8478e07",
  },
  {
    id: 1190,
    title: "Sherlock Bones",
    description:
      " Sweet, friendly, well-socialized, affectionate. Loves other dogs and is very active and playful with other dogs.",
    image:
      "https://s3.amazonaws.com/filestore.rescuegroups.org/3304/pictures/animals/15445/15445736/71403745_500x472.jpg",
    created: "7/12/2020",
    advID: "5a5d18ba-76f6-4513-8d10-9f89ed9efd47",
  },
  {
    id: 7808,
    title: "Mary Puppins",
    description:
      "Friendly, well-socialized, gentle. Sadie is recommended as an only dog.",
    image:
      "https://s3.amazonaws.com/filestore.rescuegroups.org/3304/pictures/animals/16309/16309823/75743526_480x600.jpg",
    created: "10/12/2020",
    advID: "15717839-f7ef-46d2-a0f3-dbf4ea880513",
  },
  {
    id: 9411,
    title: "Bark Twain",
    description:
      "He is very sweet.  He is good in a car, crate and has been good with other dogs. He s decent on a leash and he will make an active family a wonderful companion.",
    image:
      "https://s3.amazonaws.com/filestore.rescuegroups.org/8629/pictures/animals/15884/15884230/73592261_500x571.jpg",
    created: "10/12/2020",
    advID: "2a9b7dd6-e859-4537-8cd5-32b1f8478e07",
  },
  {
    id: 1190,
    title: "Sherlock Bones",
    description:
      " Sweet, friendly, well-socialized, affectionate. Loves other dogs and is very active and playful with other dogs.",
    image:
      "https://s3.amazonaws.com/filestore.rescuegroups.org/3304/pictures/animals/15445/15445736/71403745_500x472.jpg",
    created: "7/12/2020",
    advID: "5a5d18ba-76f6-4513-8d10-9f89ed9efd47",
  },
  {
    id: 9890,
    title: "Indiana Bones",
    description:
      "This girl is dog social, a little shy at the get-go but definitely people social, and will do well with a family with another canine friend. ",
    image:
      "https://s3.amazonaws.com/filestore.rescuegroups.org/7602/pictures/animals/16245/16245544/76440310_500x743.jpg",
    created: "10/02/2020",
    advID: "15717839-f7ef-46d2-a0f3-dbf4ea880513",
  },
  {
    id: 6476,
    title: "Woofgang Puck",
    description:
      "Woofgang Puck is a happy little bundle of energy. It’s rare that you will see him without a toy in his mouth and even more rare that you will see him not wagging his tail.",
    image:
      "http://3.bp.blogspot.com/-38wj4aH2mdY/WbFeiuFRtsI/AAAAAAAAChw/Q0ZbAi5gdykeDYglIUpfhzDuN3b_r-BTQCK4BGAYYCw/s1600/P9060503.jpg",
    created: "8/02/2020",
    advID: "15717839-f7ef-46d2-a0f3-dbf4ea880513",
  },
  {
    id: 7417,
    title: "Orville Redenbarker",
    description:
      "He is very active and playful and reminds me of mini border collie. He is house trained when taken out regularly.",
    image:
      "http://1.bp.blogspot.com/-Ofjw8xnt7A8/WPT1md3NtCI/AAAAAAAACG0/O9Essi7cXiEG9T9C2eAm_T8DWIsnsiOZwCK4B/s1600/outdoorYoggi.jpeg",
    created: "17/12/2020",
    advID: "61029e41-93e4-4143-b316-c7ccf85b66d1",
  },
];