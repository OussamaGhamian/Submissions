document.querySelector("button").addEventListener("click", function() {
  var val = prompt(" Delete yes/no?");
  if (val === "yes") {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("city").value = "";
  } else alert("nothing has been deleted");
});
