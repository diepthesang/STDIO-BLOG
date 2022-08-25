
function handleErrorRoute(req, res, next) {
    const err = new Error('Can not request with route')
    err.status = 404;
    next(err)
}


function handleError(err, req, res, next) {
    res.status(err.status || 500).json(
        {
            status: err.status || 500,
            message: err.message || 'Không có tài nguyên!'
        }
    )
}



module.exports = { handleErrorRoute, handleError }