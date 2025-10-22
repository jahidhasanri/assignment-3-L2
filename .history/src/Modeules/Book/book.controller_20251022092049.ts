import { Request, Response } from "express";
import Book from "./book.model";

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

const GetAllbook = async(req:Request,res:Response)=>{
    try {
        const data = await Book.find();
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
    CreateBook,GetAllbook
}