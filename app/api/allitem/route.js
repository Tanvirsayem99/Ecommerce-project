import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await mongoDbConnect();
        const posts = await PostSeller.find();
        return NextResponse.json({posts},{status:201})
    } catch (error) {
        return NextResponse.json({msg:"some problem faced while searching sellers"},{status:404})
    }
}