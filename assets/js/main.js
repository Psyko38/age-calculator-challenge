const runBTN = document.getElementById("calculateBtn");
const dayIn = document.getElementById("dayIn");
const monthIn = document.getElementById("monthIn");
const yearIn = document.getElementById("yearIn");
const yearOut = document.getElementById("yearOut");
const monthOut = document.getElementById("monthOut");
const dayOut = document.getElementById("dayOut");

let ActualDate = "";
runBTN.addEventListener("click", () => {
	if (
		yearIn.value >= 1970 &&
		monthIn.value >= 1 &&
		monthIn.value <= 12 &&
		dayIn.value >= 1 &&
		dayIn.value <= 31
	) {
		let DateNow = new Date();
		let d1 = new Date();
		let d2 = new Date(`${yearIn.value}/${monthIn.value}/${dayIn.value}`);
		let diff = Math.abs(d1 - d2);
		let r1 = new Date(d1.setTime(diff));
		let Year = r1.getFullYear() - 1970;
		let Month = r1.getMonth();
		let Day = r1.getDay();
		yearOut.innerHTML = Year;
		monthOut.innerHTML = Month;
		dayOut.innerHTML = Day;
	}
});
