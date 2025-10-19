import {Router} from "express"
import BookRoute from "../Book/book.route";


const routes = Router();
routes.use("/books",BookRoute)

export default routes;