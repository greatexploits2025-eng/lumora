export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        <h1 className="text-3xl font-bold text-white">
          Lumora
        </h1>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Studio</a>
          <a href="#">About</a>
        </div>

        <button className="rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-700">
          Get Started
        </button>

      </div>
    </nav>
  );
}