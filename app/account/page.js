"use client"

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Review from "../component/Review";



const page = () => {
    const [item,setItem] = useState([])
    const { data: session } = useSession();
    useEffect(()=>{
        fetch('http://localhost:3000/api/userReview/'+session?.user.email)
    .then(res =>res.json())
    .then(data => setItem(data.product)
    )
    },[session])
    
    return (
        <div className="w-11/12 mx-auto ">
            <div className="grid gap-5">
            {
                item?.map(e => (<Review key={e._id} data={e}></Review>))
            }
            </div>
            
        </div>
    );
};

export default page;