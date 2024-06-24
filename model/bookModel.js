const { Schema, model } = require("mongoose");


const bookSchema = new Schema({
    name: { type: String, required: true, },
    detail: { type: String, default: "" },
    page: { type: Number, required: true, trim: true },
    author: { type: String, required: true, minLength: 4 },
    lang: { type: String, default: "FA" },
    publisher: { type: String, required: true }
}, {
    timestamps: true
})

const BookModel = model("book", bookSchema);

module.exports = {
    BookModel,
}