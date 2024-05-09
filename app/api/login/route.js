import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
export async function POST(req) {
  
    const { email, password } = await req.json();
    await mongoDbConnect();
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "user does not exit" },
        { status: 500 }
      );
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ message: "wrong password" }, { status: 500 });
    }
    const token = jwt.sign({ email }, "jwtsecret");

    const response = NextResponse.json(
      { msg: "successfully user created", ok: true },
      { status: 201 }
    );
    response.cookies.set("token", token);
    return response;
  
}
