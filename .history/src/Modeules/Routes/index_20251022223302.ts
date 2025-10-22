import {Router} from "express"
import BookRoute from "../Book/book.route";
import borrowBookRoute from "../Borrow/borrow.route";


const routes = Router();
routes.use("/books",BookRoute)
routes.use("/borrow",borrowBookRoute)

export default routes;