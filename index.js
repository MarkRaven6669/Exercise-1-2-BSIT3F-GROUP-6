
const btn1_ctn = document.getElementsByClassName("btn1_container")[0];
const one = document.querySelector(".fas");
btn1_ctn.addEventListener("click", () => {
  one.classList.toggle("fa-circle");
  one.classList.toggle("fa-moon");
  one.classList.toggle("active1");
  btn1_ctn.classList.toggle("changeBg");
});

function black() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
