const express = require("express");
const app = express();
const port = "3033";
app.get("/", (req, res) => {
  res.send("Hello World from Oussama");
});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
