const burger = document.querySelector(".burger");
const menu = document.querySelector(".nav");

burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    menu.style.display = "none";
  } else {
    burger.classList.add("active");
    menu.style.display = "block";
  }
});
