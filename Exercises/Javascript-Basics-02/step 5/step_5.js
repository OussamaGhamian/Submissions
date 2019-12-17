var arr = document.querySelectorAll("img");
arr.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    var i;
    var j = 1;
    for (i = 0; i < document.querySelectorAll("img").length; i++) {
      document.querySelectorAll("img")[i].src = "images/image" + j++ + "_2.jpg";
    }
  });
});
