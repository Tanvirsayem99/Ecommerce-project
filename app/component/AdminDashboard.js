import Products from "./Products";
import Sellers from "./Sellers";
import Todaysells from "./Todaysells";
import Todaysmoney from "./Todaysmoney";


const AdminDashboard = () => {
    return (
        <div className="flex gap-5">
            <Sellers/>
            <Products/>
            <Todaysells/>
            <Todaysmoney/>
        </div>
    );
};

export default AdminDashboard;