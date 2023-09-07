function updateTime() {
	let theBronxElement = document.querySelector("#the-bronx");
	let theBronxDateElement = theBronxElement.querySelector(".date");
	let theBronxTimeElement = theBronxElement.querySelector(".time");
	let theBronxTime = moment().tz("America/New_York");

	theBronxDateElement.innerHTML = theBronxTime.format("ddd MMMM Do");
	theBronxTimeElement.innerHTML = theBronxTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
