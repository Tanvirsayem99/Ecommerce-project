"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getAllposts from "../getApi/getAllposts";
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isAdmin,setIsAdmin] = useState('')
  const [isSeller,setIsSeller] = useState('')
  const { data: session } = useSession();
  const pathname = usePathname()
  const cookieValue = Cookies.get('token');
  const router = useRouter()
  if(session){
    if(!cookieValue){
      signOut()
    }
  }
  const path = pathname.split('/')
                
                if(path[1] == "dashboard"){
                  if(!session && isLoading){
                    router.push('/')
                  }
                }
 
  useEffect(()=>{
    
        setIsLoading(false)
        fetch("http://localhost:3000/api/getAdmin/" + session?.user.email)
        .then((res) => res.json())
        .then((item) => {
          setIsAdmin(item)
          
          
            if(item){
              setIsLoading(true)
              console.log("hello")
                const firstPath = pathname.split('/')
                if(firstPath[1] == "dashboard"){
                  if(!item.admin && session){
                    router.push('/')
                  }
                }
            
              
            }
          
          
        });
    fetch("http://localhost:3000/api/getSeller/" + session?.user.email)
        .then((res) => res.json())
        .then((item) => {setIsSeller(item)
        
          if(item){
              const firstPath = pathname.split('/')
              console.log(item.seller)
              if(firstPath[1] == "sellerboard"){
                if(!item.seller && session){
                  router.push('/')
                }
              }
          
            
          }
        
        });
        
      
    
  },[session])
  
  
  
  
  
  
  // if(pathname == "/sellerboard"){
  //   if(!isSeller.seller){
  //     router.push('/')
  //   }
  // }
  const logOut = ()=>{
    signOut()
    Cookies.remove('token')
  }
  if(session){
    const {data} =getAllposts(session.user.email)
  }
  const sayem = process.env.NEXT_PUBLIC_NEXAUTHSECRET
  
  // if(cookieValue){
  //   fetch("api/pepole",{
  //     method: "GET",
  //     headers:{
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${cookieValue}`,
  //     },
  //   })
  // }
  return (
    <div>
      <div className="navbar bg-slate-600 bg-opacity-15">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link href={"login"}>
                  <CiUser />
                  Login
                </Link>
              </li>
              <li>
                <Link href={"/register"}>SignUp</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              {isAdmin.admin && <Link href={"/dashboard"}>Dashboard</Link>}
            </li>
            <li>
              <Link href={"/seller"}>Become a seller</Link>
            </li>
            <li>
              <Link href={"/sellerboard"}>Seller</Link>
            </li>
            <li>
              {!session && (
                <Link href={"/login"}>
                  <CiUser />
                  Login
                </Link>
              )}
            </li>
            <li className="flex justify-center items-center">|</li>
            <li>
              {session ? (
                <button onClick={() => logOut()}>SignOut</button>
              ) : (
                <Link href={"/register"}>SignUp</Link>
              )}
            </li>
          </ul>
        </div>

        
        <div className="navbar-end flex gap-5">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary">99+</span>
            <button className="text-4xl">
              <TiShoppingCart />
            </button>
          </div>
          {
            session &&
            <div className="dropdown dropdown-hover ">
            <Link href={"/account"} tabIndex={0} role="button" className=" w-10 h-10 mr-6 rounded-full flex justify-center items-center bg-white">
            <FaRegUserCircle className="text-4xl text-center"/>
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-28 right-14"
            >
              <li>
                <p className="text-center">{session && session?.user?.name}</p>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          }
         
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
