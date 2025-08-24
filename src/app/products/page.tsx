'use client'
import Filter from '@/components/Filter';
import { ProductCard } from '@/components/ProductCard';
import { useStore } from '@/lib/store'
import { useSearchParams } from 'next/navigation';

export default function page() {
  const {products} = useStore();
  const category = useSearchParams().get('category');

  let modProducts = products;
  if(category){
    modProducts = products.filter(item=>(item.category === category));
  }
  
  return (
    <main>
      <section className='flex items-center justify-center py-16 bg-primary'>
        <h1 className='text-4xl font-bold text-white'>Products</h1>
      </section>

      <div className='px-4 xs:px-8 lg:px-24 xl:px-30 py-10 grid grid-cols-1 md:grid-cols-[18%_1fr] gap-4'>
        <Filter category={category} />

        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {modProducts.map(item=>(
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}