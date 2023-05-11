import connectDB from "@/app/utils/connectDB";
import { NextResponse } from "next/server";
import Phonebook from "@/app/models/Phonebook";

export async function GET(req){
    try{
        await connectDB();
        const data=await Phonebook.find();
        return NextResponse.json({data},{status:200});
    }
    catch(e){
        return NextResponse.json({"msg":"server error"},{status:500})
    }
}

export async function POST(req){
    try{
        await connectDB();
        const data= await req.json();
        await Phonebook.create(data);
        return NextResponse.json({data},{status:200})
    }
    catch(e){
        return NextResponse.json({"msg":"server error"},{status:500})
    }
}