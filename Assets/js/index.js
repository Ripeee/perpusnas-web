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


	const dataResensi = [
		{
			id: 1,
			image:
				"https://s3-alpha-sig.figma.com/img/bf5f/e5cc/9fd480e2c313a2be3dfbadf030139c1e?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zy66U~DgDgk33EgSvcA-rw4l4c8KNQ8loXLM0Ba8rEo6~dNORFNoqS2I7d1S6MHOQl8iB-LDULOpPyQGuH3-QWFYfoQ2wovnt0B-0eeZ6qCNZAhN7i4tMZRsUIdTvlb~QJvwB952z7XnUJ7E-IjfxOi6398SMhGoFeeVkRVUiqa8NQjEKQ69kZZLPvVKK7RHKRsA620~2U~SyVdanEtrWtxRrD7YinPDsR~H6Dnx3Fl-hjVZi4WfFfmyAz3hxFepYfCnGC0BJvtWz0UzJ8BU2OwCrA1aiFaCWR7v2-JkJtJPNnhqKvg4kx2L~zKOT4UpJB11TG3H9uCGSftZ~TnAFw__",
			title: "Dilan dia adalah Dilanku tahun 1990",
			category: "Novel Fiksi",
			created_by: "Pidi Baiq",
			isbn: "9786027870413",
			year: 2014,
			uploaded_by: "Azka Faeyza. P",
			uploaded_from: "SMP Negeri 7 Jember",
		},
	];