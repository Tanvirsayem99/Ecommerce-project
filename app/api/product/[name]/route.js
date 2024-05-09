import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";
import { NextResponse } from "next/server";

export async function GET(req,content){
    try {
        const query = content.params.name;
       
        const regex = new RegExp(query, 'i');
        await mongoDbConnect();
        
        
        
       if(query === "none"){
        const product = await PostSeller.find({approved:true});
        const response = NextResponse.json({product},{status: 201})
        return response;
       }
       else{
        const product = await PostSeller.find({productName:regex,approved:true}).lean();
        const response = NextResponse.json({product},{status: 201})
        return response;
        

    }
        
        
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}