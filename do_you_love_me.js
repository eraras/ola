const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// yes button functionality

yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});

document.querySelector(".js-yes-btn").addEventListener("click", function() {
  crearCorazones(); // Llama a la animación de corazones

  // Retrasa la redirección para dar tiempo a la animación
  setTimeout(() => {
      window.location.href = "carta.html";
  }, 4000); // Redirige después de 4 segundos
});

function crearCorazones() {
  let cantidadCorazones = 30; // Número de corazones a generar

  for (let i = 0; i < cantidadCorazones; i++) {
      setTimeout(() => { // Agrega un pequeño retraso para que no aparezcan todos de golpe
          let heart = document.createElement("div");
          heart.classList.add("heart");
          heart.innerHTML = "❤️";
          heart.style.left = Math.random() * 100 + "vw";
          heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duración variable

          document.body.appendChild(heart);

          // Elimina el corazón después de la animación
          setTimeout(() => {
              heart.remove();
          }, 5000);
      }, i * 100); // Añade un ligero retraso entre corazones
  }
}
