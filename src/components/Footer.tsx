import { NavbarData } from "@/json/NavbarData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white">
      <section className="bg-primary flex flex-col md:flex-row justify-between gap-8 py-10 px-4 xs:px-8 lg:px-24 xl:px-30">
        <div className="">
          <header className="uppercase text-5xl font-black bg-gradient-to-br from-primary to-accent-foreground text-transparent bg-clip-text">
            <Link href='/'>Venture</Link>
          </header>

          <h2 className="font-bold text-lg uppercase mt-8 mb-2">Contact</h2>
          <div>
            <p>28 White tower, Street Name New York City, USA</p>
            <p>+91 987 654 3210</p>
            <p>example@gmail.com</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg uppercase mb-2">Menu</h1>
          <ul>
            {NavbarData.map(item=>(
              <li key={item.name}>
                <Link href={item.url || ''} className="hover:text-accent-foreground">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg uppercase mb-2">Newsletter</h1>

          <form className="w-fit md:w-full flex border border-secondary-foreground bg-secondary-foreground text-primary-foreground">
            <input type="text" name="email" id="name" placeholder="Enter Your Mail" className="bg-white py-2 ps-4 w-full md:w-auto" />
            <button className="p-2 font-semibold w-min">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="bg-primary-foreground flex justify-center py-4 px-4 xs:px-8 lg:px-24 xl:px-30 text-center">
        <p>&copy; 2025 All Rights Reserved By <span className="text-accent">Venture</span></p>
      </section>
    </footer>
  )
}
