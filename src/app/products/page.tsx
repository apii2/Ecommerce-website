'use client'
import { ProductCard } from '@/components/ProductCard';
import { useStore } from '@/lib/store'

export default function page() {
  const {products} = useStore();

  return (
    <main>
      <section className='flex items-center justify-center py-16 bg-primary'>
        <h1 className='text-4xl font-bold text-white'>Products</h1>
      </section>

      <div className='px-4 xs:px-8 lg:px-24 xl:px-30 py-10 grid grid-cols-1 md:grid-cols-[18%_1fr] gap-4'>
        <div className=''>
          <h3 className='text-xl font-semibold max-w-fit text-primary-foreground'>
            Filter products
            <hr className='border-1 border-primary-foreground my-2' />
          </h3>
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
          {products.map(item=>(
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  )
}