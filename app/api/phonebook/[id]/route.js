import connectDB from "@/app/utils/connectDB";
import { NextResponse } from "next/server";
import Phonebook from "@/app/models/Phonebook";

export async function DELETE(req,{params}){
   try{
    await connectDB();
    const data = await Phonebook.findById(params.id);
    await data.deleteOne();
    return NextResponse.json({data});
   }
   catch(e){
    return NextResponse.json({"error":"server error"})
   }

}

export async function GET(req, {params}){
    try{
        await connectDB()
        const data = await Phonebook.findById(params.id)
        return NextResponse.json({data})
    }
    catch(e){
        return NextResponse.json({"msg":"Something went wrong"})
    }
}

