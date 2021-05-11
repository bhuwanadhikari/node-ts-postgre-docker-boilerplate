import express from "express";
import config from "./config";

async function beginServer() {
  const app = express();

  //require has to be used here, import availabe only at top level
  await require("./api/v1/loaders").default({ app: app });

  app
    .listen(config.port, () => {
      console.log(`\n 💪💪 Server is listening on port: ${config.port}  💪💪 \n`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
}

beginServer();
