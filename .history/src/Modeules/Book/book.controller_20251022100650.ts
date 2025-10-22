import { Request, Response } from "express";
import Book from "./book.model";
import { Query } from "mongoose";

const CreateBook= async(req:Request,res:Response)=>{
    try {
        const data= await Book.create(req.body)
        res.send({
            success: true,
            message: "Book created successfully",
            data
        })
        
    } catch (error) {
        res.send({
            message:"Validation failed",
            success:false,
            error
        })
    }
}


const GetBookById = async(req:Request,res:Response)=>{
   try {
     const bookId = req.params.bookId;
    const data = await Book.findById(bookId);
    res.send({
            success:true,
            message:"Books retrieved successfully",
            data
        })
        
    } catch (error) {
        res.send({
            message:"Books retrieved failed",
            success:false,
            error
        })
    }
}



export const BookController = {
    CreateBook,GetAllbook,GetBookById
}