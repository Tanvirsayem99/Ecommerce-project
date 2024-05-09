import mongoDbConnect from "@/lib/mongo";
import ApproveSeller from "@/models/approvedSeller";
import { NextResponse } from "next/server";

export async function GET(req, content) {
    try {
        const email = content.params.id;
        
        await mongoDbConnect();
            const product = await ApproveSeller.findOne({ email: email });
            if(product){
                return NextResponse.json({seller:true},{status: 201});
            }
            else{
                return NextResponse.json({seller:false},{status: 401})
            }
            
    } catch (error) {
        return NextResponse.json({ message: "An error occurred while registering the user" }, { status: 500 })
    }
}