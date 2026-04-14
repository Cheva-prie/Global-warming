// Star Canvas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function initStars(){
  stars = [];
  for(let i=0;i<250;i++){
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.2,
      speed: Math.random() * 0.6 + 0.2
    });
  }
}
initStars();

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  stars.forEach(star=>{
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
    ctx.fillStyle = "white";
    ctx.fill();

    star.y += star.speed;

    if(star.y > canvas.height){
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}
animateStars();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initStars();
});

// Hero Parallax
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if(hero){
    hero.style.backgroundPositionY = window.scrollY * 0.35 + "px";
  }
});

// Download Infografis
  const btnOpenInfographic = document.getElementById("btnOpenInfographic");
  const btnCloseInfographic = document.getElementById("btnCloseInfographic");
  const infographicModal = document.getElementById("infographicModal");
  const infographicFrame = document.getElementById("infographicFrame");

  btnOpenInfographic.addEventListener("click", () => {
    infographicModal.classList.add("active");
  });

  btnCloseInfographic.addEventListener("click", () => {
    infographicModal.classList.remove("active");
  });

  infographicFrame.addEventListener("click", () => {
    infographicModal.classList.add("active");
  });

  infographicModal.addEventListener("click", (e) => {
    if (e.target === infographicModal) {
      infographicModal.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      infographicModal.classList.remove("active");
    }
  });
