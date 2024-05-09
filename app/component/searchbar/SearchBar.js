"use client";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({handleSearch}) => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        const value = event.target.search.value;
        handleSearch(value)
        
    }
    return (
        <div className="bg-[#FEF1C5] p-5">
            <form onSubmit={(event)=>handleSubmit(event)} className="flex justify-center items-center relative"> <input type='text' name="search" placeholder="Search Product" className="py-2 pl-5 rounded-3xl w-96 outline-none pr-14"/><button className="absolute ml-80 cursor-pointer"><CiSearch /></button> </form>
        </div>
    );
};

export default SearchBar;