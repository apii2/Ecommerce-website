export default function Footer() {
  return (
    <footer className="text-white">
      <section className="bg-primary flex flex-col md:flex-row justify-between gap-8 py-10 px-8 lg:px-24 xl:px-30">
        <div className="">
          <h1 className="text-5xl font-black uppercase mb-8">Venture</h1>

          <h2 className="font-bold text-lg uppercase mb-2">Contact</h2>
          <div className="leading-5.5">
            <p>28 White tower, Street Name New York City, USA</p>
            <p>+91 987 654 3210</p>
            <p>example@gmail.com</p>
          </div>
        </div>

        <div>
          <h1 className="font-bold text-lg uppercase mb-2">Menu</h1>
          <ul className="leading-5.5">
            <li>Home</li>
            <li>About</li>
            <li>Testimonial</li>
            <li>Products</li>
          </ul>
        </div>

        <div>
          <h1 className="font-bold text-lg uppercase mb-2">Newsletter</h1>

          <form className="w-fit md:w-full flex border border-secondary-foreground bg-secondary-foreground text-primary-foreground">
            <input type="text" name="email" id="name" placeholder="Enter Your Mail" className="bg-white py-2 ps-4 w-50 md:w-auto" />
            <button className="p-2 font-semibold w-min">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="bg-primary-foreground md:px-8 lg:px-24 xl:px-30 flex justify-center py-4">
        <p>&copy; 2025 All Rights Reserved By <span className="text-accent">Venture</span></p>
      </section>
    </footer>
  )
}
