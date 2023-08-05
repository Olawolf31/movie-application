
const successResponse = (res, statusCode, message, data = {}) => {
    return res.status(statusCode).send({
      ok: true,
      message: message,
      data: data,
    });
  };

  
export default successResponse