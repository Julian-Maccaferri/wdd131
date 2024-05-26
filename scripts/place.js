document.addEventListener('DOMContentLoaded', function () {
    // select the DOM elements for output
    const year = document.querySelector("#currentYear");
    const lastModified = document.querySelector("#lastModified");

    // use the date object
    const today = new Date();
    const oLastModif = new Date(document.lastModified);

    year.textContent = today.getFullYear();
    lastModified.textContent = `Last Modification: ${oLastModif.toDateString()} ${oLastModif.toLocaleTimeString()}`;
});

// windchill factor

const temperature = 14;
const windSpeed = 3;

function calculateWindChill(temperature, windSpeed) {

    // Check if the temperature and wind speed are within the valid range for the formula
    if (temperature <= 10 || windSpeed > 4.8) {
        return "N/A";
    }
        // Calculate wind chill using the formula
        const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));

        return windChill.toFixed(2); // Return the wind chill rounded to two decimal places
}

const windChillElement = document.getElementById('windChill');
windChillElement.innerHTML = `<b>Wind Chill:</b> ${calculateWindChill(temperature, windSpeed)}°C`;
