const express = require("express");
const router = express.Router();
const { getItem, getItems, createItem, deleteItem } = require("../controllers/storage");
const { validateId } = require("../validators/storage");
const { upload } = require("../utils/handleStore");

/**
 * Route for create and upload file
 */
router.post("/", upload.single("file"), createItem);

/**
 * Route for get all rows
 */
router.get("/", getItems);

/**
 * Route for get media file
 */
router.get("/:id", validateId, getItem);

/**
 * Route for delete media file
 */
router.delete("/:id", validateId, deleteItem);



module.exports = router;
