const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const mainRoute = require("./router");
const { notfound, errorHandle } = require("./middleware/errors");

dotenv.config();
dotenv.config({ path: path.join(__dirname, '.env') });
const { PORT } = process.env;

app.set("view engine", "ejs");
require("./config/mongooseConfig");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("view"))

app.use(mainRoute);

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "/view", "notfoundPage"))
});

app.use(notfound);
app.use(errorHandle);

app.listen(PORT, () => {
    console.log(`http://127.0.0.1:${PORT}`);
});
