import { Router, Request, Response } from "express";
import UserController from "../controllers/user.controller";
const router = Router();

export default (app: Router) => {
  app.use("/users", router);

  router.get("", async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.getUsers();
    return res.send(response);
  });

  router.get("/create", async (req: Request, res: Response) => {
    const controller = new UserController();
    const response = await controller.createUser(req.body);
    return res.send(response);
  });
};
