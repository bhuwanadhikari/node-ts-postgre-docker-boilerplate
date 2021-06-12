// import dotenv from "dotenv";

// // Set the NODE_ENV to 'development' by default
// process.env.NODE_ENV = process.env.NODE_ENV || "development";

// const envFound = dotenv.config();
// if (envFound.error) {
//   // This error should crash whole process

//   throw new Error("⚠️  Couldn't find .env file  ⚠️");
// }

export default {
  /**
   * Your favorite port
   */
  // port: parseInt(process.env.PORT, 10),
  port: process.env.PORT,

  /**
   * That long string from mlab
   */
  //   databaseURL: process.env.MONGODB_URI,

  /**
   * Your secret sauce
   */
  jwtSecret: process.env.JWT_SECRET || "secret",
  //   jwtAlgorithm: process.env.JWT_ALGO,

  /**
   * Used by winston logger
   */
  //   logs: {
  //     level: process.env.LOG_LEVEL || 'silly',
  //   },

  /**
   * API configs
   */
  api: {
    prefix: "/api/v1",
  },
  postgres: {
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
  },
 
  /**
   * Mailgun email credentials
   */
  // emails: {
  //   apiKey: process.env.MAILGUN_API_KEY,
  //   apiUsername: process.env.MAILGUN_USERNAME,
  //   domain: process.env.MAILGUN_DOMAIN
  // }
};
