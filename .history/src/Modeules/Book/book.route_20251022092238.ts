import { Router } from "express"
import { BookController } from "./book.controller";

const BookRoute = Router();
BookRoute.post('/',BookController.CreateBook);
BookRoute.post('/',BookController.GetAllbook);
export default BookRoute;