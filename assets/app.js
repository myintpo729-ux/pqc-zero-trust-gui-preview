const fileInput = document.getElementById("file-input");
const selectedFile = document.getElementById("selected-file");
const result = document.getElementById("demo-result");

fileInput.addEventListener("change", () => {
  selectedFile.textContent = fileInput.files.length
    ? `Selected for visual preview: ${fileInput.files[0].name}`
    : "No file selected";
});

document.getElementById("demo-upload").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!fileInput.files.length) {
    result.hidden = false;
    result.style.background = "#55202a";
    result.style.color = "#ffc1c9";
    result.textContent = "Choose a file first. This is a GUI demonstration; no upload will occur.";
    return;
  }
  result.hidden = false;
  result.style.background = "#123c38";
  result.style.color = "#9af0cb";
  result.textContent =
    `GUI preview only: ${fileInput.files[0].name} selected. No file was sent, encrypted, or stored. The Go backend and MinIO are not connected on GitHub Pages.`;
});

document.querySelectorAll("[data-demo-download]").forEach((button) => {
  button.addEventListener("click", () => {
    result.hidden = false;
    result.style.background = "#173451";
    result.style.color = "#bde8ff";
    result.textContent = "Preview only: this sample object is not stored in MinIO, so no download or decryption is performed.";
    document.getElementById("upload-section").scrollIntoView({ behavior: "smooth" });
  });
});

const links = [...document.querySelectorAll(".nav-link")];
links.forEach((link) => link.addEventListener("click", () => {
  links.forEach((item) => item.classList.remove("active"));
  link.classList.add("active");
}));
