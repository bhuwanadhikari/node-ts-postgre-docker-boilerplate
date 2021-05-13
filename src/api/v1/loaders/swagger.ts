import swaggerUi from "swagger-ui-express";
import express from "express";
import swaggerJsDoc from "swagger-jsdoc";
// import {  } from '../routes/user.router'

//swagger for api docs
export default ({ app }: { app: express.Application }) => {
  const swaggerDocs = swaggerJsDoc({
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Entrance up api nformation",
        contact: {
          name: "Amazing Developer",
        },
      },
    },
    // ['.routes/*.js']
    apis: [
      "src/api/v1/routes/*.router.ts",
    ],
  });
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
