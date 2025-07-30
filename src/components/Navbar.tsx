'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu"
import { NavbarInterface } from "@/type/NavbarInterface"
import Link from "next/link"
import { CartIcon } from "./CartIcon"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const data:NavbarInterface[] = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Pages',
      children: [
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Testimonial',
          url: '/testimonial'
        }
      ]
    },
    {
      name: 'Products',
      url: '/products'
    }
  ]

  const path = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {data.map(item=>(
          item.children?.length 
          ?
          <NavigationMenuItem key={item.name}>
            <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {item.children?.map(child=>(
                <NavigationMenuLink asChild key={child.name} className={path===item.url ? 'text-accent-foreground' : ''}>
                  <Link href={child.url}>{child.name}</Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          :
          <NavigationMenuItem key={item.name}>
            <NavigationMenuLink asChild className={`font-medium ${path===item.url ? 'text-accent-foreground' : ''}`}>
              <Link href={item.url || ''}>{item.name}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

        <Link href='/cart' className="focus-within:outline-0">
          <CartIcon className="size-9 focus:outline-0 hover:fill-accent-foreground" />
        </Link>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
