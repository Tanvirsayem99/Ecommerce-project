"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { signIn } from "next-auth/react";
const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  const handleLoginForm = async (event) => {
    event.preventDefault();
    setLoader(false);
    setError("");
    if (!name || !email || !password) {
      setError("All input is neccerssary");
      setLoader(true);
      return;
    }
    try {
      const existRes = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email }),
      });
      const { user } = await existRes.json();
      if (user) {
        setError("user already exist");
        setLoader(true);
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        setLoader(true);
        event.target.reset();
        const res = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });
        router.push("/");
      }
    } catch (error) {
      setLoader(true);
      console.log(error);
    }
  };

  return (
    <div className="md:w-5/6 mx-auto h-[75vh] mt-10 rounded-3xl shadow-2xl shadow-black overflow-hidden">
      <div className="flex ">
        <div className="bg-[#4B3A9D]  w-5/12 rounded-r-full overflow-hidden text-center hidden md:grid items-center justify-center">
          <div>
            <h1 className="text-center text-white font-semibold text-3xl">
              Hello, Friend!
            </h1>
            <p className="text-white mb-10">
              Register with your personal details
              <br /> to use all of sites features
            </p>

            <Link
              className="border border-white rounded-2xl px-10 py-1 "
              href={"/login"}
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className=" md:w-3/6 mx-auto px-4 py-10 w-11/12">
          <h1 className="text-4xl text-center mb-5  font-semibold">Sign Up</h1>
          <div className="flex gap-5 justify-center mb-5">
            <div className="border border-slate-200   px-2 py-2 rounded-md">
              <FaGoogle />
            </div>
            <div className="border border-slate-200   px-2 py-2 rounded-md">
              <FaFacebookF />
            </div>
            <div className="border border-slate-200   px-2 py-2 rounded-md">
              <FaGithub />
            </div>
          </div>
          <p className="text-center mb-5">or use your email password</p>
          <form onSubmit={handleLoginForm} className="grid gap-5">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id=""
              className="bg-slate-200 rounded-md pl-2 py-2"
              placeholder="Name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="bg-slate-200 rounded-md pl-2 py-2"
              placeholder="Email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="bg-slate-200 rounded-md pl-2 py-2"
              placeholder="Password"
            />
            {error && <div className="text-red-500">{error}</div>}
            <div className="mx-auto">
              <button className="text-white text-2xl py-1 mt-10 px-10 bg-[#4B3A9D] rounded-md font-semibold font-mono">
                {!loader ? (
                  <TbFidgetSpinner className="animate-spin" />
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
