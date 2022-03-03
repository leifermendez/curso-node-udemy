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
 * Get all tracks
 * @swagger
 * /tracks:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "List all tracks"
 *      description: List all tracks with details
 *      security:
 *        - bearerAuth: []
 *      responses:
 *        '200':
 *          description: .
 *        '402':
 *          description: Not allow because you need more permissions
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.get("/", authMiddleware, getItems);
/**
 * Get track
 * @swagger
 * /tracks/{id}:
 *    get:
 *      tags:
 *        - tracks
 *      summary: "Get track"
 *      description: Get track detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID track"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */
router.get("/:id", authMiddleware, validateId, getItem);
/**
 * Post new track
 * @swagger
 * /tracks:
 *    post:
 *      tags:
 *        - tracks
 *      summary: "Add track"
 *      description: Add new track with detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "body"
 *           name: "body"
 *           description: "parametros requeridos para insertar comentrario"
 *           required: true
 *           schema:
 *              $ref: "#/definitions/track"
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.post(
  "/",
  authMiddleware,
  authRolMiddleware(["admin"]),
  validateObjectDataCreate,
  createItem
);
/**
 * Upadte new track
 * @swagger
 * /tracks/{id}:
 *    put:
 *      tags:
 *        - tracks
 *      summary: "Update track"
 *      description: Update track with detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "body"
 *           name: "body"
 *           description: "parametros requeridos para insertar comentrario"
 *           required: true
 *           schema:
 *              $ref: "#/definitions/track"
 *        -  in: "path"
 *           name: "id"
 *           description: "ID track"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 */
router.put("/:id", authMiddleware, validateObjectDataUpdate, updateItem);
/**
 * Delete track
 * @swagger
 * /tracks/{id}:
 *    delete:
 *      tags:
 *        - tracks
 *      summary: "Delete track"
 *      description: Delete track detail
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *        - bearerAuth: []
 *      parameters:
 *        -  in: "path"
 *           name: "id"
 *           description: "ID track"
 *           required: true
 *           schema:
 *              type: string
 *    responses:
 *      '201':
 *        description: retorna el objeto insertado en la coleccion con stado '201'
 * 
 */
router.delete("/:id", authMiddleware, validateId, deleteItem);

module.exports = router;
