const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/tracks");
const { validateId, validateObjectDataCreate, validateObjectDataUpdate } = require("../validators/tracks");
/**
 * Route get items from database
 */
router.get("/", getItems);
/**
 * Route get item for detail
 */
router.get("/:id", validateId, getItem);
/**
 * Route for create row for track
 */
router.post("/", validateObjectDataCreate, createItem);
/**
 * Route for update track
 */
router.put("/:id", validateObjectDataUpdate, updateItem);
/**
 * Route get item for detail
 */
router.delete("/:id", validateId, deleteItem);

module.exports = router;
