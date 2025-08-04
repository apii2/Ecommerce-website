'use client'
import { useStore } from '@/lib/store'

export default function page() {
  const {products, fetchProducts} = useStore();

  return (
    <div>
      products
    </div>
  )
}
