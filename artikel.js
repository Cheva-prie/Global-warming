// Parallax Hero
window.addEventListener("scroll", function () {
  const bg = document.querySelector(".hero img");
  let scroll = window.scrollY;
  bg.style.transform = "translateY(" + offset * 0.4 + "px)";
});
