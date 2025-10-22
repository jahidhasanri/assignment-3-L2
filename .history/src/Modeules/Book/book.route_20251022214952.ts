import { Router } from "express"
import { BookController } from "./book.controller";

const BookRoute = Router();
BookRoute.post('/',BookController.CreateBook);
BookRoute.get('/',BookController.GetAllbook);
BookRoute.get('/:bookId',BookController.GetBookById);
BookRoute.put('/:bookId',BookController.UpdateBook);
export default BookRoute;