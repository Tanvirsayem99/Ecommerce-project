import mongoDbConnect from "@/lib/mongo";
import Order from "@/models/order";
import { NextResponse } from "next/server";

export async function POST(req,content){
    try {
        const query = content.params.id;
       const {userEmail} = await req.body;
       const {userName} = req.body;
        const payload = await req.json();
        console.log(payload.userEmail)
        console.log(payload.userEmail)
        await mongoDbConnect();
        const order = await Order.create({productId:query,userEmail:payload.userEmail,userName:payload.userName,address:payload.address,amount:payload.amount,quantity:payload.quantity})
        
        return NextResponse.json({message:"submited"},{status: 201});
       
      
        
        
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}