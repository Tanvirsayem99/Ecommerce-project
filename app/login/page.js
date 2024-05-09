"use client";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { addUser } from "../redux/slice";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TbFidgetSpinner } from "react-icons/tb";


const page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loader, setLoader] = useState(true);
  const router = useRouter()
  const handleLoginForm = async(event) => {
    event.preventDefault();
    setLoader(false)
    const form = event.target;
    try {
      const result = await fetch("api/login",{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          email,
          password,
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data.ok){
          setLoader(true)
          event.target.reset();
          const res =  signIn('credentials',{
            email,
            password,
            redirect: false,
          });
          
          router.push('/')
        }
        setError(data.message)
      })
      console.log(result)
      if(result.ok){
        
       
      }
    }
    catch (error) {
      setLoader(true)
      
    }
  };

  return (
    <div className="md:w-5/6 mx-auto h-[75vh]  mt-10 rounded-3xl shadow-2xl shadow-black overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="w-auto md:w-3/6 mx-auto md:px-4 pt-10 ">
          <h1 className="text-4xl text-center mb-5  font-semibold">Sign In</h1>
          <div className="flex gap-5 justify-center mb-5">
            <div className="border border-slate-200   px-2 py-2 rounded-md"><FaGoogle /></div>
            <div className="border border-slate-200   px-2 py-2 rounded-md"><FaFacebookF /></div>
            <div className="border border-slate-200   px-2 py-2 rounded-md"><FaGithub /></div>
          </div>
          <p className="text-center mb-5">or use your email password</p>
          <form onSubmit={handleLoginForm} className="grid gap-5 justify-center items-center">
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="email"
              className="bg-slate-200 rounded-md pl-2 py-2 w-72 md:w-96"
              placeholder="Email"
            />
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              name="password"
              className="bg-slate-200 rounded-md pl-2 py-2"
              placeholder="Password"
            />
            {
              error && <p className="text-red-500">{error}</p>
            }
            <div className="mx-auto">
              <button className="text-white text-2xl py-1 mt-10 px-10 bg-[#4B3A9D] rounded-md font-semibold font-mono">
                 {
                  !loader ? <TbFidgetSpinner className="animate-spin"/> : "Sign in"
                }
              </button>
            </div>
          </form>
        </div>
        <div className="bg-[#4B3A9D] h-[75vh] hidden  w-5/12 rounded-s-full overflow-hidden text-center md:grid  items-center justify-center">
          <div>
            <h1 className="text-center text-white font-semibold text-3xl">
              Hello, Friend!
            </h1>
            <p className="text-white mb-10">
              Register with your personal details<br/> to use all of sites features
            </p>
            
            <Link className="border border-white rounded-2xl px-10 py-1 " href={"/register"}>Sign Up</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
