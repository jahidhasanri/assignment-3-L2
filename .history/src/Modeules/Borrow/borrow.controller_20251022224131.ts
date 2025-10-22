import { Request, Response } from "express"
import Book from "../Book/book.model";
import { BorrowModel } from "./borrow.model";

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
    if(findBook.copies<quantity){
        return res.send({
            success:false,
            message:"Not enough copies available"
        })
    }

    findBook.copies -=quantity;
    if(findBook.copies === 0){
        findBook.available = false;
    }
    await findBook.save();
    const borrowRecord = await BorrowModel.create({
        book,quantity,dueDate
    })
     res.send({
     success: true,
      message: "Book borrowed successfully",
      data: {
        _id: borrowRecord._id,
        book: borrowRecord.book,
        quantity: borrowRecord.quantity,
        dueDate: borrowRecord.dueDate,
        createdAt: borrowRecord.createAt,
        updatedAt: borrowRecord.updatedAt,
      }
    });

    } catch (error) {
         res.send({
      success: false,
      message: "Something went wrong while borrowing the book",
      error,
    });
    }

}

export const borrowControler ={
    borrowBook
}