"use client";
import { combineSlices } from "@reduxjs/toolkit";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import getImageposts from "../getApi/getImagePost";
const Formseller = ({setClicker}) => {
    const { data: session } = useSession();
    const [authorName, setAuthorName] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [address, setAddress] = useState("")
    const [numbers, setNumbers] = useState("")
    const [error, setError] = useState("")
    const [file, setFile] = useState("")
    const [loader, setLoader] = useState(true)
    
    const handleSellerForm = async(e) =>{
        e.preventDefault();
        setError("")
        setLoader(false)
        const data1 = new FormData();
        data1.append("image", file);
        
        if(!authorName || !companyName || !address || !numbers || !file ){
            setError("All field are required");
            setLoader(true)
            return;
        }else{
          const { data } = await getImageposts(data1);
          const res = await fetch("api/appliedseller/"+{numbers}, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              authorEmail : session?.user.email,
              authorName,
              companyName,
              address,
              numbers,
              picture : data.display_url
            }),
          });
          if(res.ok){
            setClicker(false)
            e.target.reset()
            setLoader(true)
            
          }
        }
        
        // console.log(session?.user?.email, authorName ,companyName ,address ,numbers)
        
    }
    
  return (
    <div className="bg-white rounded-lg rounded-s-lg shadow-lg mt-14 px-10 py-5">
      <h1 className="text-3xl text-center">Create an Account</h1>
      <form className="grid gap-3 mx-auto w-11/12 pr-8" onSubmit={(e)=>handleSellerForm(e)}>
        <div className="grid gap-1">
          <span>Author-Email</span>
          <input type="email" defaultValue={session?.user?.email} readOnly className="outline-none bg-slate-200 rounded-md pl-2 py-1 w-96"/>
        </div>
        <div className="grid gap-1">
          <span>Author-Name</span>
          <input type="text" onChange={(e)=>setAuthorName(e.target.value)} className="outline-none bg-slate-200 rounded-md pl-2 py-1"/>
        </div>
        <div className="grid gap-1">
          <span>Company-Name</span>
          <input type="text" onChange={(e)=>setCompanyName(e.target.value)} className="outline-none bg-slate-200 rounded-md pl-2 py-1"/>
        </div>
        <div className="grid gap-1">
          <span>Address</span>
          <input type="text" onChange={(e)=>setAddress(e.target.value)} className="outline-none bg-slate-200 rounded-md pl-2 py-1"/>
        </div>
        <div className="grid gap-1">
          <span>Mobile number</span>
          <input type="number" onChange={(e)=>setNumbers(e.target.value)} className="outline-none bg-slate-200 rounded-md pl-2 py-1"/>
        </div>
        <div className="grid border-dashed border-red-400 border-2 py-2 ">
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="outline-none"
                      />
        </div>          
        {
            error && 
                <p className="text-red-500 my-2">{error}</p>
            
        }
        <button className="bg-[#FEF1C5] rounded-md py-2 font-semibold font-serif text-center"> {!loader ? <TbFidgetSpinner className="animate-spin text-center text-red-500 mx-auto"/>:'Create'}</button>
      </form>
    </div>
  );
};

export default Formseller;
