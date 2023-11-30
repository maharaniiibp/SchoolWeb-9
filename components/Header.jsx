import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [menuIcon, setIcon] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleSmallerScreenNavigation = () => {
    setIcon(!menuIcon);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <header
      className={`text-zinc-700 w-full ease-in duration-300 fixed top-0 left-0 z-20 px-12 ${
        scrolling ? "bg-slate-500" : "" // Set your desired background color, for example, grey
      }`}
    >
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-2 font-abc">
        <div className="relative z-10">
          <Link href="/" onClick={handleSmallerScreenNavigation}>
            <img src="./asset/logo.png" alt=""></img>
          </Link>
        </div>

        {/* large screen navigation */}
        <ul className="hidden md:flex space-x-3 bg-transparent">
          <li className="flex">
            <Link
              href="/"
              passHref
              className={`flex items-center px-3 -mb-1 text-white ${
                router.pathname === "/" ? "border-b-4" : "font-normal"
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
                router.pathname === "/tentangKami"
                  ? "border-b-4"
                  : "font-normal"
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
                router.pathname === "/berita" ? "border-b-4" : "font-normal"
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
                router.pathname === "/galeri" ? "border-b-4" : "font-normal"
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
                router.pathname === "/kontak" ? "border-b-4" : "font-normal"
              }`}
            >
              Kontak
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <div className="flex relative z-10">
            <Link href="#">
              <button className="mr-5 bg-blue-500 text-white hover:bg-blue-700 rounded-full uppercase font-bold px-12 py-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
                PPOB
              </button>
            </Link>
          </div>
        </div>

        {/* smaller screen navigation icons */}
        {/* onClick change the icons */}
        <div onClick={handleSmallerScreenNavigation} className="flex md:hidden">
          {menuIcon ? (
            <AiOutlineClose size={30} className="text-[#30396E]" />
          ) : (
            <AiOutlineMenu size={25} className="text-[#30396E]" />
          )}
        </div>

        {/* smaller screens - navbar */}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full text-center h-screen bg-[#619AEF] text-white ease-in duration-300"
              : "md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-[#619AEF] text-white ease-in duration-300"
          }
        >
          {/* smaller screen navbar link */}
          <div className="w-full">
            <ul className=" font-bold text-2xl">
              <li
                onClick={handleSmallerScreenNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer"
              >
                <Link href="/"> Beranda</Link>
              </li>

              <li
                onClick={handleSmallerScreenNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer"
              >
                <Link href="/tentangKami"> Tentang Kami</Link>
              </li>

              <li
                onClick={handleSmallerScreenNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer"
              >
                <Link href="/berita"> Berita</Link>
              </li>

              <li
                onClick={handleSmallerScreenNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer"
              >
                <Link href="/galeri"> Galeri</Link>
              </li>

              <li
                onClick={handleSmallerScreenNavigation}
                className="py-5 hover:text-[#CEFF00] cursor-pointer"
              >
                <Link href="/kontak">Kontak</Link>
              </li>
            </ul>

            <div className="flex flex-col justify-center items-center mt-16">
              <Link href="#" onClick={handleSmallerScreenNavigation}>
                <button className="mr-5 bg-blue-500 text-white hover:bg-blue-700 rounded-full uppercase font-bold px-12 py-3 transition-all duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300">
                  PPOB
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
