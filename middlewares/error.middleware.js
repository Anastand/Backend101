const errorMiddleware = (err, req, res, next) => {
  try {
  let error = { ...err };
    error.message = err.message; // doing this because only few proprties are carried over when unwrapping internal messages do not carry over
    console.error(error);
    //doing this for the first time
    // mongoose bad objectID
    if (err.name == 'CastError') {
      const message = "resource not found"
      error = new Error(message);
      error.statusCode = 404;
    }
    // mongoose duplcate key
    if (error==11000) {
      const message = "Duplicate field value found or entered"
      error.message = new Error(message);
      error.statusCode = 400;
    }
    // mongoose validation error
    if (err.name == "validationError") {
      const message = Object.values(error.errors).map(val => val.message);
      error = new Error(message);
      error.statusCode = 400;
    }
    res.staus(error.statusCode || "Internal Error Occured -> 500").json({ success: false, error: error.message || 'server Error' });
  } catch (error) {
    next(error);
  }
};
export default errorMiddleware;