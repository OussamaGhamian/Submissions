document.getElementById("validate").addEventListener("click", () => {
  var age = document.getElementById("age").value;
  if (age >= 18) {
    alert(" you are 18 or greater");
  } else {
    alert(" You are less than 18");
  }
});
