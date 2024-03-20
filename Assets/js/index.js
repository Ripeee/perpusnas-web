var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

function Question1() {
	document.querySelector(".answer-1").classList.toggle("hidden");
	document.querySelector(".plus").classList.toggle("hidden");
	document.querySelector(".negative").classList.toggle("hidden");
}
function Question2() {
	document.querySelector(".answer-2").classList.toggle("hidden");
	document.querySelector(".plus2").classList.toggle("hidden");
	document.querySelector(".negative2").classList.toggle("hidden");
}
function Question3() {
	document.querySelector(".answer-3").classList.toggle("hidden");
	document.querySelector(".plus3").classList.toggle("hidden");
	document.querySelector(".negative3").classList.toggle("hidden");
}

document.getElementById("copyright").innerHTML =
	"&copy Copyright " + new Date().getFullYear() + " | ";
