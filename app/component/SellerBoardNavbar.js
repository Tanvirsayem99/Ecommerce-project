import { MdSpaceDashboard } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { RxDropdownMenu } from "react-icons/rx";
import { MdDataThresholding } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import Link from "next/link";


const SellerBoardNavbar = () => {
    return (
        <div className="flex flex-col gap-5 bg-[#602BF8] w-44 h-[100vh] text-slate-400">
            <div className="flex flex-col gap-5 pl-5 pt-20 pr-4">
            <Link className="flex gap-3  items-center" href={"/sellerboard"}><MdSpaceDashboard/>Post-Product</Link>
            <Link  className="flex gap-3  items-center" href={"/sellerboard/pendingpost"}><AiOutlineTeam/>Pending-Post</Link>
            <Link className="flex gap-3  items-center" href={"/sellerboard/runningpost"}><RxDropdownMenu/>Running-Post</Link>
            <Link className="flex gap-3  items-center" href={"/sellerboard/editpost"}><MdDataThresholding/>Edit-Post</Link>
            </div>
        </div>
    );
};

export default SellerBoardNavbar;