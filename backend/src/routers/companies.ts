import { Router } from "express";
import { getAllCompanies } from "../controllers/companies/controller";

const companiesRouter = Router();

companiesRouter.get("/", getAllCompanies);

export default companiesRouter;
