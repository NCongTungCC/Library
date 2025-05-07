const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'Simple library management API',
    },
    servers: [
      { url: 'http://localhost:3000/libary' },
    ],
  },
  apis: ['./route/*.js'], // chỉ đến folder chứa các route
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;