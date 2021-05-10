import { Router, Request, Response } from "express";
import UserController from "../controllers/user.controller";
const router = Router();

export default (app: Router) => {
  app.use("/users", router);

  router.get("/me", async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.getUsers();
    return res.send(response);
  });
};
