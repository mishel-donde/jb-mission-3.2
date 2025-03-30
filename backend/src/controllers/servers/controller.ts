import { NextFunction, Request, RequestHandler, Response } from "express";
import Server from "../../models/server";
import Companies from "../../models/companies";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const servers = await Server.findAll({
      include: [
        {
          model: Companies,
          attributes: ["companyName"],
        },
      ],
    });
    res.json(servers);
  } catch (e) {
    next(e);
  }
}

export const updateStatus: RequestHandler = async (
  req,
  res,
  next
): Promise<void> => {
  try {
    const { serverId } = req.params;
    const server = await Server.findByPk(serverId);

    if (!server) {
      res.status(404).json({ message: "Server not found" });
      return;
    }

    server.status = server.status === "Active" ? "Inactive" : "Active";
    await server.save();

    res.status(200).json({ message: "Status updated successfully", server });
  } catch (e) {
    next(e);
  }
};
