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
    const [comment,setComment] = useState('')
    
   
    
    
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
        fetch('http://localhost:3000/api/comment/'+params?.id,{
           method: "POST",
           headers:{
             "Content-Type": "application/json",
           },
           body:JSON.stringify({
             comment: comment,
             rating:rating,
             buyer: finalBuyer,
             userEmail:session?.user?.email
           })
         })
        fetch('http://localhost:3000/api/userReview/'+params?.id,{
           method: "DELETE",
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
            <div className="flex justify-center">
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
            <p className="text-blue-600 text-center">{rating == 1 && 'poor'}{rating == 2 && 'average'}{rating == 3 && 'good'}{rating == 4 && 'very good'}{rating == 5 && 'execellent'}</p>
            <form action="" className="grid justify-center items-center">
              <span className="text-center py-2">Type your though</span>
              <input type="text" name="" id="" onChange={(e)=>setComment(e.target.value)} className="w-96  mv-2outline-none py-2 bg-slate-200 rounded-lg"/>
            </form>
            <button className="mx-auto bg-pink-600 py-2 px-3 w-48 text-white rounded-md" onClick={()=>handleSubmit(item._id)}>submit</button>   
        </div>
    );
};

export default page;