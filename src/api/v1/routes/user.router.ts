import { Router, Request, Response } from "express";
import UserService from "../services/user.service";
const router = Router();

export default (app: Router) => {
  app.use("/users", router);

  router.get("", async (req: Request, res: Response) => {
    const service = new UserService();
    const response = await service.getUsers();
    return res.send(response);
  });

  router.get("/create", async (req: Request, res: Response) => {
    const service = new UserService();
    const response = await service.createUser(req.body);
    return res.send(response);
  });
};
