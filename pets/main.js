const BASE = `https://run.mocky.io/v3/4b20aa37-9e1a-4155-82e0-386d171cb1f0`;

function getActorsOnFilms() {
  return axios
    .get(BASE)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.dir(err);
      return [];
    });
}

function getPlanets() {
  return axios
    .get(BASE)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.dir(err);
      return [];
    });
}



// axios.get(`http://swapi.dev/api/people/1/`);
// axios.get(`http://swapi.dev/api/planets/`); data.next

function renderActors(users) {
  //  console.log(users);
  const container = document.querySelector(`.actors`);
  container.innerHTML = ` `;
  users.forEach(async (user) => {
    user = user.replace(/^http:\/\//i, "https://");

    const userResult = await axios.get(user);

    const actorElement = document.createElement(`div`);
    actorElement.className = "actor";

    let gender = userResult.data.gender;

    if (gender === `male`) {
      gender = `<img src="./ico/gender-fluid.svg" alt="male">`;
    }
    if (gender === `female`) {
      gender = `<img  src="./ico/female.svg" alt="female">`;
    }
    if (gender === `n/a`) {
      gender = `<img  src="./ico/r2d2.svg" alt="droid">`;
    }
    if (gender === `none`) {
      gender = `<img  src="./ico/r2d2.svg" alt="droid">`;
    }

    const name = userResult.data.name;

    actorElement.innerHTML = ` <div class = "${name}">
         <h2> ${userResult.data.title}</h2>
         <p> <b>Birth year</b>  ${userResult.data.birth_year}</p>
         <p> <b>Gender</b>  ${gender}</p></div>
        `;

    container.append(actorElement);
  });
}
function renderPlanets(users) {
  console.log(users.data.results);

  users = users.data.results;
  const container = document.querySelector(`.actors`);
  container.innerHTML = ` `;
  users.forEach(async (user) => {
    if (user.title == `unknown`) {
      return;
    }

    // const userResult = await axios.get(user);

    const actorElement = document.createElement(`div`);
    actorElement.className = "actor";

    let diam = user.description;

    if (diam === `unknown`) {
      diam = `невідомо`;
    }

    actorElement.innerHTML = `
       <h2> ${user.title}</h2>
       <p><b>Diameter:</b> ${description}</p>
       <p><b>Population:</b> ${user.population}</p>
   
      `;

    container.append(actorElement);
  });
}