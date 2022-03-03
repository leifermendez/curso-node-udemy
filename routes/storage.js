const express = require("express");
const router = express.Router();
const { getItem, getItems, createItem, deleteItem } = require("../controllers/storage");
const { validateId } = require("../validators/storage");
const { upload } = require("../utils/handleStore");
/**
 * Upload file storage
 * @swagger
 * /storage:
 *    post:
 *      tags:
 *        - storage
 *      summary: "Post file .mp3"
 *      description: List all storage with details
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
router.post("/", upload.single("file"), createItem);
/**
 * Get list storages
 * @swagger
 * /storage:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Get list storage"
 *      description: Obtener la lista de canciones
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
router.get("/", getItems);
/**
 * Detalle track
 * @swagger
 * /storage/{id}:
 *    get:
 *      tags:
 *        - storage
 *      summary: "Detalle track"
 *      description: Detalle track with detail
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
router.get("/:id", validateId, getItem);
/**
 * Delete storage
 * @swagger
 * /storage/{id}:
 *    delete:
 *      tags:
 *        - storage
 *      summary: "Delete storage"
 *      description: Delete storage detail
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
router.delete("/:id", validateId, deleteItem);



module.exports = router;
