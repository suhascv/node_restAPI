import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:'Enter a first Name'
    },
    lastName:{
        type:String,
        required:'Enter a last Name'
    },
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
});