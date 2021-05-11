import { createConnection } from "typeorm";
import { User } from "../models";

export default async (): Promise<any> => {
  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    entities: [User],
    synchronize: true,
    database: "entranceup",
  });
};
