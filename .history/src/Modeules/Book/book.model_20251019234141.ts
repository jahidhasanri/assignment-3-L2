import { Schema } from "mongoose";
import { IBook } from "./book.interface";

const BookSchema = new Schema<IBook>({
title:{type:String, trim:true,required:true},
    author:{type:String, trim:true,required:true},
    genre:{type:String, enum:["FICTION" , "NON_FICTION" , "SCIENCE" , "HISTORY" , "BIOGRAPHY" ,"FANTASY"], default:"HISTORY",required:true},
    isbn:{type:String,trim:true,required:true},
    description:{type:String,trim:true,required:true},
    copies:{type:Number,min:0},
    available:{type:Boolean,default:true}
  },
{timestamps:true}
)