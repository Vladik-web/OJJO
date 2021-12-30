window.onload = function () {
	document.body.classList.add('loaded');
  const tabs = document.querySelector(".tabs__buttons");
  const tabsContents = document.querySelectorAll(".tabs__content");

  tabs.addEventListener("click", (event) => {
    const target = event.target.closest(".btn");
    if (!target) return;
    else {
      [...tabs.children].forEach((item) => item.classList.remove("active"));
      target.classList.add("active");
      let currentBtn = target.dataset.tab;
      tabsContents.forEach((item) => item.classList.remove("active"));
      tabsContents[currentBtn].classList.add("active");
    }
  });
};
@@include('nav.js')
@@include('video.js')