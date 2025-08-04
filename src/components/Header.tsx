import Navbar from "./Navbar";

export default function Header() {
  return (
    <nav className="md:px-8 lg:px-24 xl:px-30 py-5 flex items-center justify-center fixed top-0 bg-white/97 shadow-lg w-full z-30">
      <header className="uppercase text-5xl font-black bg-gradient-to-br from-primary to-accent-foreground text-transparent bg-clip-text">
        Venture
      </header>

      <Navbar />
    </nav>
  )
}
