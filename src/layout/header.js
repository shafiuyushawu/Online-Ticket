const navData = {
  icons: {
    facebook: "fa-brands fa-facebook-f",
    twitter: "fa-brands fa-twitter",
  },
  text: {
    language: "English",
    page: "My Page",
    logout: "Logout",
  },
};

const header = document.querySelector("body header");

const navbar = document.createElement("navbar");
navbar.className = "fixed top-0 left-0 bg-white w-full drop-shadow-xl";

const topDiv = document.createElement("div");
topDiv.className = " w-[100%] bg-[#272a31] h-[30px]";

const ul = document.createElement("ul");
ul.className = " flex justify-end list-none   gap-x-3 text-[#d3d3d3]";
ul.id = "topnav__ul";

const li = document.createElement("li");
li.className = "";
const a = document.createElement("a");
a.className = "";
const i = document.createElement("i");
i.className = navData.icons.facebook;

const li2 = document.createElement("li");
li2.className = "";
const a2 = document.createElement("a");
a2.className = "";
const i2 = document.createElement("i");
i2.className = navData.icons.twitter;

const li3 = document.createElement("li");
li2.className = "";
const a3 = document.createElement("a");
a3.innerHTML = navData.text.language;

const li4 = document.createElement("li");
li4.className = "";
const a4 = document.createElement("a");
a4.innerHTML = navData.text.page;

const li5 = document.createElement("li");
li5.className = "";
const a5 = document.createElement("a");
a5.innerHTML = navData.text.logout;

header.appendChild(navbar);
navbar.appendChild(topDiv);
topDiv.appendChild(ul);
ul.appendChild(li);
li.appendChild(a);
a.appendChild(i);

ul.appendChild(li2);
li2.appendChild(a2);
a2.appendChild(i2);

ul.appendChild(li3);
li3.appendChild(a3);

ul.appendChild(li4);
li4.appendChild(a4);

ul.appendChild(li5);
li5.appendChild(a5);

//navbar

const container = document.createElement("div");
container.className = "flex flex-column";

const iconDiv = document.createElement("div");
iconDiv.className = "flex items-center";

container.className =
  "container m-auto flex justify-between items-center text-black md:justify-start";

const hamburger = document.createElement("div");
hamburger.id = "hamburger";
hamburger.className =
  "hamburger block md:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gra-200 justify-start";
const bar1 = document.createElement("div");
bar1.className = "bar w-6 h-1 bg-gray-600 mb-1";
const bar2 = document.createElement("div");
bar2.className = "bar w-6 h-1 bg-gray-600 mb-1";
const bar3 = document.createElement("div");
bar3.className = "bar w-6 h-1 bg-gray-600 mb-1";

const icon = document.createElement("i");
icon.className = "hidden l-8 py-4 text-xl font-bold md:block";
icon.innerHTML = "IBNSCO";

const menuDiv = document.createElement("div");
menuDiv.className = "";

const ulnav = document.createElement("ul");
ulnav.id = "navMenu";
ulnav.className =
  " md:flex items-center  text-base font-semibold cursor-pointer md:block ";
const linav1 = document.createElement("li");
linav1.className = "py-4 px-6";
const anav1 = document.createElement("a");
anav1.innerHTML = "About";

const linav2 = document.createElement("li");
linav2.className = "py-4 px-6";
const anav2 = document.createElement("a");
anav2.innerHTML = "Program";

const linav3 = document.createElement("li");
linav3.className = "py-4 px-6";
const anav3 = document.createElement("a");
anav3.innerHTML = "Connect Live";

const linav4 = document.createElement("li");
linav4.className = "py-4 px-6";
const anav4 = document.createElement("a");
anav4.innerHTML = "News";

const linav5 = document.createElement("li");
linav5.className = "py-4 px-6";
const anav5 = document.createElement("a");
anav5.innerHTML = "Buy Tickets";

header.appendChild(navbar);
navbar.appendChild(container);
container.appendChild(iconDiv);
iconDiv.appendChild(icon);
iconDiv.appendChild(hamburger);
hamburger.appendChild(bar1);
hamburger.appendChild(bar2);
hamburger.appendChild(bar3);

container.appendChild(ulnav);
ulnav.appendChild(linav1);
linav1.appendChild(anav1);

ulnav.appendChild(linav2);
linav2.appendChild(anav2);

ulnav.appendChild(linav3);
linav3.appendChild(anav3);

ulnav.appendChild(linav4);
linav4.appendChild(anav4);

ulnav.appendChild(linav5);
linav5.appendChild(anav5);

const toggleNavbar = document.querySelector("#navMenu");
const toggleHamburger = document.querySelector("#hamburger");

toggleHamburger.addEventListener("click", () => {
  toggleHamburger.classList.toggle("active");
  toggleNavbar.classList.toggle("active");
});
