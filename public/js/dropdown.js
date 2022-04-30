const arrowIcon = document.getElementsByClassName("arrow-icon");
const opt = document.getElementsByClassName("subnav");

Object.keys(opt).forEach((option) => {
  opt[option].style.display = "none";
});

const displaySubOpts = (o) => {
  opt[o].style.display = "block";
  arrowIcon[o].setAttribute("d", "m1 5 4-4 4 4");
  opt[o].parentElement.setAttribute("ontouchstart", "hideSubOpts(" + o + ")");
};

const hideSubOpts = (o) => {
  opt[o].style.display = "none";
  arrowIcon[o].setAttribute("d", "m1 1 4 4 4-4");
  opt[o].parentElement.setAttribute("ontouchstart", "displaySubOpts(" + o + ")");
};

//For Mobile Site
const navigation = document.getElementById("mobile-nav").querySelector("ul");
const hamburgerIcon = document
  .getElementById("mobile-nav")
  .querySelector("svg");
const closeMobile = document.getElementById("mobileClose");

const displayHamburger = () => {
  navigation.style.display = "flex";
  hamburgerIcon.style.display = "none";
  closeMobile.style.display = "block";
};

const hideHamburger = () => {
  navigation.style.display = "none";
  hamburgerIcon.style.display = "inline";
  closeMobile.style.display = "none";
};