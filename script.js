
// const elements = document.getElementsByClassName("Section2");
// const elementsArray = Array.from(elements);

// elementsArray.forEach((element) => {
//   element.addEventListener("scroll", () => {
//     alert("Would you like to connect");
//   });
// });
window.onscroll = function() {myFunction()};
let x=true;
function myFunction() {
  if (document.documentElement.scrollTop > 700) {
  if(x){
  alert("Would you like to connect");}
  x=false;
}}