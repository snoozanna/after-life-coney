// DESCRIPTIONS

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

// COOKIES

const cookieBanner = document.getElementById("cookie-banner");

// function fadeOutEffect() {
//   var fadeTarget = document.getElementById("target");
//   var fadeEffect = setInterval(function () {
//     if (!fadeTarget.style.opacity) {
//       fadeTarget.style.opacity = 1;
//     }
//     if (fadeTarget.style.opacity > 0) {
//       fadeTarget.style.opacity -= 0.1;
//     } else {
//       clearInterval(fadeEffect);
//     }
//   }, 200);
// }

if (localStorage.getItem("cookieSeen") != "shown") {
  cookieBanner.style.display = "flex";
  // cookieBanner.delay(2000).fadeIn();
  localStorage.setItem("cookieSeen", "shown");
}

// cookieBanner.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("cookie banner clicked. needs to fade away");
// });

cookieBanner.addEventListener(
  "click",
  () => (cookieBanner.style.opacity = "0"),
);
// If you want to remove it from the page after the fadeout
// cookieBanner.addEventListener("transitionend", () => cookieBanner.remove());
// $(".close").click(function (e) {
//   cookieBanner.fadeOut();
// });
