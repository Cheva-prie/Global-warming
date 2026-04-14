// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});


// Mobile menu animation class
mobileMenu.classList.add("mobile-hide");

const style = document.createElement("style");
style.innerHTML = `
  .mobile-hide { display:none; }
  .mobile-menu.show { display:flex; }
`;
document.head.appendChild(style);


// Canvas Stars Background
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function createStars(){
  stars = [];
  for(let i=0;i<220;i++){
    stars.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      size: Math.random()*2.2,
      speed: Math.random()*0.6 + 0.1
    });
  }
}

createStars();

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
      star.x = Math.random()*canvas.width;
    }
  });

  requestAnimationFrame(animateStars);
}

animateStars();

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
});