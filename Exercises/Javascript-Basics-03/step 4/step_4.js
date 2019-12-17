document.querySelector("button").addEventListener("click", function() {
  let pass = document.getElementById("password");
  let conf = document.getElementById("confirmation");
  if (pass.value != conf.value)
    conf.style.border = pass.style.border = "1px solid red";
  else conf.style.border = pass.style.border = "1px solid green";
});
