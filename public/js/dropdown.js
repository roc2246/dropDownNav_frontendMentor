const mainNav = document.getElementById("main-nav");
const opt = document.getElementsByClassName("subnav");

Object.keys(opt).forEach((option) => {
  opt[option].style.display = "none";
});

const displaySubOpts = (o) => {
  opt[o].style.display = "block";
};

const hideSubOpts = (o) => {
  opt[o].style.display = "none";
};
