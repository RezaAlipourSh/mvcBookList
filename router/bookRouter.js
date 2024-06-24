const { Router } = require("express");
const { get, create, update, getOne, insertmany, deleteOne, deleteAll, clearsome, updatesome } = require("../controllers/bookController");
const route = Router()

route.get("/", get)
route.delete("/", deleteAll)
route.get("/:id", getOne)
route.post("/insertmany", insertmany)
route.post("/create", create)
route.put("/update/:id", update)
route.put("/updatesome", updatesome)
route.delete("/delete/:id", deleteOne)
route.delete("/clearsome", clearsome)

module.exports = route
