const switchElement = document.querySelector('.switch');
const footerElement = document.querySelector('footer');
switchElement.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    footerElement.classList.toggle('dark');
    switchElement.classList.toggle('switch-light');
})

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}


 /* Event Listeners FOOTER JS > CSS DISPLAY NONE ET POSITION FIXED*/
 /* 
toggle.addEventListener("click", toggleMenu, false);

var footer = document.querySelector("footer");

window.addEventListener("scroll", function() {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  var clientHeight = document.documentElement.clientHeight;

  if (scrollTop + clientHeight >= scrollHeight) {
    footer.style.display = "block";
  } else {
    footer.style.display = "none";
  }
});
*/