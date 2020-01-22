//get the time
let time = new Date();
let current = time.getHours() + " : " + time.getMinutes();
//array
const movies = [
  { title: "Jaws", year: 1975, rating: 8 },
  { title: "Avatar", year: 2009, rating: 7.8 },
  { title: "Brazil", year: 1985, rating: 8 },
  { title: "الإرهاب والكباب‎", year: 1992, rating: 6.2 }
];
//ordered by arrays
const sortedByDateArr = movies.sort((a, b) => b.year - a.year);
const sortedByRatingArr = movies.sort((a, b) => b.rating - a.rating);
const sortedByTitleArr = movies.sort((a, b) => b.title - a.title);
//setup
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
app.get("/hello/:id", (req, res) => {
  if (req.params.id)
    res.send({ status: 200, message: `Hello,${req.params.id}` });
  else res.send({ starus: 200, message: "Hello" });
});
app.get("/search", (req, res) => {
  if (req.query.s)
    res.send({ status: 200, message: "ok", data: `${req.query.s}` });
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
///////
app.get("/movies/read/by-date", (req, res) => {
  res.send({
    status: 200,
    data: `${sortedByDateArr.map(item => `${item.title} ${item.year}`)}`
  });
});
////
app.get("/movies/read/by-rating", (req, res) => {
  res.send({
    status: 200,
    data: `${sortedByRatingArr.map(item => `${item.title} ${item.rating}`)}`
  });
});
//
app.get("/movies/read/by-title", (req, res) => {
  res.send({
    status: 200,
    data: `${sortedByRatingArr.map(item => `${item.title}`)}`
  });
});
app.get("/movies/update", (req, res) => {});
app.get("/movies/delete", (req, res) => {});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
