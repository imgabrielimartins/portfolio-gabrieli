const hero = document.getElementById("hero");
const smoke = document.querySelector(".smoke");

if (hero && smoke) {

  hero.addEventListener("mousemove", (e) => {

    const rect = hero.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    smoke.style.left = x + "px";
    smoke.style.top = y + "px";

  });

  hero.addEventListener("mouseenter", () => {
    smoke.style.opacity = "0.8";
  });

  hero.addEventListener("mouseleave", () => {
    smoke.style.opacity = "0";
  });

}

const text = "Gabrieli Martins";
const typingElement = document.getElementById("typing");

let index = 0;

function typeWriter(){

  if(index < text.length){
    typingElement.innerHTML += text.charAt(index);
    index++;

    setTimeout(typeWriter,120);
  }

}

if(typingElement){
  typeWriter();
}

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el)=>{
  observer.observe(el);
});

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{

  constructor(){

    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.size = Math.random() * 2;

    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;

  }

  update(){

    this.x += this.speedX;
    this.y += this.speedY;

  }

  draw(){

    ctx.fillStyle = "#ff7aa8";

    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();

  }

}

function initParticles(){

  particlesArray = [];

  for(let i=0;i<80;i++){
    particlesArray.push(new Particle());
  }

}

function animateParticles(){

  ctx.clearRect(0,0,canvas.width,canvas.height);

  particlesArray.forEach(p=>{
    p.update();
    p.draw();
  });

  requestAnimationFrame(animateParticles);

}

if(canvas){

  initParticles();
  animateParticles();

}

window.addEventListener("resize", ()=>{

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  initParticles();

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

});

const form = document.getElementById("contact-form");
const button = document.getElementById("sendBtn");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    if (button) {
      button.innerText = "Enviando...";
      button.disabled = true;
    }

    emailjs.sendForm(
      "service_66ocz5n",
      "template_8r1kupl",
      this
    )
    .then(() => {
      if (button) button.innerText = "✓ Mensagem enviada";
      if (status) status.innerText = "Mensagem enviada com sucesso!";
      form.reset();

      setTimeout(() => {
        if (button) {
          button.innerText = "Enviar mensagem";
          button.disabled = false;
        }
      }, 4000);
    })
    .catch(() => {
      if (button) {
        button.innerText = "Erro ao enviar";
        button.disabled = false;
      }
      if (status) status.innerText = "Erro ao enviar mensagem.";
    });
  });
}     