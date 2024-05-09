import mongoDbConnect from "@/lib/mongo";
import PostSeller from "@/models/postSeller";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    try {
        const query = content.params.id;

        
        await mongoDbConnect();
            const product = await PostSeller.findOne({ _id: query });
            return NextResponse.json(product,{status: 201});
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while registering the user" }, { status: 500 })
    }
}
export async function PUT(req, content) {
    try {
        const id = content.params.id;
        const query = {_id : id}
        console.log(query)
        const payload = await req.json();
        console.log(payload)
        
        await mongoDbConnect();
        await PostSeller.findOneAndUpdate(query,payload);
        return NextResponse.json({msg:"successfully user created"},{status: 201})
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while registering the user" }, { status: 500 })
    }
}
