'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuContent, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { CartIcon } from "./icons/CartIcon"
import { usePathname } from "next/navigation"
import { NavbarData } from "@/json/NavbarData"

export default function Navbar() {
  const path = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NavbarData.map(item=>(
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
            <NavigationMenuLink asChild className={path===item.url ? 'text-accent-foreground' : ''}>
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
