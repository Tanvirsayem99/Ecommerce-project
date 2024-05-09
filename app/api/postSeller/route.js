import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";

import { NextResponse } from "next/server";
export async function POST(req,res){
    try {
        
        const {productName,
            brandName,
            deliveryTime,
            deliveryFee,
            returnPolicy,
            productPrice,
            productWarrenty,
            producImg,
            model,
            features,
            description,
            authorEmail,
            authorImage,
            authorName} = await req.json();
        await mongoDbConnect();
        await PostSeller.create({productName,
            brandName,
            deliveryTime,
            deliveryFee,
            returnPolicy,
            productPrice,
            productWarrenty,
            producImg,
            model,
            features,
            description,
            authorEmail,
            authorImage,
            authorName});
            const response = NextResponse.json({msg:"successfully user created"},{status: 201})
        
        return response;
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}
