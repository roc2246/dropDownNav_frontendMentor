const arrowIcon = document.getElementsByClassName("arrow-icon");
const opt = document.getElementsByClassName("subnav");

Object.keys(opt).forEach((option) => {
  opt[option].style.display = "none";
});

const displaySubOpts = (o) => {
  opt[o].style.display = "block";
  arrowIcon[o].setAttribute('d', 'm1 5 4-4 4 4');
};

const hideSubOpts = (o) => {
  opt[o].style.display = "none";
  arrowIcon[o].setAttribute('d', 'm1 1 4 4 4-4');
};


//For Mobile Site
const navigation = document.getElementById("mobile-nav").querySelector("ul")

const displayHamburger = () => {
  navigation.style.display = "flex";
}