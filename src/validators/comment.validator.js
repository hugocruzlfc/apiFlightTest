const { check, validationResult } = require('express-validator');

const validatorCreateComment = [
  check('comment')
    .exists()
    .notEmpty(),
  check('userId')
    .exists()
    .notEmpty(),
  check('flightId')
    .exists()
    .notEmpty(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (err) {
      res.status(403);
      res.send({ errors: err.message });
    }
  },
];

module.exports = {
  validatorCreateComment,
};
