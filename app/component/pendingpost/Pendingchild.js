import { MdOutlinePendingActions } from "react-icons/md";
import { FcDeleteDatabase } from "react-icons/fc";
const Pendingchild = ({item,index}) => {
    const originalDateObject = new Date(item.createdAt)
    const formatedDateString = originalDateObject.toLocaleString('en-US',{timezone: 'UTC'})
    const date = formatedDateString.split(",")[0]
    const time = formatedDateString.split(",")[1]
    // .sort({ createdAt: -1 })
    console.log(item.approved)
    return (
        <tr className={`${item.approved === true && 'hidden'}`}>
            <td>{index + 1}</td>
            <td>{item.productName}</td>
            <td>{date}</td>
            <td>{time}</td>
            <td>{item?.feedback? item.feedback : "pending"}</td>
            <td><button className={`${item?.feedback ? "bg-red-500" : "bg-yellow-500"} px-2 py-1 rounded-lg flex items-center gap-1`}>{item?.feedback ? <FcDeleteDatabase/> : <MdOutlinePendingActions/>}{item?.feedback ? "rejected" : "pending"}</button></td>
        </tr>
    );
};

export default Pendingchild;