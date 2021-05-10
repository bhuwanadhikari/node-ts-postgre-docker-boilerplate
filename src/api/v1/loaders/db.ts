import { Pool } from "pg";
import { createConnection } from "typeorm";
import { User } from "../models";

export default async (): Promise<any> => {
  //   const connection = await mongoose.connect(config.databaseURL, {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useUnifiedTopology: true,
  //   });
  //   return connection.connection.db;

  await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    entities: [User],
    synchronize: true,
    name: "blog",
  });
};
