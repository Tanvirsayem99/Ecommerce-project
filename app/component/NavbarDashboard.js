import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { RxDropdownMenu } from "react-icons/rx";
import { MdDataThresholding } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import Link from "next/link";


const NavbarDashboard = () => {
    return (
        <div className="flex flex-col gap-5 bg-[#602BF8] w-44 h-[100vh] text-slate-400">
            <div className="flex flex-col gap-5 pl-5 pt-20 pr-4">
            <Link className="flex gap-3  items-center" href={"/dashboard"}><MdSpaceDashboard/>Dashboard</Link>
            <Link  className="flex gap-3  items-center" href={"/dashboard/requestedseller"}><AiOutlineTeam/>Seller-Request</Link>
            <Link className="flex gap-3  items-center" href={"/dashboard/postRequest"}><RxDropdownMenu/>Post-Request</Link>
            <Link className="flex gap-3  items-center" href={"/dashboard/record"}><MdDataThresholding/>Records</Link>
            <Link className="flex gap-3  items-center" href={"/dashboard/topseller"}><FaUserGraduate/>Top-seller</Link>
            </div>
        </div>
    );
};

export default NavbarDashboard;