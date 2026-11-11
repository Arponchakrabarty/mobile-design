"use client"
import Link from "next/link";

import Image from "next/image";
import { usePhones } from "./phone-hunter";
import { useEffect, useState } from "react";

const Phn= ()=>{
    const [inputText,setInputText]= useState()
    const newPhn= usePhones
    const [data, setData]= useState(newPhn)
    useEffect(()=>{
      if(inputText?.length>0 ){
         const newData= newPhn.filter((item)=> item?.name?.toLowerCase()?.includes(inputText?.toLowerCase()) )
      const loadingData= ()=>{
         setData(newData);
      }
      loadingData()
      }
    },[inputText,newPhn])


 return<>
<div className="bg-white  ">
    <div>
        <h1 className="text-black">search</h1>
        <input type="text" className="border-2 text-black" onChange={(e)=>setInputText(e.target.value)} />
    </div>
     <div className="grid grid-cols-4 p-5 gap-5  border ">
    {data?.map((item,index)=><div key={item.id} className=" p-10 bg-gray-300 ">

       
          
           <Image width={30} height={20} className="h-20 w-30" src={item.image} alt={item.name} />
            <div className="flex flex-col">
              
            <h1 className="text-black">name: {item.name}</h1>
            <h1 className="text-black">price:{item.price}</h1>
            <Link className="text-black bg-blue-600 p-2 rounded" href={`/phone/${item.id}`} > see details</Link>
            </div>
      
        
        {console.log(item)}
    </div>)}
 </div>
</div>
 </>

}
export default Phn 

