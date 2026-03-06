const hero = document.getElementById("hero");
const smoke = document.querySelector(".smoke");

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

const text = "Gabrieli Martins";
const typingElement = document.getElementById("typing");

let index = 0;

function typeWriter(){
    if(index < text.length){
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 120);
    }
}

typeWriter();