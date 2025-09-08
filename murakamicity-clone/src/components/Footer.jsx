function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-white font-semibold tracking-wider">Murakami City</h3>
            <p className="text-white/70 text-sm">Delivery and pick up every day</p>
            <p className="text-white/70 text-sm">+374 11 388888</p>
            <p className="text-white/70 text-sm">info@murakamicity.com</p>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-white/70">16 ՀԵՐԱՑԻ ՊՈՂ․</p>
            <p className="text-white/70">ԵՐԵՎԱՆ 0025</p>
            <a className="text-pink-400 hover:text-pink-300" href="https://www.google.com/maps/place/Murakami/@40.1901817,44.5297725,1179m/data=!3m2!1e3!4b1!4m6!3m5!1s0x406abd801c119a6f:0xdff8fd81d03fecb4!8m2!3d40.1901817!4d44.5297725!16s%2Fg%2F11sncwfjzb?entry=ttu" target="_blank" rel="noreferrer">Open in Maps</a>
          </div>
          <div className="space-y-3">
            <p className="text-white/80 text-sm">Follow us</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/murakami.sushi.yerevan" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">Facebook</a>
              <a href="https://www.instagram.com/murakami_city/" target="_blank" rel="noreferrer" className="text-white/70 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-white/50">Copyright © {new Date().getFullYear()} Murakami City</div>
      </div>
    </footer>
  );
}

export default Footer;

