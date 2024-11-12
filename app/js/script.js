let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let backButton = document.getElementById("back");

nextButton.onclick = function () {
  showSlider("next");
};
prevButton.onclick = function () {
  showSlider("prev");
};
let unAcceppClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = "none";
  prevButton.style.pointerEvents = "none";

  carousel.classList.remove("next", "prev");
  let items = document.querySelectorAll(".carousel .list .item");
  if (type === "next") {
    listHTML.appendChild(items[0]);
    carousel.classList.add("next");
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add("prev");
  }
  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.style.pointerEvents = "auto";
    prevButton.style.pointerEvents = "auto";
  }, 2000);
};
seeMoreButtons.forEach((button) => {
  button.onclick = function () {
    carousel.classList.remove("next", "prev");
    carousel.classList.add("showDetail");
  };
});
backButton.onclick = function () {
  carousel.classList.remove("showDetail");
};

document.addEventListener("DOMContentLoaded", function () {
  const playVideoButton = document.getElementById("playVideoButton");
  const videoContainer = document.getElementById("videoContainer");
  const backgroundVideo = document.getElementById("backgroundVideo");
  const inicioSection = document.getElementById("inicio");
  const leftText = document.querySelector(".left");
  const rightText = document.querySelector(".right");

  playVideoButton.addEventListener("click", function () {
    // Exibe o vídeo com uma animação suave
    videoContainer.style.opacity = 1;
    videoContainer.style.display = "block";
    backgroundVideo.play();

    // Muda a cor do texto para branco suavemente
    inicioSection.style.color = "white"; // A cor do texto de toda a seção será branca
    leftText.style.color = "white";
    rightText.style.color = "white";

    // Quando o vídeo terminar, esconde o vídeo com animação suave
    backgroundVideo.onended = function () {
      videoContainer.style.opacity = 0;
      setTimeout(function () {
        videoContainer.style.display = "none"; // Esconde o vídeo após a animação
        inicioSection.style.color = "black"; // Volta a cor do texto
        leftText.style.color = "black"; // Volta a cor do texto à cor inicial
        rightText.style.color = "black"; // Volta a cor do texto à cor inicial
      }, 1000); // Tempo para a animação de desaparecer
    };
  });
});
