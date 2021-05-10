import { Router, Request, Response } from "express";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);

  route.post("signup", (req: Request, res: Response) => {
    return res.json({ msg: "signup route" }).status(200);
  });
};
