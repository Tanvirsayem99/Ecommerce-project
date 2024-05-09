
import { revalidatePath } from "next/cache";



const getAllposts = async(email) => {
    const result =  await fetch("http://localhost:3000/api/getapprovedseller/"+email,{cache:"no-cache",cache:"no-store"})
    const data = await result.json()
    return data;
    

};

export default getAllposts;