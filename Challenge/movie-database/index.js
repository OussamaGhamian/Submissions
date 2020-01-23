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
const originalArray = [];
movies.map(element => originalArray.push(element));
const sortedByDateArr = movies.sort((a, b) => b.year - a.year);
const sortedByRatingArr = movies.sort((a, b) => b.rating - a.rating);
const sortedByTitleArr = movies.sort((a, b) => b.title - a.title);
//setup
const express = require("express");
const app = express();
const port = "3531";
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

app.get("/movies/add", (req, res) => {
  if (!req.query.rating) req.query.rating = 4;
  if (
    !req.query.title ||
    !req.query.year ||
    req.query.year < 1000 ||
    req.query.year > 9999 ||
    isNaN(req.query.year)
  )
    res.send({
      status: 403,
      error: true,
      message: "you cannot create a movie without providing a title and a year"
    });
  else {
    originalArray.push({
      title: `${req.query.title}`,
      year: `${req.query.year}`,
      rating: `${req.query.rating}`
    });
    res.send({
      status: 200,
      data: `${originalArray.map(
        item => `${item.title} ${item.year} ${item.rating}`
      )}`
    });
  }
});

app.get("/movies/read", (req, res) => {
  res.send({ status: 200, data: `${originalArray.map(item => item.title)}` });
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
app.get("/movies/read/id/:id", (req, res) => {
  if (req.params.id > movies.length || req.params.id < 1) {
    console.log("outside the range");
    res.send({
      status: 404,
      error: true,
      message: `the movie ${req.params.id} does not exist`
    });
  } else {
    res.send({
      status: 200,
      data: `${originalArray[req.params.id - 1].title}`
    });
  }
});
app.get("/movies/update/:id", (req, res) => {
  if (req.query.title) originalArray[req.params.id - 1].title = req.query.title;
  if (req.query.year) originalArray[req.params.id - 1].year = req.query.year;
  if (req.query.rating)
    originalArray[req.params.id - 1].rating = req.query.rating;
  res.send(originalArray);
});
app.get("/movies/delete/:id", (req, res) => {
  if (req.params.id > originalArray.length || req.params.id < 1) {
    console.log(req.params.id);
    res.send({
      status: 404,
      error: true,
      message: `the movie ${req.params.id - 1} does not exist`
    });
  } else {
    originalArray.splice(req.params.id - 1, 1);
    res.send(originalArray);
  }
});
app.listen(port, () => {
  console.log(`server is running at: http://localhost:${port}/`);
});
