const errorHandlerMiddleware = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }

  const statusCode = err.statusCode || 500
  const message = err.message || "Something went wrong, try again later"

  res.status(statusCode).json({ message })
}

export default errorHandlerMiddleware

