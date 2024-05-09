
import SellerBoardNavbar from "../component/SellerBoardNavbar";



export default function dashboardLayout({ children }) {
    return (
      <div className="flex gap-5 bg-[#FEF1C5] ">
      <SellerBoardNavbar/>
      {children}
      </div>
    );
  }

