import { Request, Response } from "express"
import Book from "../Book/book.model";

const borrowBook =async(req:Request,res:Response)=>{
    try {
        const {book,quantity,dueDate}=req.body;
        const findBook = await Book.findById(book);
        if (!findBook) {
      return res.status(404).send({
        success: false,
        message: "Book not found",
      });
    }

    } catch (error) {
        
    }

}