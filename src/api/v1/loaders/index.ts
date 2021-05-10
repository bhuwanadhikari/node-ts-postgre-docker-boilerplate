import expressLoader from "./express";

export default async ({ expressApp }: any) => {
  //load the express server
  expressLoader({ app: expressApp });
};
