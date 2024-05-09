"use client"
import Btnseller from "./Btnseller";


const Singleseller = ({data, index,setClicker}) => {
    
    
    return (
        <div className="bg-white h-20 flex justify-around rounded-lg shadow-lg items-center text-center">
            <p className="w-10">{index +1}</p>
            <p className="w-60">{data.authorEmail}</p>
            <p className="w-60">{data.authorName}</p>
            <p className="w-40">{data.companyName}</p>
            <p className="w-30 pl-8">{data.address}</p>
            <p className="w-60">{data.numbers}</p>
            <Btnseller id={data._id}data={data} setClicker={setClicker} />
        </div>
    );
};

export default Singleseller;