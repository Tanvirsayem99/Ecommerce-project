"use client";
import Image from "next/image";
import sell from "@/public/sell.png";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import getImageposts from "../getApi/getImagePost";
import { TbFidgetSpinner } from "react-icons/tb";
import { CiCirclePlus } from "react-icons/ci";
import { signIn, useSession } from "next-auth/react";
import getAllposts from "../getApi/getAllposts";


const page = () => {
  const router = useRouter();
  const [photo, setPhoto] = useState([1]);
  const [feature, setFeature] = useState([1]);
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [loader, setLoader] = useState(false);
  const { data: session } = useSession();
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  useEffect(() => {
    if (click) {
      let num = Math.floor(Math.random() * 100) + 1;
      photo.push(num);
      setClick(false);
    }
  }, [click]);
  useEffect(() => {
    if (click2) {
      let num2 = Math.floor(Math.random() * 100) + 1;
      feature.push(num2);
      setClick2(false);
    }
  }, [click2]);
  const handleimage1 = async () => {
    const datas = new FormData();
    datas.append("image", file1);
    const { data } = await getImageposts(datas);
    return data.display_url;
  };
  const handleimage2 = async () => {
    const data2 = new FormData();
    data2.append("image", file2);
    const { data } = await getImageposts(data2);
    return data.display_url;
  };
  const handleimage3 = async () => {
    const data3 = new FormData();
    data3.append("image", file3);
    const { data } = await getImageposts(data3);
    return data.display_url;
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setLoader(true)
    const form = event.target;
    const productName = form.productname.value;
    const brandName = form.brandname.value;
    const deliveryTime = form.deliverytime.value;
    const deliveryFee = form.deliveryfee.value;
    const returnPolicy = form.returnpolicy.value;
    const productPrice = form.productprice.value;
    const productWarrenty = form.productwarrenty.value;
    const model = form.model.value;
    let feature2 = ""
    let feature3 = ""
    const feature1 = form.feature1.value;
    const description = form.description.value;
    if(feature?.length === 2 || feature?.length === 3){
       feature2 = form.feature2.value;
    }
    if(feature?.length === 3){
      feature3 = form.feature3.value;
    }
    const seller = await getAllposts(session?.user.email)
    const authorEmail = seller.approvedSeller.authorEmail
    const authorName = seller.approvedSeller.authorName
    const authorImage = seller.approvedSeller.picture
    
    
    const pic = await handleimage1();
    let img2 = "";
    let img3 = "";
    if(file2){
      const pic2 = await handleimage2();
      img2 = pic2
    }
    if(file3){
      const pic3 = await handleimage3();
      img3 = pic3
    }
    

    if (pic) {
      const res = await fetch("api/postSeller", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
          brandName,
          deliveryTime,
          deliveryFee,
          returnPolicy,
          productPrice,
          productWarrenty,
          producImg:[pic,img2 && img2 , img3 && img3],
          model,
          features:[feature1,feature2 && feature2 , feature3 && feature3],
          description,
          authorEmail,
          authorImage,
          authorName
        }),
      });
      if(res.ok){
        setLoader(false)
        console.log("done")
      }
    }
  };

  return (
    <div className="bg-[#FEF1C5] h-[89vh] flex gap-10 items-center justify-center mx-auto">
        <form
          className=" bg-white  px-10 rounded-md shadow-xl "
          onSubmit={(event) => handleForm(event)}
        >
          <div className="text-center pt-2">
            <h1 className="font-semibold text-3xl">Post a Product</h1>
            <p className="font-serif">Sell and Earn</p>
          </div>

          <div className="flex items-center">
            <div className="grid gap-2 w-96">
              <div className="grid">
                <span>Product Name</span>
                <input
                  name="productname"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              <div className="grid">
                <span>Brand Name</span>
                <input
                  name="brandname"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              <div className="grid">
                <span>Delivery Time</span>
                <input
                  name="deliverytime"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              <div className="grid">
                <span>Delivery Fee</span>
                <input
                  name="deliveryfee"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              <div className="grid">
                <span>Return Policy</span>
                <input
                  name="returnpolicy"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              <div className="grid">
                <span>Product Price</span>
                <input
                  name="productprice"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              <div className="grid">
                <span>Product Warrenty</span>
                <input
                  name="productwarrenty"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
            </div>
            <div className="w-1 h-80 mx-10 bg-red-500 "></div>
            <div className="grid gap-2  w-96">
            <label htmlFor="my_modal_6" className="btn">
              Enter Description
            </label>
              
              <div>
                <span>Product Picture</span>
                {photo && (
                  <div>
                    <div className="grid border-dashed border-red-400 border-2 py-2 ">
                      <input
                        type="file"
                        onChange={(e) => setFile1(e.target.files[0])}
                        className="outline-none"
                      />
                    </div>
                  </div>
                )}
                {photo?.length === 2 || photo?.length === 3 ? (
                  <div>
                    <div className="grid border-dashed border-red-400 border-2 py-2 ">
                      <input
                        type="file"
                        onChange={(e) => setFile2(e.target.files[0])}
                        className="outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {photo?.length == 3 && (
                  <div>
                    <div className="grid border-dashed border-red-400 border-2 py-2 ">
                      <input
                        type="file"
                        onChange={(e) => setFile3(e.target.files[0])}
                        className="outline-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div
                onClick={() => setClick(true)}
                className={`${photo.length == 3 && "hidden"}`}
              >
                Add Another photo
              </div>
              
              <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h1 className="text-3xl text-center py-3">Enter Additional Details</h1>
            <div className="grid">
                <span>Model</span>
                <input
                  name="model"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              {
                feature && <div className="grid py-4">
                <span>Fetures</span>
                <input
                  name="feature1"
                  type=""
                  placeholder="Feture 1"
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
              </div>
              }
              {feature?.length === 2 || feature?.length === 3 ? (
                  
                    <div className="grid pb-4">
                    <input
                  name="feature2"
                  type=""
                  placeholder="Feture 2"
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
                    </div>
                  
                ) : (
                  ""
                )}
                 {feature?.length == 3 && (
                  
                    <div className="grid pb-4">
                    <input
                  name="feature3"
                  type=""
                  placeholder="Feture 3"
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                />
                    
                  </div>
                )}
                
              
            
              <div onClick={() => setClick2(true)} className={`${feature.length == 3 && "hidden"} text-center` }><CiCirclePlus className="text-center text-4xl mx-auto cursor-pointer"/></div>
              <div>Enter Description</div>
            <textarea cols='30' rows='5' name="description" className="bg-slate-200 outline-none w-full"/>
            <div className="modal-action">
              <label htmlFor="my_modal_6" className="btn">
                Done
              </label>
            </div>
          </div>
        </div> 
              

              
            </div>
          </div>
          <div className="text-center pt-5 pb-2"><button className="text-center mx-auto bg-[#FEF1C5] px-10 py-1 rounded-md font-semibold">{loader ? <TbFidgetSpinner className="animate-spin"/> : "Submit"}</button></div>
        </form>
      
      {/* <div>
        <form className="border-dashed border-red-400 border-2 py-5 "> 
            
        </form>
      </div> */}
    </div>
  );
};

export default page;
   




