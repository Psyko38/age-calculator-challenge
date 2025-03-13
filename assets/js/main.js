const runBTN = document.getElementById("calculateBtn");
const dayIn = document.getElementById("dayIn");
const monthIn = document.getElementById("monthIn");
const yearIn = document.getElementById("yearIn");

let ActualDate = "";
runBTN.addEventListener("click", () => {
	ActualDate = new Date();
	HolDate = new Date("1018-09-22T00:00:00");
	let aa = ActualDate.getTime() - HolDate.getTime();
	console.log(HolDate.setTime(aa));
});
