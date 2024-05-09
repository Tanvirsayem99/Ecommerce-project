"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const page = ({ params }) => {
  const [singleData, setSingleData] = useState([]);
  const [address, setAdress] = useState('');
  const router = useRouter()
  const query = params.id.split("_");
  const id = query[0];
  const quantity = query[1];
  const { data: session } = useSession();
  useEffect(() => {
    fetch("http://localhost:3000/api/productDetails/" + id)
      .then((res) => res.json())
      .then((data) => setSingleData(data?.product));
  }, [params, id]);
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
  } = singleData;
  const productAmount = productPrice * quantity;

  const deliveryFeeNum = parseFloat(deliveryFee);
  const handleOrder = (id) => {
    Swal.fire({
      title: "Confirm Order?",
      text: "Payment Method added soon",
      icon: "question"
    });
    if (session) {
      fetch("http://localhost:3000/api/userReview/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: session?.user.email,
          userName: session?.user.name,
          
        })
      })
        .then(res => res.json())
        .then(data => {if(data){
          
        }})
      fetch("http://localhost:3000/api/order/" + id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: session?.user.email,
          userName: session?.user.name,
          address: address,
          amount: productAmount,
          quantity:quantity  
        })
      })
        .then(res => res.json())
        .then(data => {if(data){
          router.push('/account')
        }})
    }
  }

  return (
    <div className="grid grid-rows-2 grid-cols-12 gap-3 w-11/12 mx-auto">
      <div className="bg-white col-span-8 row-span-1 rounded-md shadow-lg p-5">
        <h1>delivery to {session?.user.name}</h1>
        <form action="" className="grid gap-5">
          <div className="grid">
            <span>Address</span>
            <input
            onChange={e=>setAdress(e.target.value)}
              type="text"
              name="address"
              id=""
              className="bg-slate-200 outline-none py-1 pl-2 w-96"
              placeholder="type your address here"
            />
          </div>
          <p>Email to {session?.user.email}</p>
        </form>
      </div>

      <div className="bg-white row-start-2 col-span-8 rounded-md shadow-lg p-5">
        <div className="flex items-center gap-2">
          <div>
            {/* <div><Image src={singleData?.producImg[1]} alt="hello"/></div> */}
            {producImg?.map((e, index) => (
              <div key={e}
              >
                <img src={e} className={`w-10 h-10  ${index === 1 || index === 2 ? "hidden" : ''}`} />
              </div>
            ))}
          </div>
          <div>

            <p>{productName}</p>

            <p className="text-slate-600 text-sm">{brandName}</p>
          </div>
        </div>
      </div>
      <div className="bg-white col-start-9 row-span-2 rounded-md shadow-lg w-96 p-5">
        <p className="text-black">Order summery</p>
        <div className="flex justify-between">
          <p>Items Total</p>
          <p>$ {productPrice * quantity}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery Fee</p>
          <p>$ {deliveryFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Total-amount</p>
          <p>$ {productAmount + deliveryFeeNum}</p>
        </div>
        <div className="text-center flex justify-end flex-col mt-52">
          <button className="bg-[#FEF1C5] px-10 py-1 rounded-sm  hover:bg-[#DADADA] hover:text-slate-400" onClick={() => handleOrder(singleData._id)}>
            Place order
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
