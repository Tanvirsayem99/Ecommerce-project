import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";
import { NextResponse } from "next/server";


export async function PUT(req,content){
    try {
        
            const id = content.params.id;
        const query = {_id : id};
        const payload = await req.json();
        await mongoDbConnect();
            await PostSeller.findOneAndUpdate(query,payload);
           return NextResponse.json({msg:"successfully user created"},{status: 201})
        
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}

export async function GET(req,content){
    try {
        
        const email = content.params.id;
        const popertyName = "approved"
        await mongoDbConnect();
           const product =  await PostSeller.find({authorEmail:email,[popertyName]:{$exists:true}}).sort({ createdAt: 1 });
           return NextResponse.json(product)
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}


