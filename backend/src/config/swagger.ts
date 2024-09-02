import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Restaurant AntD Swagger API',
      version: '1.0.0',
      description: 'Swagger documentation for the restaurant-antd REST API',
    },
  },
  apis: ['./routes/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
