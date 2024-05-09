"use client";
import { useState } from "react";
import Modal from "./Modal";
import UpdateModal from "./UpdateModal";


const RunningPost = ({item}) => {
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("");
    const [loading2, setLoading2] = useState(true);
    const [id2, setId2] = useState("");
    let num = 0;
    const originalDateObject = new Date(item.updatedAt)
    const formatedDateString = originalDateObject.toLocaleString('en-US',{timezone: 'UTC'})
    const date = formatedDateString.split(",")[0]
    const time = formatedDateString.split(",")[1]
    
    const handleModal2 = (id)=>{
        setId2(id)
        setLoading2(!loading)
    }
    
    const handleModal = (id)=>{
        setId(id)
        setLoading(!loading)
    }
    
    return (
        <tr>
        <th>
          {
            num += 1
          }
        </th>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.producImg[0]} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          
        </td>
        <td>
          {item.productName}
        </td>
        <td>{date}</td>
        <td>{time}</td>
        <th>
        <label htmlFor="my_modal_6" className="btn" onClick={()=>handleModal(item)}>See Details</label>
        </th>
        <th>
        <label htmlFor="my_modal_6" className="btn" onClick={()=>handleModal2(item)}>Update</label>
        </th>
        {
            !loading && <Modal key={item._id} item={item} id={id} handleModal={handleModal}/>
        }
        {
            !loading2 && <UpdateModal key={item._id} item={item} id={id2}  handleModal2={handleModal2}/>
        }
      </tr>
    );
};

export default RunningPost;