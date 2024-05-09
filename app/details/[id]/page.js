"use client";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import Qantity from "@/app/component/Qantity";
import { useEffect, useState } from "react";
import Link from "next/link";
const page = ({ params }) => {
  let [nums, setNums] = useState(1);
  const [singleData, setSingleData] = useState([]);
  const [allComment,setAllComment] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/productDetails/" + params.id)
      .then((res) => res.json())
      .then((data) => setSingleData(data.product));


      fetch("http://localhost:3000/api/findComment/" + params.id)
      .then((res) => res.json())
      .then((data) => setAllComment(data.comment));  
  }, [params]);

    const { authorName,
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
      authorImage, } = singleData;
 
  console.log(allComment)
  return (
   
    <div className="w-11/12 mx-auto bg-white flex gap-10">
      <div className="grid items-center justify-center">
        <div className="carousel w-96">
          {producImg?.map((e, index) => (
            <div
              key={index}
              id={`item${index + 1}`}
              className={`carousel-item w-full ${!e && "hidden"} `}
            >
              <img src={e} className="w-96" />
            </div>
          ))}
        </div>
        <div className="flex mx-auto  w-36 py-2 gap-2">
          {producImg?.map((e, index) => (
            <a
              key={index}
              href={`#item${index + 1}`}
              className={` w-10 hover:border border-red-300  ${
                !e && "hidden"
              } `}
            >
              <img src={e} className="w-10 h-10" />
            </a>
          ))}
        </div>
      </div>
      <div>
              <h1>{productName}</h1>
              <p>Brand: {brandName}</p>
              <p>{"ratings"}</p>
              <hr className="mb-5"/>
              <p className="text-4xl"> ${productPrice}</p>
              <hr className="mt-5"/>
              <p className="flex gap-5">Quantity <button disabled={nums ===1 && true} className={`${nums===1 && 'cursor-not-allowed'}`} onClick={()=>setNums(nums-=1)}><FiMinus   /> </button> <span>{nums}</span><button  onClick={()=>setNums(nums+=1)}><GoPlus/></button></p>

              <div className="flex gap-5 pl-10 pt-10">
              
              <Link href={`/buyproduct/${singleData._id}_${nums}`}><button className="bg-[#2ABBE8] px-8 py-2 text-white">Buy Now</button></Link>
              <button className="bg-[#FEF1C5] px-8 py-2 ">Add to cart</button>
              </div>
      </div>
      <div className="bg-[#FAFAFA] ml-auto p-5">
        <p>Delivery</p>
        <p>{deliveryFee}</p>
        <p>{returnPolicy}</p>
        <p>Warrenty</p>
        <p>{productWarrenty}</p>
        <div className="h-2 bg-white w-full my-5"></div>
        <p>Sold by</p>
        <p>{authorName}</p>
      </div>
    </div>
  );
};

export default page;
