"use client";

import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

const Btnseller = ({ id, setClicker, data }) => {
  const router = useRouter();

  const handleApproved = async (currentData) => {
    const { authorEmail, authorName, companyName, address, numbers,picture } = currentData;
    if(numbers){
      const res = await fetch("http://localhost:3000/api/approvedseller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        authorEmail,
        authorName,
        companyName,
        address,
        numbers,
        picture
      }),
    });
    if (res.ok) {
      let result = await fetch(
        "http://localhost:3000/api/appliedseller/"+id,
        {
          method: "delete",
        }
      );
      result = await res.json();
      if (result) {
        alert("product deleted");
        setClicker(false)
        router.push("/dashboard/requestedseller");
      }
    }
    }
  };
  const handleDelete = async () => {
    let res = await fetch("http://localhost:3000/api/appliedseller/"+id, {
      method: "delete",
    });
    res = await res.json();
    if (res) {
      alert("product deleted");
      setClicker(false)
      router.push("/dashboard/requestedseller");
    }
  };
  return (
    <div className="grid gap-2">
      <button
        onClick={()=>handleApproved(data)}
        className="bg-[#602BF8] px-4 py-1 rounded-md text-white"
      >
        Approve
      </button>
      <button
        onClick={handleDelete}
        className="bg-[#602BF8] px-4 py-1 rounded-md text-red-500"
      >
        Decline
      </button>
    </div>
  );
};

export default Btnseller;
