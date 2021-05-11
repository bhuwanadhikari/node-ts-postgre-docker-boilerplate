import expressLoader from "./express";
import dbLoader from "./db";
import swaggerLoader from "./swagger";

export default async ({ app }: any) => {
  //db connection
  await dbLoader();

  //load the swagger
  swaggerLoader({ app: app });

  //load the express server
  expressLoader({ app: app });
};
