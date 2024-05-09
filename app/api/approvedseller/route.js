import mongoDbConnect from "@/lib/mongo";
import ApproveSeller from "@/models/approvedSeller";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await mongoDbConnect();
    const { authorEmail, authorName, companyName, address, numbers,picture } = await req.json();
    
    await mongoDbConnect();
    await ApproveSeller.create({
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
    return NextResponse.json(
      { msg: "some problem faced while searching sellers" },
      { status: 404 }
    );
  }
}
