import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
export const verifyJWT = (req) =>{
  const authorizationHeader = new Headers(req.headers);
  const authorization = authorizationHeader.get("authorization")
  const token = authorization.split(' ')[1];
    if(!authorization){
      return null;
    }
    // console.log(authorization)
    try {
      const decoded = jwt.verify(token, 'jwtsecret',{ algorithms: ['HS256']});
    return {decoded};
    } catch (error) {
      return null;
    }
    
  }

