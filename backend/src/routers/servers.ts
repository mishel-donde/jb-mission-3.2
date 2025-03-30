import { Router } from "express";
import { getAll, updateStatus } from "../controllers/servers/controller";

const ServersRouter = Router();

ServersRouter.get("/servers", getAll);

ServersRouter.post("/server/status/:serverId", updateStatus);

export default ServersRouter;
