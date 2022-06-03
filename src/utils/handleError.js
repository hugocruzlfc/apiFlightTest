const handleHttpError = (res, message, code) => {
  res.status(code);
  res.status({ error: message });
};

module.exports = { handleHttpError };
