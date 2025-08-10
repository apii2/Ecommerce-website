'use client'
import { NavbarData } from "@/json/NavbarData";
import { MenuIcon } from "./icons/BurgerIcon";
import Navbar from "./Navbar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  DrawerOverlay
} from "@/components/ui/drawer"
import Link from "next/link";
import { CloseIcon } from "./icons/CloseIcon";
import { Fragment, useState } from "react";
import { AboutIcon, ContactIcon, HomeIcon, ProductIcon } from "./icons/MenuIcons";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const iconMap:{[key:string]: React.FC<{className?: string}>} = {
    Home: HomeIcon,
    Products: ProductIcon,
    About: AboutIcon,
    Contact: ContactIcon 
  }

  return (
    <nav className="px-4 xs:px-8 lg:px-24 xl:px-30 py-5 flex items-center justify-between fixed top-0 bg-white/97 shadow-lg w-full z-30">
      <header className="uppercase text-5xl font-black bg-gradient-to-br from-primary to-accent-foreground text-transparent bg-clip-text">
        Venture
      </header>

      <Navbar />

      <Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerTrigger asChild className="md:hidden" onClick={()=>setDrawerOpen(true)}>
          <MenuIcon className='w-10 stroke-primary-foreground hover:stroke-accent-foreground cursor-pointer' />
        </DrawerTrigger>


        <DrawerContent className="flex justify-center bg-accent px-4">
          <DrawerTitle className="hidden">Navigation Menu</DrawerTitle>

          <DrawerClose asChild onClick={()=>setDrawerOpen(false)}>
            <CloseIcon className='w-10 fill-white hover:fill-primary-foreground absolute top-0 right-0 translate-x-[-50%] xs:translate-x-[-84%] translate-y-[58%] cursor-pointer' />
          </DrawerClose>

          <div className="text-lg font-bold text-white">
            {NavbarData.map(item=>{
              const IconComponent = iconMap[item.name];
              return (
                <Fragment key={item.name}>
                  <Link href={item.url || ''} onClick={()=>setDrawerOpen(false)}
                    className="flex items-center gap-4 ps-4 py-3 group hover:bg-white/90 transition-colors">
                    {IconComponent && <IconComponent className="w-8 fill-white group-hover:fill-accent-foreground transition-colors" />}
                    <div className="group-hover:text-accent-foreground transition-colors">
                      {item.name}
                    </div>
                  </Link>
                  <hr />
                </Fragment>
              )
            })}
          </div>
        </DrawerContent>
      </Drawer>
    </nav>
  )
}
