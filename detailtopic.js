const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

function initStars(){
  stars = [];
  for(let i=0;i<220;i++){
    stars.push({
      x: Math.random()*canvas.width,
      y: Math.random()*canvas.height,
      size: Math.random()*2.2,
      speed: Math.random()*0.7 + 0.2
    });
  }
}

initStars();

function animateStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  stars.forEach(star=>{
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI*2);
    ctx.fillStyle="white";
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
  initStars();
});