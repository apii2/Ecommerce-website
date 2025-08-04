import { create } from "zustand";
import { ProductInterface } from "@/type/ProductInterface";

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