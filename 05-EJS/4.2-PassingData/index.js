import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Enter Your Name Below",
  }
  res.render("index.ejs", data);
});

app.post("/submit", (req, res) => {
  const data = {
    title: "Your Name has " + (req.body.fName.length + req.body.lName.length) + " characters",
  }
  res.render("index.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
