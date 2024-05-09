import mongoDbConnect from "@/lib/mongo";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken'
export async function POST(req,res){
    try {
        
        const {name, email, password} = await req.json();
        const encryptedPassword = await bcrypt.hash(password, 10);
        await mongoDbConnect();
        await User.create({name, email, password: encryptedPassword});
        const token = jwt.sign({name,email}, 'jwtsecret',{ expiresIn: '1h' });
        
        const response = NextResponse.json({msg:"successfully user created"},{status: 201})
        response.cookies.set('token',token)
        return response;
        
    } catch (error) {
        return NextResponse.json({message:"An error occurred while registering the user"},{status: 500})
    }
}
