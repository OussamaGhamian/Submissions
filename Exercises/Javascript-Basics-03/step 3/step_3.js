var arr = document.querySelectorAll(".color");

arr[0].addEventListener("click", function() {
  document.querySelector("p").style.color = "green";
});
arr[1].addEventListener("click", function() {
  document.querySelector("p").style.color = "red";
});
arr[2].addEventListener("click", function() {
  document.querySelector("p").style.color = "blue";
});
