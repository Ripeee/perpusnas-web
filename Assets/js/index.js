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

function HamburgerGrup() {
	document.querySelector(".hamburger").classList.toggle("hidden");
	document.querySelector(".hamburger").classList.toggle("opcity-0");
	document.querySelector(".close").classList.toggle("hidden");
	document.querySelector(".close").classList.toggle("opacity-0");
	document.querySelector(".group-list").classList.toggle("hidden");
}

function ResensiDropdown() {
	document.querySelector(".dropdown-icon").classList.toggle("rotate-180");
	document.querySelector(".list-dropdown").classList.toggle("hidden");
}

document.querySelector(".beranda").addEventListener("click", () => {
	document.querySelector(".beranda").classList.add("bg-green-600");
 document.querySelector(".beranda").classList.add("text-white");
	document.querySelector(".beranda").classList.remove("text-gray-600");
	document.querySelector(".resensi").classList.add("text-gray-600");
	document.querySelector(".resensi").classList.remove("text-white");
 document.querySelector(".resensi").classList.remove("bg-green-600");
	document.querySelector(".dropdown-icon").classList.add("rotate-0");
	document.querySelector(".informasi").classList.add("text-gray-600");
	document.querySelector(".informasi").classList.remove("hover:text-white");
	document.querySelector(".informasi").classList.remove("bg-green-600");
	document.querySelector(".list-dropdown").classList.add("hidden");
	document.querySelector(".list-dropdown2").classList.add("hidden");
});
document.querySelector(".resensi").addEventListener("click", () => {
 document.querySelector(".beranda").classList.remove("bg-green-600");
	document.querySelector(".beranda").classList.remove("text-white");
	document.querySelector(".beranda").classList.add("text-gray-600");
	document.querySelector(".resensi").classList.add("bg-green-600");
	document.querySelector(".resensi").classList.remove("text-gray-600");
	document.querySelector(".resensi").classList.add("text-white");
	document.querySelector(".resensi").classList.add("bg-green-600");
	document.querySelector(".resensi").classList.add("text-white");
});
document.querySelector(".beranda").addEventListener("click", () => {
	document.querySelector(".beranda").classList.add("bg-green-600");
});
document.querySelector(".beranda").addEventListener("click", () => {
	document.querySelector(".beranda").classList.add("bg-green-600");
});
document.querySelector(".beranda").addEventListener("click", () => {
	document.querySelector(".beranda").classList.add("bg-green-600");
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
