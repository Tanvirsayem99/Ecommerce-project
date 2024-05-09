import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";
import { NextResponse } from "next/server";

export async function GET(req,content){
    try {
        const query = content.params.id;
       
        
        await mongoDbConnect();
        const product = await PostSeller.findOne({approved:true,_id:query});
        const response = NextResponse.json({product},{status: 201})
        return response;
       
      
        
        
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}