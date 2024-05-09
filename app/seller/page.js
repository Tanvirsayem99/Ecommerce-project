"use client";
import { GiShoppingCart } from "react-icons/gi";
import carts from "@/public/carts.png"
import singlecart from "@/public/singlecart.png"
import bag1 from "@/public/bag1.png"

import Image from "next/image";
import Formseller from "../component/Formseller";
import getAllposts from "../getApi/getAllposts";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import React, { useState,useEffect } from 'react';
// import { useSession } from "next-auth/react";
const page = () => {
    const [seller,setSeller] = useState([])
    const [exist,setExist] = useState([])
    const { data: session } = useSession();
    const[loading, setLoading] = useState(false)
    const[loading2, setLoading2] = useState(false)
    const [clicker, setClicker] = useState(true)
    const router = useRouter()
    useEffect(()=>{
        if(session){
            fetch("http://localhost:3000/api/appliedseller/"+session?.user?.email)
        .then(res =>res.json())
        .then(data =>{setSeller(data),setLoading(true)})
        }
        
      },[session,clicker])
    useEffect(()=>{
        if(session){
            fetch("http://localhost:3000/api/getapprovedseller/"+session?.user?.email)
        .then(res =>res.json())
        .then(data =>{setExist(data),setLoading2(true)})
        }
        
      },[session,clicker])
    
     if(session && exist.ok && !seller.ok){
        return (
            <div className="bg-[#FEF1C5] grid items-center justify-center h-[90vh]">
            <div className="text-center  grid items-center justify-center">
                <h1 className="text-4xl text-center mx-auto">you are already a seller</h1>
            </div>
            
        </div>)
     }
    if(seller.ok){
        return(<div className="bg-[#FEF1C5] grid items-center justify-center h-[90vh]">
        <div className="text-center  grid items-center justify-center">
            <h1 className="text-4xl text-center mx-auto">we've recieved your request</h1>
            <p className="text-2xl">Please wait for reply</p>
            
        </div>
        
    </div>)
    }
    
    if(!session){
        return(
            <div>Please login first</div>
        )
    }
    
    
        if(loading && loading2){
        return (
            <div className="bg-[#FEF1C5] h-[87vh] flex gap-80">
                <div className="">
                    <h1 className="text-6xl  font-semibold font-serif pl-5 pt-10">Become a<br/> Seller</h1>
                    <p className="pl-5  text-2xl">Create a Seller Account</p>
                    <div className="relative pl-20 pt-10">
                    <Image src={bag1} alt="cart image" className="w-44 ml-64 top-36 absolute"/>
                    <Image src={carts} alt="cart image" className="w-20 ml-96 absolute"/>
                    <Image src={singlecart} alt="cart image" className="w-72"/>
                    </div>
                    
                </div>
                <div>
                    <Formseller setClicker={setClicker}/>
                </div>
            </div>
        );}
    
    
};


export default page;