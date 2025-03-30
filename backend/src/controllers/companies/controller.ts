import { NextFunction, Request, Response } from "express";
import Companies from "../../models/companies";

export async function getAllCompanies(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const companies = await Companies.findAll();
    res.status(200).json(companies);
  } catch (e) {
    next(e);
  }
}
