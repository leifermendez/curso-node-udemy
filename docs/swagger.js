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
    title: "Sample Pet Store App",
    description: "This is a sample server for a pet store.",
    termsOfService: "http://example.com/terms/",
    contact: {
      name: "API Support",
      url: "http://www.example.com/support",
      email: "support@example.com",
    },
    license: {
      name: "Apache 2.0",
      url: "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
    version: "1.0.1",
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
