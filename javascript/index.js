function updateTime() {
	// The Bronx
	let theBronxElement = document.querySelector("#the-bronx");
	if (theBronxElement) {
		let theBronxDateElement = theBronxElement.querySelector(".date");
		let theBronxTimeElement = theBronxElement.querySelector(".time");
		let theBronxTime = moment().tz("America/New_York");

		theBronxDateElement.innerHTML = theBronxTime.format("ddd MMMM Do");
		theBronxTimeElement.innerHTML = theBronxTime.format("h:mm:ss [<small>]A[</small>]");
	}

	// Girona
	let gironaElement = document.querySelector("#girona");
	if (gironaElement) {
		let gironaDateElement = gironaElement.querySelector(".date");
		let gironaTimeElement = gironaElement.querySelector(".time");
		let gironaTime = moment().tz("Europe/Madrid");

		gironaDateElement.innerHTML = gironaTime.format("ddd MMMM Do");
		gironaTimeElement.innerHTML = gironaTime.format("h:mm:ss [<small>]A[</small>]");
	}

	// Los Angeles
	let losAngelesElement = document.querySelector("#los-angeles");
	if (losAngelesElement) {
		let losAngelesDateElement = losAngelesElement.querySelector(".date");
		let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
		let losAngelesTime = moment().tz("America/Los_Angeles");

		losAngelesDateElement.innerHTML = losAngelesTime.format("ddd MMMM Do");
		lostAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
	}
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
