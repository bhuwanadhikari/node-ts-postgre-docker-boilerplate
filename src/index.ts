import express from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import config from './config';

const app = express();



async function startServer() {
  const app = express();

  /**
   * A little hack here
   * Import/Export can only be used in 'top-level code'
   * Well, at least in node 10 without babel and at the time of writing
   * So we are using good old require.
   **/
  await require('./api/v1/loaders').default({ expressApp: app });

  app.listen(config.port, () => {
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
  }).on('error', err => {
    process.exit(1);
  });

}

startServer();

// app.listen(process.env.PORT, () => {
//   console.log(`Server listening in port {process.env.PORT}`);
// });
