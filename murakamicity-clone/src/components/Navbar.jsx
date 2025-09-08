import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/vite.svg"
              alt="Murakami City"
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold tracking-widest">MURAKAMI CITY</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <NavLink to="/" end className={({ isActive }) => isActive ? 'text-pink-400' : 'text-white/80 hover:text-white'}>
              Home
            </NavLink>
            <NavLink to="/menu" className={({ isActive }) => isActive ? 'text-pink-400' : 'text-white/80 hover:text-white'}>
              Menu
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-pink-400' : 'text-white/80 hover:text-white'}>
              About us
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-pink-400' : 'text-white/80 hover:text-white'}>
              Contact us
            </NavLink>
            <a href="https://www.instagram.com/murakami_city/" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">Instagram</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+37411388888" className="hidden sm:inline text-sm text-white/80 hover:text-white">+374 11 388888</a>
            <Link to="/menu" className="inline-flex items-center rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-black hover:bg-pink-400">
              Order now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

