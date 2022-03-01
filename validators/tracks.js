const { check } = require("express-validator");
const { validateResult } = require("../utils/handleValidator");
const validateObjectDataCreate = [
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  check("cover").exists().notEmpty().isURL(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateObjectDataUpdate = [
  check("id").exists().notEmpty(),
  check("name").exists().notEmpty(),
  check("album").exists().notEmpty(),
  check("mediaId").exists().notEmpty().isMongoId(),
  check("cover").exists().notEmpty().isURL(),
  check("artist").exists().notEmpty(),
  check("artist.name").exists().notEmpty(),
  check("artist.nickname").exists().notEmpty(),
  check("artist.nationality").exists().notEmpty(),
  check("duration.start").exists().notEmpty(),
  check("duration.end").exists().notEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateId = [
  check("id").exists().isMongoId(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateId, validateObjectDataCreate, validateObjectDataUpdate };
