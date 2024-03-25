CKEDITOR.ClassicEditor.create(document.getElementById("isiBuku"), {
	options: {
		type: "textarea",
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

document.getElementById("checkboxText").addEventListener("click", () => {
	var checkbox = document.getElementById("checkbox");
	checkbox.checked = !checkbox.checked;
});

