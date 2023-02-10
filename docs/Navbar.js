function Menu(e) {
  const menuList = document.querySelector("#nav_ul");
  if (e.name === "menu") {
    e.name = "close";
    menuList.classList.add("top-[80px]");
    menuList.classList.add("opacity-100");
  } else {
    e.name = "menu";
    menuList.classList.remove("top-[80px]");
    menuList.classList.remove("opacity-100");
  }
}

Menu();
