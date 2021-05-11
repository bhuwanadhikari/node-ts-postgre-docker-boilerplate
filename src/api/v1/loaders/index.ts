import expressLoader from "./express";
import dbLoader from "./db";

export default async ({ app }: any) => {
  //db connection
  await dbLoader();

  //load the express server
  expressLoader({ app: app });
};
