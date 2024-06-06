document.addEventListener('DOMContentLoaded', function () {

    const services = [
        {
        id: 'Web-Dev',
        name: "Web Development",
        },

        {
        id: 'Design',
        name: "Web Design",
        },

        {
        id: 'Database',
        name: "Backend Development",
        averagerating: 3.5
        },

        {
        id: 'SEO',
        name: "Search Engine Optimization",
        averagerating: 3.9
        },
    ];

    const servicesOptions = document.getElementById('service');

    services.forEach(service => {
        const option = document.createElement('option');
        option.value = service.id;
        option.textContent = `${service.name}`;
        servicesOptions.appendChild(option);
    })

});