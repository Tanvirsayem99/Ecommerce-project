import mongoDbConnect from "@/lib/mongo";
import Seller from "@/models/seller";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        await mongoDbConnect();
        const seller = await Seller.find();
        return NextResponse.json({seller},{status:201})
    } catch (error) {
        return NextResponse.json({msg:"some problem faced while searching sellers"},{status:404})
    }
}