document.addEventListener('DOMContentLoaded', function () {

  // Make hamburguer menu function
  const hamburger = document.getElementById('hamburger');
  const container = document.querySelector('header');

  hamburger.addEventListener('click', function () {
    container.classList.toggle('menu-active');
    hamburger.classList.toggle('active');    
  });

  const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },

      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },

      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },

      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },

      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },

      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },

      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      // Add more temple objects here...
      {
          templeName: "Buenos Aires Argentina",
          location: "Buenos Aires, Argentina",
          dedicated: "1986, January, 17",
          area: 30659,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-2970.jpg"
        },

        {
          templeName: "Bahia Blanca Argentina",
          location: "Bahia Blanca, Argentina",
          dedicated: "2022, April, 9",
          area: 19000,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-24944.jpg"
        },

        {
          templeName: "Rio de Janeiro Brazil",
          location: "Rio de Janeiro, Brazil",
          dedicated: "2022, May, 8",
          area: 29966,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
        },

    ];

  const mainContainer = document.querySelector('main');

  function displayTemples (filteredTemples) {

    mainContainer.innerHTML = '';
    
    filteredTemples.forEach(temple => {

        const card = document.createElement('div');
        const name = document.createElement('h2');
        const list = document.createElement('ul');
        const location = document.createElement('li');
        const dedicated = document.createElement('li');
        const area = document.createElement('li');
        const image = document.createElement('img');

        name.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;      
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;      
        area.textContent = `Area: ${temple.area} Sqr. Ft`;      
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = 'lazy';      

        list.appendChild(location);
        list.appendChild(dedicated);
        list.appendChild(area);

        card.appendChild(name);
        card.appendChild(list);
        card.appendChild(image);

        card.classList.add('temple-card');

        mainContainer.appendChild(card);

    });

  }

  function parseDedicatedDate(dedicated) {
    const [year, month, day] = dedicated.split(', ');
    return new Date(`${month} ${day}, ${year}`);
  }

  displayTemples(temples);

  document.querySelector('#navOld').addEventListener('click', () => displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900)));
  document.querySelector('#navNew').addEventListener('click', () => displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000)));
  document.querySelector('#navLarge').addEventListener('click', () => displayTemples(temples.filter(temple => temple.area > 90000)));
  document.querySelector('#navSmall').addEventListener('click', () => displayTemples(temples.filter(temple => temple.area < 10000)));
  document.querySelector('#navHome').addEventListener('click', () => displayTemples(temples));
   
 /* Another option for filter 
  const newButton = document.querySelector("#navNew");
  newButton.addEventListener('click', () => {
    displayTemples(temples.filter(temple => temple.dedicated.getFullYear() > 2000));
  });*/  
  
});



