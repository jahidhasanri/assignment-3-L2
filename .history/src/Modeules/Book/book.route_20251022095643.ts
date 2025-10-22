import { Router } from "express"
import { BookController } from "./book.controller";

const BookRoute = Router();
BookRoute.post('/',BookController.CreateBook);
BookRoute.get('/',BookController.GetAllbook);
BookRoute.get('/:BookId',BookController.GetBookById);
export default BookRoute;