import {
  Card,
  CardContent,
  CardTitle,
  CardDescription
} from "@/components/ui/card"
import { ProductInterface } from "@/type/ProductInterface"
import Link from "next/link"
import React from "react"

export const ProductCard:React.FC<{item: ProductInterface}> = ({item})=> {
  return (
    <Link href={`/products/${item.title}`} className="group">
      <Card>
        <div className="flex items-center justify-center bg-white py-5">
          <img src={item.image} alt={item.title} className="w-45 h-45 object-contain group-hover:scale-110 transition-all"/>
        </div>

        <CardContent>
          <CardTitle>
              {item.title.length>26 ? item.title.slice(0,22)+'...' : item.title}
          </CardTitle>
          <CardDescription>{item.category}</CardDescription>
          <p className="font-bold">${item.price}</p>
        </CardContent>
      </Card>
    </Link>
  )
}
