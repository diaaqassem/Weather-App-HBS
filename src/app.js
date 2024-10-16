const express = require("express"); // express package
const app = express();
const path = require("path"); // call path package
const hbs = require("hbs"); // call hbs package
// liten port
const port = process.env.PORT || 3000;

const publicDir = path.join(__dirname, "../public");
app.use("/", express.static(publicDir));

app.set("view engine", "hbs"); // configure hbs
//handle hbs file from views
const viewsDir = path.join(__dirname, "../template/views");
app.set("views", viewsDir);

//handle hbs file from partials
const partialsDir = path.join(__dirname, "../template/partials");
hbs.registerPartials(partialsDir);

app.get("/", (req, res) => {
  // to show in hbs page
  res.render("index", {
    title: "HOME",
    desc: "This Home Page",
    img: "images/img1.jpeg",
    footer: "This Home Footer 🏠",
  });
});

app.get("/price", (req, res) => {
  res.render("price", {
    title: "price",
    desc: "This Price Page",
    footer: "©️ This price Footer 💰",
  });
});

app.get("/product", (req, res) => {
  res.render("product", {
    title: "Product",
    desc: "This Product Page",
    footer: "©️ This product Footer 🛍️",
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    title: "Service",
    desc: "This Service Page",
    footer: "©️ This service Footer 🚀",
  });
});

app.get("/team", (req, res) => {
  res.render("team", {
    title: "Team",
    desc: "This Team Page",
    name: "diaa",
    age: 21,
    img: "images/img1.jpeg",
    job: "developer",
    city: "cairo",
    footer: "©️ This team Footer 👥",
  });
});

app.get("/products", (req, res) => {
  console.log(req.query); // print url query
  console.log(req.query.model); // print url model
  res.send({
    products: [{ name: "apple" }, { name: "banana" }],
  });
});

// app.get("/whether", (req, res) => {
//   console.log(req.query); // print url query
//   console.log(req.query.address); // print url address
//   if (!req.query.address) {
//     return res.send({
//       error: "you must enter address",
//     });
//   } else if (req.query.address) {
//     console.log("forecast : cold");
//     res.send({
//       whether: [{ address: req.query.address }, { forecast: "cold" }],
//     });
//   }
//   //   console.log(req.query.forecast); // print url forecast
// });

// lec9
const geocode = require("../data/geocode");
const forecast = require("../data/forecast");

app.get("/whether", (req, res) => {
  console.log(req.query); // print url query
  console.log(req.query.address); // print url address
  if (!req.query.address) {
    return res.send({
      error: "you must enter address",
    });
  } else {
    geocode(req.query.address, (error, data) => {
      if (error) {
        return res.send({ error }); // handle any error from geocode
      } else {
        forecast(data.latitude, data.longtitude, (error, forecastData) => {
          if (error) {
            return res.send({ error }); // handle any   error from forecast
          } else {
            res.send({
              location: req.query.address,
              forecast: forecastData,
            });
          }
        });
      }
    });
  }
  //   console.log(req.query.forecast); // print url forecast
});

app.get("*", (req, res) => {
  // when page not foud or route not found
  res.send(
    "<h1 style='color:red;'><center>Page Not Fount</center></h1><h2><center>Try Again</center</h2>"
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
