const omitEmpty = require("omit-empty");
const { BookModel } = require("../model/bookModel");
const { isValidObjectId } = require("mongoose");

const get = async (req, res, next) => {
    const result = await BookModel.find()
    res.render("../view/index.ejs", { books: result })
};
const getOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) throw {
            status: 401,
            message: "your id isnot valid. enter a valid ID."
        };
        const result = await BookModel.findOne({ _id: id });
        if (!result) throw {
            status: 404,
            message: "not found your book"
        }
        res.send(result)
    } catch (error) {
        next(error)
    }
};
const create = async (req, res, next) => {
    try {
        const { name, page, author, detail, lang, publisher } = req.body;
        const create = await BookModel.create({ name, page, author, detail, lang, publisher })
        res.send(create)
    } catch (error) {
        next(error)
    }
};

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = omitEmpty(req.body);
        const book = await BookModel.findOne({ _id: id })
        if (!book) {
            throw { status: 404, message: "not Found your book Id" }
        }

        const updated = await BookModel.updateOne({ _id: id }, {
            $set: data
        })

        res.send(updated)
    } catch (error) {
        next(error)
    }
};

const insertmany = async (req, res, next) => {
    try {
        const result = await BookModel.insertMany([
            {
                name: "name1",
                page: 235,
                author: "author1",
                publisher: "n1"
            },
            {
                name: "name2",
                page: 94,
                author: "author2",
                publisher: "n2"
            }
        ]);
        res.send(result)
    } catch (error) {
        next(error)
    }
}
const deleteOne = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!isValidObjectId(id)) throw {
            status: 401,
            message: "this id is not valid"
        }
        const book = await BookModel.findOne({ _id: id });
        if (!book) throw {
            status: 404,
            message: "your book not found in database"
        }
        const result = await BookModel.deleteOne({ _id: id });
        res.send(result)
    } catch (error) {

        next(error)
    }
}
const deleteAll = async (req, res, next) => {
    try {
        const result = await BookModel.deleteMany({});
        res.send(result);
    } catch (error) {
        next(error)
    }
}
const clearsome = async (req, res, next) => {
    try {
        const result = await BookModel.deleteMany({
            page: { $gte: 150 }
        })
        res.send(result)
    } catch (error) {
        next(error)
    }
}
const updatesome = async (req, res, next) => {
    try {
        const result = await BookModel.updateMany({ lang: "FA" }, {
            $set: {
                detail: "some Persian detail"
            }
        })
        res.send(result)
    } catch (error) {
        next(error)
    }
}
module.exports = {
    get,
    getOne,
    create,
    update,
    insertmany,
    deleteOne,
    deleteAll,
    clearsome,
    updatesome
}