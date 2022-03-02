const express = require("express");
const router = express.Router();
const {
  getItem,
  getItems,
  updateItem,
  createItem,
  deleteItem,
} = require("../controllers/tracks");
const authMiddleware = require("../middleware/auth");
const authRolMiddleware = require("../middleware/rol");
const {
  validateId,
  validateObjectDataCreate,
  validateObjectDataUpdate,
} = require("../validators/tracks");
/**
 * Route get items from database
 */
router.get("/", authMiddleware, getItems);
/**
 * Route get item for detail
 */
router.get("/:id", authMiddleware, validateId, getItem);
/**
 * Route for create row for track
 */
router.post(
  "/",
  authMiddleware,
  authRolMiddleware(["admin"]),
  validateObjectDataCreate,
  createItem
);
/**
 * Route for update track
 */
router.put("/:id", authMiddleware, validateObjectDataUpdate, updateItem);
/**
 * Route get item for detail
 */
router.delete("/:id", authMiddleware, validateId, deleteItem);

module.exports = router;
