function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-purple-100 bg-white/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 text-xl text-white shadow-md">
            📍
          </div>

          <div>
            <h1 className="text-xl font-bold text-purple-950">
              GeoFinder
            </h1>

            <p className="hidden text-xs text-gray-500 sm:block">
              Explore the world
            </p>
          </div>

        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#search"
            className="text-sm font-medium text-purple-700 hover:text-purple-900"
          >
            Search
          </a>

          <a
            href="#map"
            className="text-sm font-medium text-gray-600 hover:text-purple-700"
          >
            Map
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 hover:text-purple-700"
          >
            About
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Header;