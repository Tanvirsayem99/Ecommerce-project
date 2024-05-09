import Image from "next/image";
import Link from "next/link";


const Review = ({data}) => {
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
      } = data.productId;
      
    return (
        <div className="w-96 bg-white rounded-md p-5 ">
            <p className="font-semibold">{authorName}</p>
            <div className=" flex justify-between border border-slate-400 p-5">
            <div className="flex gap-2">
                <Image src={producImg[0]} width={50} height={70} alt="helo"/>
                <p>{productName}</p>
            </div>
            <div>
               <Link href={`/feedback/${_id}`}> <button className="bg-[#FF7B2E] py-1 px-3 rounded-md">Review</button></Link>
            </div>
        </div>
        </div>
    );
};

export default Review;