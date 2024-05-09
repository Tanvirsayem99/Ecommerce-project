import mongoDbConnect from "@/lib/mongo";
import ApproveSeller from "@/models/approvedSeller";
import { NextResponse } from "next/server";

export async function GET(req,content) {
  try {
    await mongoDbConnect();
    const email = content.params.email;
    const query = {authorEmail:email}
    
    const approvedSeller = await ApproveSeller.findOne(query);
    if(approvedSeller){
      const response = NextResponse.json(
        {approvedSeller,ok:true},
        { status: 201 }
      );
      return response;
    }
    const response = NextResponse.json(
      {msg:"cannot find user",ok:false},
      { status: 201 }
    );
    return response;
    
    
  } catch (error) {
    return NextResponse.json(
      { msg: "some problem faced while searching sellers" },
      { status: 404 }
    );
  }
}
