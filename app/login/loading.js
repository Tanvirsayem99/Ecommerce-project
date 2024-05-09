"use client"

import Link from "next/link";

const loading = () => {
    return (
        // <div>
        //     <div className="skeleton w-32  md:w-5/6 mx-auto h-[75vh]  mt-10 rounded-3xl shadow-2xl bg-slate-200"></div>
        // </div>
        <div className="md:w-5/6 mx-auto h-[75vh]  mt-10 rounded-3xl shadow-2xl bg-slate-200 overflow-hidden skeleton">
        <div className="flex justify-center items-center skeleton">
          <div className="w-auto md:w-3/6 mx-auto md:px-4 pt-10 skeleton">
            <div className="flex gap-5 justify-center mb-5 skeleton">
              <div className="bg-white px-2 py-2 rounded-md skeleton w-10 h-10"></div>
              <div className="bg-white px-2 py-2 rounded-md skeleton w-10 h-10"></div>
              <div className="bg-white px-2 py-2 rounded-md skeleton w-10 h-10"></div>
            </div>
            <div className="my-10"></div>
            
            <form className="grid gap-5 justify-center items-center">
              <div className="bg-white rounded-md pl-2 py-2 w-72 h-8 md:w-96 skeleton"></div>
              <div className="bg-white rounded-md pl-2 py-2 h-18 skeleton mb-5"></div>
              
            </form>
          </div>
          <div className="bg-[#e4e1f3] skeleton h-[75vh] hidden  w-5/12 rounded-s-full overflow-hidden text-center md:grid  items-center justify-center">
            <div>
              
              
              {/* <Link className="border border-white rounded-2xl px-10 py-1 " href={"/register"}>Sign Up</Link> */}
              
            </div>
          </div>
        </div>
      </div>
    );
};

export default loading;