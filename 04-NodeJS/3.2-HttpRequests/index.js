import express from "express";
const app = express();
const port = 3000;


app.get("/", (req,res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Hello None</h1>");
});

app.get("/about", (req,res) => {
    res.send("<h1>About Me</h1>");
});

app.get("/contact", (req,res) => {
    res.send("<p>admin@thepakistandream.com</p>");
});

app.listen(port, () => {
    console.log(`Server running port ${port}.`);

})


// import express from "express";
// const app = express();
// const port = 3000;



// app.listen(port, () => {
//     console.log(`Server running on port ${port}.`);
// });

