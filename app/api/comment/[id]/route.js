import mongoDbConnect from "@/lib/mongo";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(req,content){
    try {
        const query = content.params.id;
       const {userEmail} = await req.body;
       const {userName} = req.body;
        console.log(userEmail)
        const payload = await req.json();
        console.log(payload.userEmail)
        await mongoDbConnect();
        const product = await Comment.create({productId:query,userEmail:payload.userEmail,rating:payload.rating, comment:payload.comment})
        
        return NextResponse.json({message:"submited"},{status: 201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}