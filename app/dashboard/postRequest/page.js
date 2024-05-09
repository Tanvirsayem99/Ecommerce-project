"use client";

import Reqpost from "@/app/component/req-post/Reqpost";
import { useEffect, useState } from "react";

const page = () => {
    const [posts,setPosts] = useState([])
  const [clicker, setClicker] = useState(true)
    
        
  useEffect(()=>{
    fetch("http://localhost:3000/api/allitem")
    .then(res =>res.json())
    .then(data =>setPosts(data))
  },[clicker])
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
        </th>
        <th>Product-Name</th>
        <th>Author-Name</th>
        <th>Product-Price</th>
        <th>Req-Date</th>
        <th>Req-Time</th>
        <th>Action</th>
        <th>Action</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
     {
        posts?.posts?.map((e,index)=>(<Reqpost key={e._id} item={e} index={index} posts={posts} setClicker={setClicker}></Reqpost>))
     }
    </tbody>
  </table>
</div>
    );
};

export default page;
