import Image from "next/image";
import Link from "next/link";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const AllProduct = ({product}) => {
  const ratingStar = Array.from({length:5},(element,index)=>{
    let number = index + 0.5;
    return (
      <div key={index}>
        {
          product.rating >= index + 1 ? <FaStar className=" text-yellow-500"/> : product.rating >= number ?<FaStarHalfAlt className=" text-yellow-500"/> : <AiOutlineStar className=" text-yellow-500"/>
        }
      </div>
    )
  })
  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure>
        <Image
         width={50} height={50}
          src={product.producImg[0]}
          alt="Shoes"
          className="w-72 h-44"
          placeholder="blur"
          blurDataURL={`blur:${product.producImg[0]}`}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.productName}</h2>
        <p className="text-red-400">${product.productPrice}</p>
        <p className="flex">{ratingStar}({product.buyer ? product.buyer : 0})</p>
        <div className="card-actions justify-end">
          <Link href={`/details/${product._id}`} className="btn btn-primary">Buy Now</Link>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
