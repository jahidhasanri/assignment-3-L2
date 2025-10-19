import {Router} from "express"
import BookRoute from "../Modeules/Book/book.route";


const routes = Router();
routes.use("/api/books",BookRoute)

export default routes;