"use server"
const getImageposts = async(datas) => {
  
   const result = await fetch("https://api.imgbb.com/1/upload?key="+process.env.IMGBBKEY,{
          method:'POST',
          body: datas
        })
        const data = await result.json()
        return data;
        
};

export default getImageposts;