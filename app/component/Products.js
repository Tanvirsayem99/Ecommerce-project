import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const Products = () => {
    return (
        <div className="w-40 shadow-lg p-5 rounded-lg h-fit text-center bg-white">
            <MdOutlineProductionQuantityLimits className="text-4xl text-center mx-auto  "/>
            <h1>Total Products</h1>
            <p>100</p>
        </div>
    );
};

export default Products;