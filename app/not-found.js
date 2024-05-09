import Link from "next/link";


const notFound = () => {
    return (
        <div>
            this route is not available
            <Link href={"/"}><button>Back to Home</button></Link>
        </div>
    );
};

export default notFound;