import mongoDbConnect from "@/lib/mongo";
import Seller from "@/models/seller";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { authorEmail, authorName, companyName, address, numbers,picture } =
      await req.json();
      
    await mongoDbConnect();
    await Seller.create({
      authorEmail,
      authorName,
      companyName,
      address,
      numbers,
      picture
    });
    const response = NextResponse.json(
      { msg: "successfully post seller application" },
      { status: 201 }
    );
    return response;
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "An error occurred while posting seller application" },
      { status: 500 }
    );
  }
}

export async function DELETE(req,content){
  const id = content.params.editseller;
  console.log(id)
  const query = {_id:id}
  await mongoDbConnect()
  const result = await Seller.deleteOne(query)
  return NextResponse.json({result},{success: true})
}
export async function GET(req,content){
  const email = content.params.editseller;
  const query = {authorEmail:email}
  
  await mongoDbConnect()
  const result = await Seller.findOne(query)
  if(result){
    return NextResponse.json({result,ok:true},{success: true})
  }
  return NextResponse.json({message:"no data found",ok:false},{status:404})
  
}

