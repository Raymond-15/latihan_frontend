let menu_mobile = document.querySelector(".menu-mobile");
let menu_nav = document.querySelector(".menu-nav");
let menu_filter = document.querySelector(".filter");

menu_mobile.addEventListener("click", () => {
  if (menu_nav.classList.contains("active")) {
    menu_nav.classList.remove("active");
    menu_nav.style.display = "none";
    document.body.style.overflow = "";
    menu_filter.style.display = "none";
  } else {
    menu_nav.style.display = "flex";
    menu_nav.classList.add("active");
    document.body.style.overflow = "hidden";
    menu_filter.style.display = "block";
  }
});
