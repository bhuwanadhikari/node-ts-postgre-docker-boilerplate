import config from "../../../config";
import { createConnection } from "typeorm";
import { User } from "../models";

export default async (): Promise<any> => {

  console.log("These are the database configs", config);

  try {
    await createConnection({
      type: "postgres",
      host: config.postgres.host,
      port: parseInt(config.postgres.port || "5432"),
      username: config.postgres.username,
      password: config.postgres.password,
      entities: [User],
      synchronize: true,
      database: config.postgres.database,
    });
    console.log("Database connection done...")
  } catch (e) {
    console.log("Error while database is trying to connect;")
    console.log(e);
  }
};
