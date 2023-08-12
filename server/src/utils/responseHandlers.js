export const successResponse = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({
    ok: true,
    message: message,
    data: data,
  });
};

export const errorResponse = (res, statusCode, message, data = {}) => {
  return res.status(statusCode).json({
    ok: false,
    message: message,
    data: data,
  });
};


