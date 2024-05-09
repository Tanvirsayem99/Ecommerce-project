"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";
const page = ({params}) => {
    const [rating,setRating] = useState(null)
    const [hover,setHover] = useState(null)
    const [item,setItem] = useState([])
   
    
    
    const { data: session } = useSession();
    useEffect(()=>{
        fetch('http://localhost:3000/api/itemreview/'+params?.id)
    .then(res =>res.json())
    .then(data => setItem(data)
    )
    },[session])
    const existingRating = item?.rating ? item?.raing : 0;
    const existingBuyer = item?.buyer ? item?.buyer : 0;

    const handleSubmit = (id) =>{
        
            const finalRating = item?.rating + rating  ;
            const dividedRating = finalRating / 2;
            const lastRating = item?.rating ? dividedRating : rating
            const finalLastRating  = lastRating.toFixed(1);
            console.log(finalLastRating)
            
        
         
         const finalBuyer = existingBuyer + 1;
        fetch('http://localhost:3000/api/itemreview/'+params?.id,{
           method: "PUT",
           headers:{
             "Content-Type": "application/json",
           },
           body:JSON.stringify({
             rating: finalLastRating,
             buyer: finalBuyer
           })
         })
        fetch('http://localhost:3000/api/userReview/'+params?.id,{
           method: "DELETE",
          //  headers:{
          //    "Content-Type": "application/json",
          //  },
         })
       
       

       
   }
    
    const {
        authorName,
        productName,
        brandName,
        deliveryTime,
        deliveryFee,
        features,
        model,
        producImg,
        productPrice,
        productWarrenty,
        returnPolicy,
        description,
        authorImage,
        _id
      } = {item};
      
    return (
        <div className="w-11/12 mx-auto bg-white grid">
            <div className="flex">
            {
                [...Array(5)].map((star, index)=>{
                    const currentRating = index +1 
                   return <label key={index}>
                    <input type="radio"
                    name="rating" 
                    value={currentRating}
                    onClick={()=>setRating(currentRating)}
                    className="hidden"/>
                    <FaStar size={50}  onMouseEnter={()=>setHover(currentRating)} onMouseLeave={()=>setHover(null)} key={index} className={`cursor-pointer ${currentRating <=(hover || rating) ? 'text-[#ffc107]' : 'text-[#e4e5e9]'}`}/>
                   </label>
                })
            }
            </div>
            <button className=" bg-pink-600 py-2 px-3 w-48 text-white rounded-md" onClick={()=>handleSubmit(item._id)}>submit</button>   
        </div>
    );
};

export default page;