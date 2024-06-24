const { Router } = require("express");
const bookRoute = require("./bookRouter")

const route = Router();

route.use("/books", bookRoute)

module.exports = route
