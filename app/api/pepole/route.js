import { verifyJWT } from "@/app/component/jwt";
import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await mongoDbConnect();

    const verified = verifyJWT(req);
    if (verified) {
      const user = await User.find();
      return NextResponse.json({ user });
    } else {
      return NextResponse.json({ msg: "unauthorize access" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ msg: "unauthorize access" }, { status: 404 });
  }
}
