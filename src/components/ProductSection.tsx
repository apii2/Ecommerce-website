import { useStore } from '@/lib/store'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard } from './ProductCard';
import Autoplay from 'embla-carousel-autoplay';

export default function ProductSection() {
  const {products, fetchProducts} = useStore();

  return (
    <section className='md:px-8 lg:px-24 xl:px-30 py-12 flex flex-col items-center'>
      <h2 className="text-5xl font-bold text-center mb-12 text-primary-foreground">Our products</h2>

      <Carousel opts={{loop: true}} plugins={[Autoplay({delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false})]}>
        <CarouselContent>
        {products.filter(dat=>dat.id<=10).map(dat=>(
          <CarouselItem key={dat.id}>
            <ProductCard item={dat}/>
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section> 
  )
}
