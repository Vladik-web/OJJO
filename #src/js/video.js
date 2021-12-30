const videos = [
  '<iframe width="80%" height="80%" src="https://www.youtube.com/embed/BqPoCq4Y0yk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  '<iframe width="80%" height="80%" src="https://www.youtube.com/embed/z8uNmQaZgMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
];
const video = document.querySelectorAll(".social__grid-item.video");
const here = document.querySelector(".video-iframe");
const modalV = document.querySelector(".modal-v");

video.forEach((item) =>
  item.addEventListener("click", () => {
    modalWindow[1].classList.add("active");
    const src = item.dataset.video;
    here.innerHTML = "";
    here.innerHTML = videos[src];
    document.body.classList.add("active");
  })
);
