import express from "express";
import PingService from "../services/ping.service";;

const router = express.Router();

router.get("/ping", async (_req, res) => {
  const service = new PingService();
  const response = await service.getMessage();
  return res.send(response);
});

export default router;