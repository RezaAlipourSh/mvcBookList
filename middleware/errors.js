const notfound = (req, res, next) => {
    return res.status(404).json({
        statuscode: res.statusCode,
        error: {
            type: 'NotFound',
            message: "not found your address" + req.url,
        },
    })
}

const errorHandle = (err, req, res, next) => {
    return res.json({
        statusCode: err.status || 500,
        data: {
            message: err.message || "internalError"
        }
    })
}

module.exports = {
    notfound,
    errorHandle
}