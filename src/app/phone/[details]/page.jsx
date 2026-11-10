"use client"
import { usePhones } from "@/app/phone-hunter";
import Image from "next/image";
import { useParams } from "next/navigation"

function PhoneDetails(){
   const {details} = useParams()
   const newPhn= usePhones
   console.log(details,newPhn);
   const PhoneDetails= newPhn.find((item)=> item.id===details)

   return<>
   <div className="bg-white flex h-250 pl-50 pt-20  ">
      <div>
         <Image className="w-100 h-70" width={200} height={300} src={PhoneDetails.image} alt="{Phonedetails.name}"></Image>
      </div>
      <div>
      <div className="flex flex-col gap-3">
      <h1 className="text-black text-2xl">{PhoneDetails.name}</h1>
      <h1 className="text-lg text-blue-600">{PhoneDetails.rating} star rating </h1>
      <h1 className="text-black text-lg">Brand: {PhoneDetails.brand}</h1>
      </div>
      <h1 className="text-black text-lg">Storage:{PhoneDetails.storage}</h1>
      <h1 className="text-black text-lg">Ram:{PhoneDetails.ram}</h1>
      <h1 className="text-orange-600 text-2xl">৳ {PhoneDetails.price}</h1>
      </div>


   </div>
   </>

}
export default PhoneDetails




