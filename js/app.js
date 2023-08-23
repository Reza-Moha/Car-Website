// togglemenu button

function toggleMenu() {
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".nav");
  menu.classList.toggle("active");
  nav.classList.toggle("active");
}

// change Background

function changeVideo(name) {
  const bgVideoList = document.querySelectorAll(".bg-video");
  const trailers = document.querySelectorAll(".trailer");
  const models = document.querySelectorAll(".model");

  bgVideoList.forEach((video) => {
    video.classList.remove("active");
    if (video.classList.contains(name)) {
      video.classList.add("active");
    }
  });

  models.forEach((model) => {
    model.classList.remove("active");
    if (model.classList.contains(name)) {
      model.classList.add("active");
    }
  });

  trailers.forEach((trailer) => {
    trailer.classList.remove("active");
    if (trailer.classList.contains(name)) {
      trailer.classList.add("active");
    }
  });
}
