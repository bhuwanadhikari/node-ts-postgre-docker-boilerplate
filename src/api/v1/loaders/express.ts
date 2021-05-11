import cors from "cors";
import express from "express";

import routes from "../../v1/index";
import config from "../../../config";

import { ConnectionOptions, createConnection } from "typeorm";
import { User } from "../models/User";

export default async ({ app }: { app: express.Application }) => {
  const dbConfig: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    entities: [User],
    synchronize: true,
    database: "entranceup",
  };

  //db connection here
  await createConnection(dbConfig);

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

  /// catch 404 and forward to error handler
  //   app.use((req, res, next) => {
  //     const err = new Error("Not Found");
  //     // err['status'] = 404;
  //     next(err);
  //   });

  /// error handlers
  //   app.use((err, req, res, next) => {
  //     /**
  //      * Handle 401 thrown by express-jwt library
  //      */
  //     if (err.name === 'UnauthorizedError') {
  //       return res
  //         .status(err.status)
  //         .send({ message: err.message })
  //         .end();
  //     }
  //     return next(err);
  //   });
  //   app.use((err, req, res, next) => {
  //     res.status(err.status || 500);
  //     res.json({
  //       errors: {
  //         message: err.message,
  //       },
  //     });
  //   });
};
