function Menu(e) {
  let menuList = document.querySelector("#nav_ul");
  e.name === "menu"
    ? ((e.name = "close"),
      menuList.classList.add("top-[80px]"),
      menuList.classList.add("opacity-100"))
    : ((e.name = "menu"),
      menuList.classList.remove("top-[80px]"),
      menuList.classList.remove("opacity-100"));
}
