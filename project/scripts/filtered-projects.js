document.addEventListener('DOMContentLoaded', function () {

  const projects = [
      {
        projectName: "ADVA",
        location: "Rosario, Santa Fe, Argentina",
        client: "ADVA Optics",
        identifier: 1,
        imageUrl:
        "https://images.pexels.com/photos/11813187/pexels-photo-11813187.jpeg"
      },

      {
        projectName: "ReMax",
        location: "Santa Fe, Santa Fe, Argentina",
        client: "Remax Forum",
        identifier: 2,
        imageUrl:
        "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

      {
        projectName: "INDIV",
        location: "Rosario, Santa Fe, Argentina",
        client: "Indiv Argentina",
        identifier: 1,
        imageUrl:
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

      {
        projectName: "Druetta",
        location: "Gral Rodriguez, Buenos Aires, Argentina",
        client: "Druetta Hnos.",
        identifier: 3,
        imageUrl:
        "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

      {
        projectName: "Navarro",
        location: "Santa Fe, Santa Fe, Argentina",
        client: "Navarro e Hijos",
        identifier: 2,
        imageUrl:
        "https://images.pexels.com/photos/7358/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

      {
        projectName: "Newell's",
        location: "Rosario, Santa Fe, Argentina",
        client: "Newell's Old Boys",
        identifier: 1,
        imageUrl:
        "https://images.pexels.com/photos/69432/pexels-photo-69432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },

    ];

  const mainContainer = document.querySelector('main');

  function displayProjects (filteredProjects) {

    mainContainer.innerHTML = '';
    
    filteredProjects.forEach(project => {

        const card = document.createElement('div');
        const name = document.createElement('h3');
        const list = document.createElement('ul');
        const location = document.createElement('li');
        const client = document.createElement('li');
        const image = document.createElement('img');

        name.textContent = project.projectName;
        location.textContent = `Location: ${project.location}`;      
        client.textContent = `Client: ${project.client}`;           
        image.src = project.imageUrl;
        image.alt = `${project.projectName} Home Page`;
        image.loading = 'lazy';      

        list.appendChild(location);
        list.appendChild(client);

        card.appendChild(name);
        card.appendChild(list);
        card.appendChild(image);

        card.classList.add('project-card');

        mainContainer.appendChild(card);

    });

  }

  displayProjects(projects);

  document.querySelector('#navRos').addEventListener('click', () => displayProjects(projects.filter(project => project.identifier === 1)));
  document.querySelector('#navSf').addEventListener('click', () => displayProjects(projects.filter(project => project.identifier === 2)));
  document.querySelector('#navBsAs').addEventListener('click', () => displayProjects(projects.filter(project => project.identifier === 3)));
   
 /* Another option for filter 
  const newButton = document.querySelector("#navNew");
  newButton.addEventListener('click', () => {
    displayTemples(temples.filter(temple => temple.dedicated.getFullYear() > 2000));
  });*/  
  
});



