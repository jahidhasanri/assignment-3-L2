import {Router} from "express"
import BookRoute from "../Book/book.route";


const routes = Router();
routes.use("/Book",BookRoute)

export default routes;