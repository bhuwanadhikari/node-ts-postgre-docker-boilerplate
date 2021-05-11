import swaggerUi from "swagger-ui-express";
import express from "express";


//swagger for api docs
export default ({ app }: { app: express.Application })=> {
   app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
  };
