const { body, param, validationResult } = require('express-validator');

const validateUser = [
  body('name').isString().withMessage('Nama tidak boleh kosong!'),
  body('email').isEmail().withMessage('Email tidak sesuai format!.'),
  body('age').isInt({ min: 0 }).withMessage('Umur tidak boleh kurang dari 0 tahun'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateId = [
  param('id').isUUID().withMessage('Invalid UUID format.'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUser, validateId };
