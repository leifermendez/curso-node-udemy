const fs = require("fs");
const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleError");
const { storageModel } = require("../models");
const optionsPaginate = require("../config/paginationParams");

const URL_PUBLIC = process.env.URL_PUBLIC || null;
const MEDIA_PATH = `${__dirname}/../storage`;

/**
 * Get detail by single row
 * @param {*} req
 * @param {*} res
 */
const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const [, options] = optionsPaginate(req)
    const data = await storageModel.paginate({}, options);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Upload and create record with public source
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const { file } = req;
    const body = {
      url: `${URL_PUBLIC}/${file.filename}`,
      filename: file.filename,
    };
    const response = await storageModel.create(body);
    res.send({ response });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const id = req.id;
    const findMedia = await storageModel.findById(id);
    const fileName = findMedia.filename;
    await storageModel.delete({ _id: id });
    fs.unlinkSync(`${MEDIA_PATH}/${fileName}`);

    const data = {
      findMedia: fileName,
      deleted: true,
    };

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

module.exports = { getItems, getItem, createItem, deleteItem };
