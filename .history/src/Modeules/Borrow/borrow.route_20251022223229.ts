import { Router } from "express";
import { borrowControler } from "./borrow.controller";

const borrowBookRoute = Router();
borrowBookRoute.post("/",borrowControler.borrowBook)
export default borrowBookRoute;