const express = require("express");
const logger = require("morgan");
const path = require("path");

const animalRouter = require("./routes/animalRouter");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// ask how this works:
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/animal", animalRouter);

app.listen(PORT, function () {
    console.log('Server is now running on PORT 3000')
});