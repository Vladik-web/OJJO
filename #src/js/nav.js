const nav = document.querySelector(".nav");
const menuWrapper = document.querySelector(".menu-wrapper");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const modal = document.querySelectorAll(".sign-up-in");
const modalWindow = document.querySelectorAll(".modal");
const btnClose = document.querySelectorAll(".btn-close");
const acc = document.querySelector(".acc");

const closeModals = () => {
  modalWindow.forEach((item) => {
    item.classList.remove("active");
    document.body.classList.remove("active");
  });
};

modal.forEach((item) =>
  item.addEventListener("click", () => {
    modalWindow[0].classList.add("active");
    document.body.classList.add("active");
  })
);

btnClose.forEach((item) =>
  item.addEventListener("click", () => {
    closeModals();
  })
);

menuWrapper.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("animate");
  nav.classList.toggle("active");
});
