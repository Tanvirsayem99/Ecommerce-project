import NavbarDashboard from "../component/NavbarDashboard";



export default function dashboardLayout({ children }) {
    return (
      <div className="flex gap-5 bg-[#FEF1C5] ">
      <NavbarDashboard/>
      {children}
      </div>
    );
  }

