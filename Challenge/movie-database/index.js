let time = new Date();
let current = time.getHours() + " : " + time.getMinutes();
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
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
app.get("/movies/create", (req, res) => {});
app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: `${movies.map(item => item.title)}` });
});
app.get("/movies/update", (req, res) => {});
app.get("/movies/delete", (req, res) => {});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
