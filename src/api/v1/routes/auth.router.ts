import { Router, Request, Response } from "express";
import AuthController from "../controllers/auth.controller";

const route = Router();

export default (app: Router) => {
  app.use("/auth", route);


  /**
   * /auth/signup
   */
  route.post("/signup", async (req: Request, res: Response) => {
   const controller = new AuthController();
   const response = await controller.signup(req.body);
   res.json(response);
  });


  route.post("/signin", async (req: Request, res: Response) => {
    const controller = new AuthController();
    const response = await controller.signin(req.body);
    res.json(response);
  });
};
