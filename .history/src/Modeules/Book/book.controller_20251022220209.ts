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

const GetAllbook = async(req:Request,res:Response)=>{
    try {
        const {filter,sortBy = "createdAt",sort = "desc",limit=10}=req.query;
        const query:any ={};
        if(filter){
            query.genre=filter;
        }
        const data = await Book.find(query)
        .sort({[sortBy as string]: sort === "asc"?1:-1})
        .limit(Number(limit));
        res.send({
            success:true,
            message:"Books retrieved successfully",
            count:data.length,
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

const UpdateBook = async (req:Request,res:Response)=>{
    try {
        const bookId= req.params.bookId;
    const data = await Book.findByIdAndUpdate(bookId,req.body,{new:true,runValidators:true})
    res.send({
        success:true,
        message:"Book updated successfully",
        data
    })
        
    } catch (error) {
        res.send({
            success:false,
            message:'Book can not updated',
            error
        })
    }
}

const DeleteBook = async (req:Request,res:Response)=>{
    try {
        const bookId= req.params.bookId;
    const data = await Book.findByIdAndDelete(bookId);
    res.send({
        success:true,
        message:"Book deleted successfully",
        data=null
    })
    } catch (error) {
        res.send({
            success:false,
        message:"Book can't deleted! something is wrong",
        error
        })
    }
}

export const BookController = {
    CreateBook,GetAllbook,GetBookById,UpdateBook,DeleteBook
}