const runBTN = document.getElementById("calculateBtn");
const dayIn = document.getElementById("dayIn");
const monthIn = document.getElementById("monthIn");
const yearIn = document.getElementById("yearIn");
const yearOut = document.getElementById("yearOut");
const monthOut = document.getElementById("monthOut");
const dayOut = document.getElementById("dayOut");

runBTN.addEventListener("click", () => {
	if (
		yearIn.value >= 1970 &&
		monthIn.value >= 1 &&
		monthIn.value <= 12 &&
		dayIn.value >= 1 &&
		dayIn.value <= 31
	) {
		let d1 = new Date();
		let d2 = new Date(`${yearIn.value}/${monthIn.value}/${dayIn.value}`);
		let diff = Math.abs(d1 - d2);
		let r1 = new Date(d1.setTime(diff));
		yearOut.innerHTML = r1.getFullYear() - 1970;
		monthOut.innerHTML = r1.getMonth();
		dayOut.innerHTML = Math.floor(r1.getDate() * 0.9206399999984449);
	}
});
