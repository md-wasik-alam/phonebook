import mongoose from "mongoose";

let PhonebookSchema= new mongoose.Schema({
    name:{type:String},
    contact:{type:String}
},{timestamps:true})

module.exports=mongoose.models.Phonebook || mongoose.model("Phonebook",PhonebookSchema)