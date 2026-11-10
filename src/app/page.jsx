import Link from "next/link";

import Image from "next/image";
import { usePhones } from "./phone-hunter";

const Phn= ()=>{
    const newPhn= usePhones
    console.log(newPhn);

    const phone= newPhn.map((item,index)=><div key={item.id} className="grid grid-cols-2">

        <div className="flex flex-col p-0 p-10 bg-gray-300 h-70">
          
           <Image width={30} height={20} className="h-20 w-30" src={item.image} alt={item.name} />
            <div className="flex flex-col">
              
            <h1 className="text-black">name: {item.name}</h1>
            <h1 className="text-black">price:{item.price}</h1>
            <Link className="text-black bg-blue-600 p-2 rounded" href={`/phone/${item.id}`} > see details</Link>
            </div>
        </div>
        
        {console.log(item)}
    </div>)

 return<>
 <div className="grid grid-cols-5 p-5 gap-5 bg-white h-250 p-10 border ">
    {phone}
 </div>
 </>

}
export default Phn 

