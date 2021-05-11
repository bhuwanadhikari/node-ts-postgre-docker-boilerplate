import cors from "cors";
import morgan from "morgan";
import express from "express";
import swaggerUi from "swagger-ui-express";

import routes from "../../v1/index";
import config from "../../../config";



export default async ({ app }: { app: express.Application }) => {

  //use morgan for logging
  app.use(morgan('dev'));

  //for static files
  app.use(express.static("public"));


  //swagger for api docs
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );

  /**
   * Health Check endpoints
   * @TODO Explain why they are here
   */
  app.get("/status", (req, res) => {
    res.status(200).end();
  });
  app.head("/status", (req, res) => {
    res.status(200).end();
  });

  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());

  // Middleware that transforms the raw string of req.body into json
  app.use(express.json());
  // Load API routes
  app.use(config.api.prefix, routes());

};
