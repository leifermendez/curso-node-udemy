const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const { validateRegister, validateLogin } = require("../validators/auth");

/**
 * Register new user
 * @swagger
 * /auth/register:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Register user"
 *      description: Obtener la lista de canciones
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
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
router.post("/register", validateRegister, registerCtrl);

/**
 * Register new user
 * @swagger
 * /auth/login:
 *    post:
 *      tags:
 *        - auth
 *      summary: "Login user"
 *      description: Obtener la lista de canciones
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
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
router.post("/login", validateLogin, loginCtrl);

module.exports = router;
