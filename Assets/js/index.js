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

CKEDITOR.ClassicEditor.create(document.getElementById("isiBuku"), {
	options: {
		type: 'textarea'
	},
	toolbar: {
		items: [
			"findAndReplace",
			"selectAll",
			"|",
			"heading",
			"|",
			"bold",
			"italic",
			"strikethrough",
			"underline",
			"code",
			"subscript",
			"superscript",
			"removeFormat",
			"|",
			"bulletedList",
			"numberedList",
			"todoList",
			"|",
			"undo",
			"redo",
			"-",
			"fontSize",
			"fontFamily",
			"fontColor",
			"fontBackgroundColor",
			"highlight",
			"|",
			"alignment",
			"|",
			"link",
			"uploadImage",
			"blockQuote",
			"insertTable",
			"mediaEmbed",
			"|",
			"specialCharacters",
			"horizontalLine",
			"pageBreak",
			"|",
			"sourceEditing",
		],
		shouldNotGroupWhenFull: true,
	},
	list: {
		properties: {
			styles: true,
			startIndex: true,
			reversed: true,
		},
	},
	heading: {
		options: [
			{ model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
			{
				model: "heading1",
				view: "h1",
				title: "Heading 1",
				class: "ck-heading_heading1",
			},
			{
				model: "heading2",
				view: "h2",
				title: "Heading 2",
				class: "ck-heading_heading2",
			},
			{
				model: "heading3",
				view: "h3",
				title: "Heading 3",
				class: "ck-heading_heading3",
			},
			{
				model: "heading4",
				view: "h4",
				title: "Heading 4",
				class: "ck-heading_heading4",
			},
			{
				model: "heading5",
				view: "h5",
				title: "Heading 5",
				class: "ck-heading_heading5",
			},
			{
				model: "heading6",
				view: "h6",
				title: "Heading 6",
				class: "ck-heading_heading6",
			},
		],
	},
	placeholder: "Start typing here...",
	fontFamily: {
		options: [
			"default",
			"Arial, Helvetica, sans-serif",
			"Courier New, Courier, monospace",
			"Georgia, serif",
			"Lucida Sans Unicode, Lucida Grande, sans-serif",
			"Tahoma, Geneva, sans-serif",
			"Times New Roman, Times, serif",
			"Trebuchet MS, Helvetica, sans-serif",
			"Verdana, Geneva, sans-serif",
		],
		supportAllValues: true,
	},
	fontSize: {
		options: [10, 12, 14, "default", 18, 20, 22],
		supportAllValues: true,
	},
	htmlSupport: {
		allow: [
			{
				name: /.*/,
				attributes: true,
				classes: true,
				styles: true,
			},
		],
	},
	htmlEmbed: {
		showPreviews: true,
	},
	link: {
		decorators: {
			addTargetToExternalLinks: true,
			defaultProtocol: "https://",
			toggleDownloadable: {
				mode: "manual",
				label: "Downloadable",
				attributes: {
					download: "file",
				},
			},
		},
	},

	mention: {
		feeds: [
			{
				marker: "@",
				feed: [
					"@apple",
					"@bears",
					"@brownie",
					"@cake",
					"@cake",
					"@candy",
					"@canes",
					"@chocolate",
					"@cookie",
					"@cotton",
					"@cream",
					"@cupcake",
					"@danish",
					"@donut",
					"@dragée",
					"@fruitcake",
					"@gingerbread",
					"@gummi",
					"@ice",
					"@jelly-o",
					"@liquorice",
					"@macaroon",
					"@marzipan",
					"@oat",
					"@pie",
					"@plum",
					"@pudding",
					"@sesame",
					"@snaps",
					"@soufflé",
					"@sugar",
					"@sweet",
					"@topping",
					"@wafer",
				],
				minimumCharacters: 1,
			},
		],
	},
	removePlugins: [
		"AIAssistant",
		"CKBox",
		"CKFinder",
		"EasyImage",
		"RealTimeCollaborativeComments",
		"RealTimeCollaborativeTrackChanges",
		"RealTimeCollaborativeRevisionHistory",
		"PresenceList",
		"Comments",
		"TrackChanges",
		"TrackChangesData",
		"RevisionHistory",
		"Pagination",
		"WProofreader",
		"MathType",
		"SlashCommand",
		"Template",
		"DocumentOutline",
		"FormatPainter",
		"TableOfContents",
		"PasteFromOfficeEnhanced",
		"CaseChange",
	],
});

const dropArea = document.getElementById("dropArea");
const dropArea2 = document.getElementById("dropArea2");
const dropArea3 = document.getElementById("dropArea3");
const fileInputSampulBuku = document.getElementById("fileInputSampulBuku");
const fileInputJurnalBuku = document.getElementById("fileInputJurnalBuku");
const fileInputTanggapanBuku = document.getElementById(
	"fileInputTanggapanBuku",
);
const previewSampulBuku = document.getElementById("previewSampulBuku");
const previewJurnalBuku = document.getElementById("previewJurnalBuku");
const previewTanggapanBuku = document.getElementById("previewTanggapanBuku");
const fileNamePreviewSampulBuku = document.getElementById(
	"fileNamePreviewSampulBuku",
);
const fileNamePreviewJurnalBuku = document.getElementById(
	"fileNamePreviewJurnalBuku",
);
const fileNamePreviewTanggapanBuku = document.getElementById(
	"fileNamePreviewTanggapanBuku",
);
const chooseFile = document.querySelector(".choose-file");
const chooseFile2 = document.querySelector(".choose-file2");
const chooseFile3 = document.querySelector(".choose-file3");

dropArea.addEventListener("dragover", handleDragOver);
dropArea.addEventListener("dragleave", handleDragLeave);
dropArea.addEventListener("drop", handleDrop);

dropArea2.addEventListener("dragover", handleDragOver);
dropArea2.addEventListener("dragleave", handleDragLeave);
dropArea2.addEventListener("drop", handleDrop);

dropArea3.addEventListener("dragover", handleDragOver);
dropArea3.addEventListener("dragleave", handleDragLeave);
dropArea3.addEventListener("drop", handleDrop);

fileInputSampulBuku.addEventListener("change", () => {
	const file = fileInputSampulBuku.files[0];
	updatePreview(
		file,
		previewSampulBuku,
		fileNamePreviewSampulBuku,
		chooseFile,
		document.querySelector(".text-preview"),
	);
});

fileInputJurnalBuku.addEventListener("change", () => {
	const file = fileInputJurnalBuku.files[0];
	updatePreview(
		file,
		previewJurnalBuku,
		fileNamePreviewJurnalBuku,
		chooseFile2,
		document.querySelector(".text-preview2"),
	);
});

fileInputTanggapanBuku.addEventListener("change", () => {
	const file = fileInputTanggapanBuku.files[0];
	updatePreview(
		file,
		previewTanggapanBuku,
		fileNamePreviewTanggapanBuku,
		chooseFile3,
		document.querySelector(".text-preview3"),
	);
});

document.getElementById("isiBuku").addEventListener("input", (e) => {
	console.log(e.target.value);
});


function handleDragOver(e) {
	e.preventDefault();
	this.classList.add("highlight");
}

function handleDragLeave() {
	this.classList.remove("highlight");
}

function handleDrop(e) {
	e.preventDefault();
	this.classList.remove("highlight");
	const file = e.dataTransfer.files[0];
	const previewElement =
		this === dropArea
			? previewSampulBuku
			: this === dropArea2
			? previewJurnalBuku
			: previewTanggapanBuku;
	const fileNamePreview =
		this === dropArea
			? fileNamePreviewSampulBuku
			: this === dropArea2
			? fileNamePreviewJurnalBuku
			: fileNamePreviewTanggapanBuku;
	const chooseFileElement =
		this === dropArea
			? chooseFile
			: this === dropArea2
			? chooseFile2
			: chooseFile3;
	updatePreview(file, previewElement, fileNamePreview, chooseFileElement);
}


function updatePreview(
	file,
	previewElement,
	fileNamePreview,
	chooseFileElement,
	textPreviewElement,
) {
	const reader = new FileReader();
	reader.onloadend = () => {
		previewElement.src = reader.result;
		textPreviewElement.classList.add("hidden");
		previewElement.classList.remove("hidden");
		if (file) {
			fileNamePreview.textContent = file.name;
			fileNamePreview.classList.remove("hidden");
			chooseFileElement.classList.add("hidden");
		} else {
			fileNamePreview.textContent = "";
			fileNamePreview.classList.add("hidden");
			chooseFileElement.classList.remove("hidden");
		}
	};
	if (file) {
		reader.readAsDataURL(file);
	} else {
		textPreviewElement.classList.remove("hidden");
		previewElement.src = "";
		previewElement.classList.add("hidden");
		fileNamePreview.textContent = "";
		fileNamePreview.classList.add("hidden");
		chooseFileElement.classList.remove("hidden");
	}
}

function HamburgerGrup() {
	document.querySelector(".hamburger").classList.toggle("hidden");
	document.querySelector(".hamburger").classList.toggle("opcity-0");
	document.querySelector(".close").classList.toggle("hidden");
	document.querySelector(".close").classList.toggle("opacity-0");
	document.querySelector(".group-list").classList.toggle("hidden");
	document.body.classList.toggle("overflow-hidden");
}

function ResensiDropdown() {
	document.querySelector(".dropdown-icon").classList.toggle("rotate-180");
	document.querySelector(".list-dropdown").classList.toggle("hidden");
}

function InformasiDropdown() {
	document.querySelector(".dropdown-icon2").classList.toggle("rotate-180");
	document.querySelector(".list-dropdown2").classList.toggle("hidden");
}

document.getElementById('checkboxText').addEventListener('click', () => {
		var checkbox = document.getElementById("checkbox");
		checkbox.checked = !checkbox.checked;
})

document.querySelector(".beranda").addEventListener("click", () => {
	document.querySelector(".beranda").classList.add("bg-green-600");
	document.querySelector(".beranda").classList.add("text-white");
	document.querySelector(".beranda").classList.remove("text-gray-600");
	document.querySelector(".resensi").classList.add("text-gray-600");
	document.querySelector(".resensi").classList.remove("text-white");
	document.querySelector(".resensi").classList.remove("bg-green-600");
	document.querySelector(".dropdown-icon").classList.remove("rotate-180");
	document.querySelector(".informasi").classList.add("text-gray-600");
	document.querySelector(".informasi").classList.remove("text-white");
	document.querySelector(".informasi").classList.remove("bg-green-600");
	document.querySelector(".dropdown-icon2").classList.remove("rotate-180");
	document.querySelector(".list-dropdown").classList.add("hidden");
	document.querySelector(".list-dropdown2").classList.add("hidden");
});

document.querySelector(".resensi").addEventListener("click", () => {
	document.querySelector(".beranda").classList.remove("bg-green-600");
	document.querySelector(".beranda").classList.remove("text-white");
	document.querySelector(".beranda").classList.add("text-gray-600");
	document.querySelector(".informasi").classList.remove("bg-green-600");
	document.querySelector(".informasi").classList.remove("text-white");
	document.querySelector(".informasi").classList.add("text-gray-600");
	document.querySelector(".list-dropdown2").classList.add("hidden");
	document.querySelector(".resensi").classList.add("bg-green-600");
	document.querySelector(".resensi").classList.remove("text-gray-600");
	document.querySelector(".resensi").classList.add("text-white");
	document.querySelector(".resensi").classList.add("bg-green-600");
	document.querySelector(".resensi").classList.add("text-white");
});

document.querySelector(".informasi").addEventListener("click", () => {
	document.querySelector(".beranda").classList.remove("bg-green-600");
	document.querySelector(".beranda").classList.remove("text-white");
	document.querySelector(".beranda").classList.add("text-gray-600");
	document.querySelector(".resensi").classList.remove("bg-green-600");
	document.querySelector(".resensi").classList.remove("text-white");
	document.querySelector(".list-dropdown").classList.add("hidden");
	document.querySelector(".resensi").classList.add("text-gray-600");
	document.querySelector(".informasi").classList.add("bg-green-600");
	document.querySelector(".informasi").classList.remove("text-gray-600");
	document.querySelector(".informasi").classList.add("text-white");
	document.querySelector(".informasi").classList.add("bg-green-600");
	document.querySelector(".informasi").classList.add("text-white");
});

function SearchButton() {
	var searchBg = document.querySelector(".search-bg");
	var isHidden = searchBg.classList.contains("hidden");

	searchBg.classList.toggle("hidden");
	document.body.classList.toggle("overflow-hidden");

	if (!isHidden) {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		searchBg.style.top = scrollTop + "px";
	}
}

function CloseSearch() {
	document.querySelector(".search-bg").classList.toggle("hidden");
	document.body.classList.toggle("overflow-hidden");
}

function ProfilButton() {
	document.querySelector(".dropdown-user").classList.toggle("opacity-0");
}

document.querySelector(".input").addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		document.querySelector(".input").value = "";
		document.querySelector(".hamburger").classList.toggle("hidden");
		document.querySelector(".hamburger").classList.toggle("opcity-0");
		document.querySelector(".close").classList.toggle("hidden");
		document.querySelector(".close").classList.toggle("opacity-0");
		document.querySelector(".group-list").classList.toggle("hidden");
		document.body.classList.toggle("overflow-hidden");
	}
});

document.querySelector(".input-search").addEventListener("keydown", (event) => {
	if (event.key == "Enter") {
		document.querySelector(".input-search").value = "";
		document.querySelector(".search-bg").classList.toggle("hidden");
		document.body.classList.toggle("overflow-hidden");
	}
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
	{
		id: 2,
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
