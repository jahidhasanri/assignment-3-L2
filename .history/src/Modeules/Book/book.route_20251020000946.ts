import { Router } from "express"
import { BookController } from "./book.controller";

const BookRoute = Router();
BookRoute.post('/api',BookController.CreateBook);
export default BookRoute;