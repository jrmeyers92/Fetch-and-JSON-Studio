// TODO: add code here
window.addEventListener('load', async () => {


  let container = document.getElementById('container');

  const fetchAstros = async () => {
    let astros = await fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then(response => response.json())
    .then(data => data);

    return astros;
  }

  let astros = await fetchAstros();
  console.log(astros)

  
  astros.map(astro => {
    container.innerHTML += `<div class="astronaut">
    <div class="bio">
       <h3>${astro.firstName} ${astro.lastName}</h3>
       <ul>
          <li>Hours in space: ${astro.hoursInSpace}</li>
          <li>Active: ${astro.active}</li>
          <li>Skills: ${astro.skills.map(skill => skill)}</li>
       </ul>
    </div>
    <img class="avatar" src="${astro.picture}">
 </div>`





  })

  






})