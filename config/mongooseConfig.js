const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });
const Url = process.env.DBURL;
mongoose.set("strictQuery", true)
try {
    mongoose.connect(Url)
    console.log("db connected")

} catch (error) {
    console.log(err.message)
}
