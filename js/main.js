var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

///
///
/// slick slider



///
///
/// tabEvents
const toggleBody = (isClose) => {
  if (isClose) document.body.classList.add("active");
  else document.body.classList.remove("active");
};
document.querySelectorAll(`[data-event="tabEvent"]`).forEach((eventBtn) => {
  const tab = document.querySelector(eventBtn.getAttribute("data-tab"));
  if (tab) {
    eventBtn.onclick = (e) => {
      e.preventDefault();
      tab.classList.toggle("active");
      toggleBody(tab.classList.contains("active"));
    };
    tab.onclick = (e) => {
      if (e.target === e.currentTarget) {
        tab.classList.toggle("active");
        toggleBody(tab.classList.contains("active"));
      }
    };
  }
});
///
///
///
///WOW JS
window.onload = () => {
  setTimeout(() => {
    new WOW().init({
      boxClass: "wow",
    });
  }, 200);
};
