document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelector(".tabs__buttons");
  const tabsContents = document.querySelectorAll(".tabs__content");

  tabs.addEventListener("click", (event) => {
    const target = event.target.closest("button");
    [...tabs.children].forEach((item) => item.classList.remove("active"));
    target.classList.add("active");

    if (!target) return;
    else {
      let currentBtn = target.dataset.tab;
      tabsContents.forEach((item) => item.classList.remove("active"));
      tabsContents[currentBtn].classList.add("active");
    }
  });
});
