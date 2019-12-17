document.getElementById("name").addEventListener("change", () => {
  document.querySelector("div").textContent = document.getElementById(
    "name"
  ).value;
});
