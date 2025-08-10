'use client'
import BgDesktop from '@/assets/images/bg-desktop.jpg';
import DeliveryIcon from '@/assets/images/delivery.png';
import SupportIcon from '@/assets/images/support.png';
import ReturnIcon from '@/assets/images/return.png';
import QualityIcon from '@/assets/images/quality.png';
import Image from 'next/image';
import ProductSection from '@/components/ProductSection';
import { useEffect } from 'react';
import { useStore } from '@/lib/store';
import dynamic from 'next/dynamic';
import CategorySection from '@/components/CategorySection';

// const ProductSection = dynamic(()=>import('@/components/ProductSection'),{ssr: false});

export default function Home() {
  const data = [
    {
      name: 'Fast Delivery',
      iconImg: DeliveryIcon,
      desc: 'Variations of passages of Lorem Ipsum available',
    },
    {
      name: '24/7 Support',
      iconImg: SupportIcon,
      desc: 'Variations of passages of Lorem Ipsum available',
    },
    {
      name: 'Easy and Fast Return',
      iconImg: ReturnIcon,
      desc: 'Variations of passages of Lorem Ipsum available',
    },
    {
      name: 'Best Quality',
      iconImg: QualityIcon,
      desc: 'Variations of passages of Lorem Ipsum available',
    },
  ];

  const {fetchProducts} = useStore();
  useEffect(()=>{
    fetchProducts();
  },[]);

  return (
    <main className='mt-22'>
      <section style={{ backgroundImage: `url(${BgDesktop.src})` }}
        className="w-full h-152 bg-no-repeat bg-[83%_0%] sm:bg-[78%_0%] lg:bg-top bg-cover bg-fixed flex items-center px-4 xs:px-8 lg:px-24 xl:px-30">
        <div className="text-white text-center lg:p-10 rounded-xl max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg">We offer quality service and fast delivery</p>
        </div>
      </section>

      <section className="px-4 xs:px-8 lg:px-24 xl:px-30 py-12">
        <h2 className="text-5xl font-bold text-center mb-12 text-primary-foreground">Why Choose Us</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          {data.map(item=>(
            <div key={item.name}
              className="bg-secondary p-6 rounded-xl shadow-md shadow-secondary text-center text-primary-foreground hover:shadow-lg transition-shadow">
              <Image
                src={item.iconImg}
                alt={item.name}
                width={60}
                height={60}
                className="mx-auto mb-5"
              />
              <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
              <p className="text-sm leading-[1.2]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CategorySection />

      <ProductSection />
    </main>
  );
}