"use client";
import Pendingchild from "@/app/component/pendingpost/Pendingchild";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";


const page = () => {
    const [data, setData] = useState([])
    const { data: session } = useSession();
    useEffect(()=>{
        if(session){
         fetch("http://localhost:3000/api/updatepostseller/"+session?.user?.email)
    .then(res => res.json())
    .then(product => setData(product)) }
    },[session])
    
    console.log(data)
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th className="w-48">Name</th>
        <th>Date</th>
        <th>Time</th>
        <th className="w-96">Feedback</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody className="bg-white rounded-md">
    {
                data?.map((e,index)=>(<Pendingchild key={e._id} index={index} item={e}></Pendingchild>))
            }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default page;