import mongoDbConnect from "@/lib/mongo";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function GET(req,content){
    try {
        const id = content.params.id;
        await mongoDbConnect()
        const comment = await Comment.find({productId:id})
        return NextResponse.json({comment},{status:201})
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}