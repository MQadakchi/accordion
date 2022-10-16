const titles = document.querySelectorAll(".accordion-title");
const content = document.querySelector(".accordion-content");

titles.forEach((title) => {
  title.addEventListener("click", (e) => {
    const content = e.target.nextElementSibling;
    const contentHeight = e.target.nextElementSibling.scrollHeight;

    if (!content.style.height) {
      content.style.height = contentHeight + "px";
      e.target.classList.add("active");
    } else {
      content.style.height = null;
      e.target.classList.remove("active");
    }
  });
});
