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
app.get("/hello/:id?", (req, res) => {
  if (req.params.id)
    res.send({ status: 200, message: `Hello,${req.params.id}` });
  else res.send({ starus: 200, message: "Hello" });
});
app.get("/search=:se?", (req, res) => {
  if (req.params.se)
    res.send({ status: 200, message: "ok", data: `${req.params.se}` });
  else
    res.send({
      status: 500,
      error: true,
      message: "you have to provide a search"
    });
});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
