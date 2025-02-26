import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Left Side: Logo and Name Side by Side */}
        <div className="flex items-center space-x-2">
          <Link href="/">
        <Image
          src="/Image/logo.jpg" // Adjusted the path
          alt="Logo"
          width={40}
          height={40}
          className="cursor-pointer"
        />
          </Link>
          <Link href="/">
        <span className="text-xl font-bold text-gray-800">Anvith Sphere</span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
        Home
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-gray-900">
        Blog
          </Link>
          <Link href="/projects" className="text-gray-700 hover:text-gray-900">
        Projects
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
        About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
        Contact
          </Link>
        </div>

        {/* Right Side: Search Icon & Subscribe Button */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900">🔍</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Subscribe
          </button>
          <Link href="/signup">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Sign Up
        </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
