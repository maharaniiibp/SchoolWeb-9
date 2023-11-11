import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className=" bg-white text-zinc-700">
       <div class="container px-16 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
            <div class="pt-14 grid grid-cols-12">
                <div class=" md:pb-0 md:col-span-6">
            <div className="container mx-auto">
              <Image src="/asset/Vector.png" alt="" width={200} height={200} />
            </div>
          </div>
          <div class="col-span-2 text-center md:text-left ">
                    <p class="pb-3 text-lg font-medium text-blue-950">Informasi</p>
                    <ul>
              <li>
                <a rel="" href="berita.html" className="text-gray-500 text-sm">Artikel</a>
              </li>
              <li>
                <a rel="" href="galeri.html" className="text-gray-500 text-sm">Galeri</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-center md:text-left">
            <p className="pb-5 text-lg font-medium">Tentang</p>
            <ul>
              <li>
                <a rel="" href="tentangKita.html" className="text-gray-500 text-sm">Tentang Kami</a>
              </li>
              <li>
                <a rel="" href="kontak.html" className="text-gray-500 text-sm">Hubungi Kami</a>
              </li>
            </ul>
          </div>
          <div className="col-span-2 text-center md:text-left">
            <p className="pb-5 text-lg font-medium">Kantor Kami</p>
            <ul>
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">Indonesia <br /> Unamed road RT 01 RW 02 Surabaya</a>
              </li>
            </ul>
          </div>
          <div className="col-span-5 text-center md:text-left">
            <p className="pb-1 text-gray-500 text-lg font-normal">Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami, untuk kehidupan yang lebih bermanfaat</p>
            <div className="w-[140px] h-9 justify-center items-start gap-4 inline-flex pt-5">
              <a href="#" className="group">
                <div className="p-2 bg-white bg-opacity-40 rounded-[40px] justify-start items-start gap-2.5 flex">
                  <div className="w-5 h-5 relative">
                    <Image src="/asset/tweet.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </a>
              <a href="#" className="group">
                <div className="p-2 bg-white bg-opacity-40 rounded-[40px] justify-start items-start gap-2.5 flex">
                  <div className="w-5 h-5 relative">
                    <Image src="/asset/facebook.png" alt="" width={20} height={20} />
                  </div>
                </div>
              </a>
              <div className="p-2 bg-white bg-opacity-40 rounded-[40px] justify-start items-start gap-2.5 flex">
                <div className="w-5 h-5 relative">
                  <div className="w-[17.33px] h-[17.33px] left-[1.33px] top-[1.47px] absolute">
                    <a href="#" className="group">
                      <Image src="/asset/instagram.png" alt="" width={17.33} height={17.33} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6  text-sm text-center dark:text-gray-400">© 1968 Company Co. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
