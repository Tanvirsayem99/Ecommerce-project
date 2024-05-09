import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";
import Review from "@/models/review";

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
        const product = await Review.create({productId:query,userEmail:payload.userEmail,userName:payload.userName})
        
        return NextResponse.json({message:"submited"},{status: 201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}
export async function GET(req,content){
    try {
        const email = content.params.id;
        const query = {userEmail:email}
        await mongoDbConnect();
        const product = await Review.find({userEmail:email}).populate('productId')
        return NextResponse.json({product},{status: 201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}
export async function DELETE(req,content){
    try {
        const id = content.params.id;
        
        await mongoDbConnect();
        const product = await Review.deleteOne({productId:id})
        return NextResponse.json({message:"item deleted"},{status: 201});
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}