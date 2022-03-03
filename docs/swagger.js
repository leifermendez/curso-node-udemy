const swaggerJsdoc = require("swagger-jsdoc");

/**
 *     {
      url: "https://staging.gigantic-server.com/v1",
      description: "Staging server",
    }
 */

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API Spotify",
    description: "Esta documentación de api de genera automaticamente",
    contact: {
      name: "Curso AWS",
      url: "https://link.codigoencasa.com/CURSO",
      email: "leifer.contacto@gmail.com",
    }
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development server",
    },
  ],
  schemes: ["http"],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
  definitions: {
    track: {
      type: "object",
      required: ["name", "album", "cover", "artist", "duration", "mediaId"],
      properties: {
        name: {
          type: "string",
        },
        album: {
          type: "string",
        },
        cover: {
          type: "string",
        },
        mediaId: {
          type: "string",
        },
        artist: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            nickname: {
              type: "string",
            },
            nationality: {
              type: "string",
            },
          },
        },
        duration: {
          type: "object",
          properties: {
            start: {
              type: "integer",
            },
            end: {
              type: "integer",
            },
          },
        },
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);
module.exports = openapiSpecification;
