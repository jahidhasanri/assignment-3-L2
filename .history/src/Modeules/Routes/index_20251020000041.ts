import {Router} from "express"
import BookRoute from "../Modeules/Book/book.route";


const routes = Router();
routes.use("/books",BookRoute)

export default routes;