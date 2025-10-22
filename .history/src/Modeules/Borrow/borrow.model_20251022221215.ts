import { Schema } from "mongoose";
import { Borrow } from "./borrow.interface";

const BorrowSchema = new Schema<Borrow>({
    book:{type:Schema.Types.ObjectId,ref:"book",required:true},
    quantity:{type:Number, min:0,required:true},
    dueDate:{type:Date,required:true}
})