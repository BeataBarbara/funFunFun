const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const path = require('path')
const fromAnotherFile = require("./js/consts")

app.set("view engine", 'hbs')

app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));

app.get('/', function(req, res) {
    res.render('index', {
        pageTitle: "Fun, fun, fun!",
        subTitle: fromAnotherFile.someTitle
    })
})

app.listen(port, (err) => {
    if (err) {
        return console.log("coś poszło nie tak...:", err)
    }
    console.log("serwer działa na porcie", port)
})

console.log('http://localhost:3000/')