import config from "../../../config";
import { createConnection } from "typeorm";
import { User } from "../models";

export default async (): Promise<any> => {
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
};
