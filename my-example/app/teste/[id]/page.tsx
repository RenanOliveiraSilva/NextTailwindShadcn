"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const Page = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<string>('')
    
      useEffect(() => {
          // Fetching product data
          const fetchData = async () => {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`)
          const json = await res.json()

          setProduct(json.image)
          }
          fetchData()
      }, [])
    
    return (
        <div>
            <Avatar>
                <AvatarImage className="w-25 h-25" src={product} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
      
    );
}

export default Page;