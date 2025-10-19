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
            success:false,
            message:"error happen",
            error
        })
    }
}