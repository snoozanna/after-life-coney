const archiveLink = document.getElementById("archiveLink");
const archiveText = document.getElementById("archiveText");
archiveLink.addEventListener("click", (e) => {
  e.preventDefault();
  archiveText.classList.toggle("archiveText");
});

const facilitationLink = document.getElementById("facilitationLink");
const facilitationText = document.getElementById("facilitationText");
facilitationLink.addEventListener("click", (e) => {
  e.preventDefault();
  facilitationText.classList.toggle("facilitationText");
});
