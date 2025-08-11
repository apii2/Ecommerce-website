'use client'
import { create } from "zustand";
import { ProductInterface } from "@/type/ProductInterface";
import { ReactNode, useEffect } from "react";

interface Store {
  products: ProductInterface[],
  fetchProducts: ()=>Promise<void>,
}

export const useStore = create<Store>((set)=>({
  products: [],
  fetchProducts: async()=>{
    const data = await fetch('https://fakestoreapi.com/products').then(res=>res.json());
    const updatedData = data.map((dat:ProductInterface)=>(
      {...dat, selected: false, quantity: 0}
    ))
    set({products: updatedData});
  },
}))

export function ProductProvider({children}:{children: ReactNode}){
  const {fetchProducts} = useStore();
  useEffect(()=>{
    fetchProducts();
  },[]);

  return(
    <>
    {children}
    </>
  )
}