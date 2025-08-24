'use client'
import { useStore } from "@/lib/store"
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox"

interface PropsType {
  category: string | null
}

export default function Filter({category}:PropsType) {
  const {categories} = useStore();

  const route = useRouter();

  const selectedCategories = category?.split(',');
  console.log(selectedCategories);

  const toggleCategory = (item:string)=>(
    
    (category===item)? route.push('/products') : route.push(`/products?category=${item}`)
  )

  return (
    <div className='text-primary-foreground'>
      <h3 className='text-xl font-semibold max-w-fit'>
        Filter products
        <hr className='border-1 border-primary-foreground my-5' />
      </h3>

      <div>
        <h4 className="text-base font-semibold mb-2">By Category</h4>

        <ul className="text-base ms-3 capitalize">
          {categories.map(item=>(
            <li key={item}>
              <label className={`flex items-center gap-2 w-full hover:text-accent-foreground ${category===item && 'text-accent-foreground'}`} onClick={()=>toggleCategory(item)}>
                <Checkbox id={item} value={item} checked={category===item} />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
