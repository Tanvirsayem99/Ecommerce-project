import Image from "next/image";

const Modal = ({ item, id, handleModal }) => {
 
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
  } = id;
console.log(authorImage)
  return (
    <td>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal h-[100vh] " role="dialog" >
        <div className="modal-box bg-[#EFF0F5]" id="sayem">
          <h3 className="font-bold text-lg">Hello!</h3>
          
          <div className="flex gap-10">
          <div className="grid w-56 ">
          <div className="carousel w-56">
            {producImg?.map((e, index) => (
              <div
                key={index}
                id={`item${index + 1}`}
                className={`carousel-item w-full ${!e && "hidden"} `}
              >
                <img src={e} className="w-56" />
              </div>
            ))}
          </div>
          <div className="flex mx-auto  w-36 py-2 gap-2">
            {producImg?.map((e, index) => (
              <a
                key={index}
                href={`#item${index + 1}`}
                className={` w-10 hover:border border-red-300  ${!e && "hidden"} `}
              >
                <img src={e} className="w-10 h-10" />
              </a>
            ))}
          </div>
          <div className="flex gap-5 items-center mt-5">
            <Image src={authorImage} className="rounded-full w-10 h-10" width={40} height={40} alt="author"/>
            <p className="text-sm w-40">{authorName}</p>
          </div>
          </div>
          <div>
            <h1 className="text-3xl">{productName}</h1>
            <p className="text-xl">Brand : {brandName}</p>
            <hr className="my-2"/>
            
            <p className="text-2xl mb-10 mt-5 text-red-400">$ {productPrice} </p>
            <span>Features:</span>
            <ul className="pl-20">
            {features?.map((e, index) => (
              <li
                key={index}
                className={`   ${!e && "hidden"} `}
              >
                {
                  e
                }
              </li>
            ))}
            </ul>
            <p className="pt-5">Model : {model}</p>
            
          </div>
          <div className="bg-white p-10 rounded-sm ml-auto">
            <h1 className="">Delivery Time: {deliveryTime}</h1>
            <p className="pt-3">Delivery Fee : {deliveryFee}</p>
            <hr className="my-2"/>
            <p className="">Product Warrenty : {productWarrenty} </p>
            <p className="py-3">Return Policy : {returnPolicy} </p>
            <span>Description:</span>
            <p className="pl-16 "> {description}</p>
          </div>
          </div>
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn" onClick={handleModal}>
              Close!
            </label>
          </div>
        </div>
      </div>

      
    </td>
  );
};

export default Modal;
