let time = new Date();
let current = time.getHours() + " : " + time.getMinutes();
//
const express = require("express");
const app = express();
const port = "3034";
//routes
app.get("/", (req, res) => {
  res.send("Hello World from Oussama");
});
app.get("/test", (req, res) => {
  res.send({ status: 200, message: "ok" });
});
app.get("/time", (req, res) => {
  res.send({ status: 200, message: `${current}` });
});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
