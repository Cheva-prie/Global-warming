// AOS Init
AOS.init({
duration:1000,
once:true
});

//Scroll
document.querySelectorAll(".card").forEach(card=>{
  card.addEventListener("mousemove", e=>{
    const x = e.offsetX;
    const y = e.offsetY;
    card.style.transform = `rotateX(${(y-100)/20}deg) rotateY(${(x-100)/20}deg)`;
  });
  card.addEventListener("mouseleave", ()=>{
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});