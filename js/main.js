const masonry = document.querySelector(".masonry");
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomNumber = random(1, 221);

for (let i = randomNumber; i < randomNumber + 11; i++) {
    console.log(i);
    masonry.innerHTML += `<div class="item"><img src="./img/recuerdos/big-recuerdo-22_${i}.jpg" alt="Galeria de recuerdos"
    class="w-100"></div>`;
}
