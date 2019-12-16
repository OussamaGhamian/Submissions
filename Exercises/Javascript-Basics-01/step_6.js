function times() {
  alert(
    "the reminder is " +
      (document.getElementById("first_number").value %
        document.getElementById("second_number").value)
  );
}
