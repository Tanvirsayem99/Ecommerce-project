"use client";

import RunningPost from "@/app/component/RunningPost";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const page = () => {
    const [data, setData] = useState    ([])
    const { data: session } = useSession();
    useEffect(()=>{
        if(session){
         fetch("http://localhost:3000/api/updatepostseller/"+session?.user?.email)
    .then(res => res.json())
    .then(product => setData(product)) }
    },[session])
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>picture</th>
        <th>Name</th>
        <th>Approved-Date</th>
        <th>Approved-Time</th>
        <th>Favorite Color</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody className="bg-white">
      {
        data?.map(e =>(<RunningPost key={e._id} item={e}></RunningPost>))
      }
    
         
    </tbody>

  </table>
</div>
    );
};

export default page;