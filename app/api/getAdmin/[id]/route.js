import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    try {
        const email = content.params.id;
        
        await mongoDbConnect();
            const product = await User.findOne({ email: email,role:"admin" });
            if(product){
                return NextResponse.json({admin:true},{status: 201});
            }
            else{
                return NextResponse.json({admin:false},{status: 401})
            }
            
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while registering the user" }, { status: 500 })
    }
}