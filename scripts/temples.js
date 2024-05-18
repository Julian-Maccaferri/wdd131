document.addEventListener('DOMContentLoaded', function () {
    // select the DOM elements for output
    const year = document.querySelector("#currentYear");
    const lastModified = document.querySelector("#lastModified");

    // use the date object
    const today = new Date();
    const oLastModif = new Date(document.lastModified);

    year.textContent = today.getFullYear();
    lastModified.textContent = `Last Modification: ${oLastModif.toDateString()} ${oLastModif.toLocaleTimeString()}`;

    // Make hamburguer menu function
    const hamburger = document.getElementById('hamburger');
    const container = document.querySelector('header');

    hamburger.addEventListener('click', function () {
        container.classList.toggle('menu-active');
        hamburger.classList.toggle('active');
    });
});

