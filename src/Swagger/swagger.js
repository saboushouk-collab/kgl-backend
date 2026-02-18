const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "KGL API",
            version: "1.0.0"
        }
    },
    apis: []
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
