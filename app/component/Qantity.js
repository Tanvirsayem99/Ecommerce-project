"use client"

import { useState } from 'react';
import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

const Qantity = () => {
    let [num, setNum] = useState(1)
    
    return (
        <p className="flex gap-5">Quantity <button onClick={()=>setNum(num-=1)}><FiMinus   /> </button> <span>{num}</span><GoPlus onClick={()=>setNum(num+=1)}/></p>
    );
};

export default Qantity;