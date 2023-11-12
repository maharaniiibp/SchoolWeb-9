import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-no-repeat bg-cover bg-center w-full h-[700px] relative" style={{ 
      backgroundImage: 'url(./asset/bg.png)',
      minHeight: '400px', // Set a minimum height for smaller screens
    }}>
      <header className="py-5 px-4 md:px-10">
        <div className="container flex justify-between items-center">
          <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <div className="container mx-auto">
              <img src="./asset/logo.png" alt="" />
            </div>
          </a>

          {/* Navigation for larger screens */}
          <ul className="hidden md:flex space-x-3 bg-transparent">
            <li className="flex">
              <Link
                href="/"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === '/' ? 'border-b-4' : 'font-normal'
                }`}
              >
                Beranda
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/tentangKami"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === '/tentangKami' ? 'border-b-4' : 'font-normal'
                }`}
              >
                Tentang Kita
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/berita"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === '/berita' ? 'border-b-4' : 'font-normal'
                }`}
              >
                Berita
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/galeri"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === '/galeri' ? 'border-b-4' : 'font-normal'
                }`}
              >
                Galeri
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/kontak"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === '/kontak' ? 'border-b-4' : 'font-normal'
                }`}
              >
                Kontak
              </Link>
            </li>
          </ul>

          {/* Button for smaller screens */}
          <button className="p-2 md:hidden" onClick={handleToggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Navigation for smaller screens */}
          {menuOpen && (
            <div className="md:hidden absolute top-16 right-0 left-0 flex flex-col items-center bg-white">
              <Link
                href="/"
                passHref
                className={`py-2 hover:bg-gray-200 text-gray-800 ${
                  router.pathname === '/' ? 'font-semibold' : 'font-normal'
                }`}
                onClick={handleToggleMenu}
              >
                Beranda
              </Link>
              <Link
                href="/tentangKami"
                passHref
                className={`py-2 hover:bg-gray-200 text-gray-800 ${
                  router.pathname === '/tentangKami' ? 'font-semibold' : 'font-normal'
                }`}
                onClick={handleToggleMenu}
              >
                Tentang Kita
              </Link>
              <Link
                href="/berita"
                passHref
                className={`py-2 hover:bg-gray-200 text-gray-800 ${
                  router.pathname === '/berita' ? 'font-semibold' : 'font-normal'
                }`}
                onClick={handleToggleMenu}
              >
                Berita
              </Link>
              <Link
                href="/galeri"
                passHref
                className={`py-2 hover:bg-gray-200 text-gray-800 ${
                  router.pathname === '/galeri' ? 'font-semibold' : 'font-normal'
                }`}
                onClick={handleToggleMenu}
              >
                Galeri
              </Link>
              <Link
                href="/kontak"
                passHref
                className={`py-2 hover:bg-gray-200 text-gray-800 ${
                  router.pathname === '/kontak' ? 'font-semibold' : 'font-normal'
                }`}
                onClick={handleToggleMenu}
              >
                Kontak
              </Link>
            </div>
          )}
          
          {/* Additional section for larger screens */}
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded-full bg-blue-500 text-white">PPOB</button>
          </div>

          {/* <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
