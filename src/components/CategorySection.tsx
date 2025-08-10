import React from 'react'
import { useStore } from '@/lib/store'
import MenImage from '@/assets/images/men.jpg';
import JewelImage from '@/assets/images/jewelery.jpg';
import ElectronicImage from '@/assets/images/electronics.jpg';
import WomenImage from '@/assets/images/women.jpg';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export default function CategorySection() {
  const {products} = useStore();

  const categories = products.map(item=>item.category).filter((value, index, array)=>{
    return array.indexOf(value) === index;
  });

  const cateImg:{[key:string]: StaticImageData} = {
    "men's clothing": MenImage,
    "jewelery": JewelImage,
    "electronics": ElectronicImage,
    "women's clothing": WomenImage
  }

  console.log(categories);
  return (
    <section className='px-4 xs:px-8 lg:px-24 xl:px-30 py-12 bg-primary'>
      <h2 className="text-5xl font-bold text-center mb-12 text-white">Categories</h2>

      <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 lg:gap-10'>
        {categories.map(item=>(
          <Link href='/' key={item}>
            <div className='flex flex-col items-center justify-center gap-3 group'>
              <Image src={cateImg[item]} alt={item+' image'} className='w-35 rounded-full group-hover:shadow-2xl shadow-primary-foreground' />
              <p className='text-lg text-white font-semibold capitalize text-center'>{item}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
