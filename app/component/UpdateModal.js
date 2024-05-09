import Image from "next/image";
import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const UpdateModal = ({ item, id, handleModal2 }) => {
    const [loader, setLoader] = useState(false);
 
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
  const handleForm = (event)=>{
    event.preventDefault();
    setLoader(true)
    const form = event.target;
    const newProductName = form.productname.value;
    const newbrandName = form.brandname.value;
    const newDeliveryTime = form.deliverytime.value;
    const newDeliveryFee = form.deliveryfee.value;
    const newReturnpolicy = form.returnpolicy.value;
    const newProductprice = form.productprice.value;
    const number = parseFloat(newProductprice)
    const newProductwarrenty = form.productwarrenty.value;

    const res =  fetch("http://localhost:3000/api/updatepostseller/"+id._id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productName: newProductName,
              brandName: newbrandName,
              deliveryTime:  newDeliveryTime,
              deliveryFee: newDeliveryFee,
              productPrice: number,
              productWarrenty: newReturnpolicy,
              returnPolicy: newProductwarrenty,
            }),
            
          });
          if(res){
            setLoader(false)
          }


  }

  return (
    <td>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal h-[100vh] " role="dialog" >
        <div className="modal-box bg-[#EFF0F5]" id="sayem">
          
          <form
          className=" bg-white  px-10 rounded-md shadow-xl "
          onSubmit={(event) => handleForm(event)}
        >
          <div className="text-center pt-2">
            <h1 className="font-semibold text-3xl">Update Product</h1>
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
                  defaultValue={productName}
                />
              </div>
              <div className="grid">
                <span>Brand Name</span>
                <input
                  name="brandname"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                  defaultValue={brandName}
                />
              </div>
              <div className="grid">
                <span>Delivery Time</span>
                <input
                  name="deliverytime"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                  defaultValue={deliveryTime}
                />
              </div>
              <div className="grid">
                <span>Delivery Fee</span>
                <input
                  name="deliveryfee"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                  defaultValue={deliveryFee}
                />
              </div>
              <div className="grid">
                <span>Return Policy</span>
                <input
                  name="returnpolicy"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                  defaultValue={returnPolicy}
                />
              </div>
              <div className="grid">
                <span>Product Price</span>
                <input
                  name="productprice"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                  defaultValue={productPrice}
                />
              </div>
              <div className="grid">
                <span>Product Warrenty</span>
                <input
                  name="productwarrenty"
                  type=""
                  className="bg-slate-200 rounded-md pl-3 py-1 outline-none"
                  defaultValue={productWarrenty}
                />
              </div>
            </div>
            
            
          </div>
          <div className="text-center pt-5 pb-2"><button className="text-center mx-auto bg-[#FEF1C5] px-10 py-1 rounded-md font-semibold">{loader ? <TbFidgetSpinner className="animate-spin"/> : "Submit"}</button></div>
        </form>
          
          <div className="modal-action">
            <label htmlFor="my_modal_6" className="btn" onClick={handleModal2}>
              Close!
            </label>
          </div>
        </div>
      </div>

      
    </td>
  );
};

export default UpdateModal;
