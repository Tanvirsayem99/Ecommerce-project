"use client";
import Image from "next/image";
import sayem from "@/public/person.png";
import SearchBar from "./component/searchbar/SearchBar";
import { useEffect, useState } from "react";
import AllProduct from "./component/allProduct/AllProduct";
import SkeletonLoader from "./component/skeleton/SkeletonLoader";

export default function Home({datafromChild}) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [clicker, setClicker] = useState(true);
  const [loader, setLoader] = useState(true);
  let skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8];
  useEffect(() => {
    // Simulate a delay or fetch data from an API
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (search) {
      fetch("http://localhost:3000/api/product/" + search)
        .then((res) => res.json())
        .then((item) => setData(item));
    } else {
      fetch("http://localhost:3000/api/product/none")
        .then((res) => res.json())
        .then((item) => setData(item));
    }
  }, [search,loader]);
  const handleSearch = (value) => {
    setSearch(value);
    setClicker(!clicker);
  };


  return (
    <main className=" w-11/12 mx-auto bg-white">
      <SearchBar   handleSearch={handleSearch}/>
      <div className="grid grid-cols-4 justify-center mt-10 pb-10">
        {loader
          ? skeletonArray?.map((e) => <SkeletonLoader key={e} />)
          : data?.product?.map((e) => <AllProduct key={e._id} product={e}></AllProduct>)}
         
        
      </div>
    </main>
  );
}
