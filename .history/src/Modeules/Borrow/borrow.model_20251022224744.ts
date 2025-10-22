import { model, Schema } from "mongoose";
import { Borrow } from "./borrow.interface";

const BorrowSchema = new Schema<Borrow>({
    book:{type:Schema.Types.ObjectId,ref:"Book",required:true},
    quantity:{type:Number, min:1,required:true},
    dueDate:{type:Date,required:true}
},
{timestamps:true})
export const BorrowModel = model<Borrow>("Borrow", BorrowSchema);