const apikey = "API-KEY";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(apiurl);

        // Handle invalid city (like response.status 404)
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    } catch (error) {
        alert(error.message); // Show an alert if city is not found or network fails
    }
}

searchbtn.addEventListener("click", () => {
    const city = searchbox.value.trim();
    if (city) {
        checkweather(city);
    } else {
        alert("Please enter a city name");
    }
});


