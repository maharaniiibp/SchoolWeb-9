// galeri.js
import React from "react";
import Image from "next/image";
import KumpulanKegiatanS from "../components/kumpulanKegiatanS";

const Galeri = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:w-1/2">
        <Image
          src="/asset/galeri.png"
          alt="Galeri Image"
          width={450}
          height={550}
          className="absolute top-[150px] right-[100px]"
        />

        <div className="max-w-xl absolute top-60">
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Galeri
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
            Halaman Yang Akan Memberikan <br />
            Dokumentasi Kegiatan Sekolah
          </p>
        </div>
      </div>
      <KumpulanKegiatanS />
      <div class="w-[1100px] h-9 justify-between items-center gap-[507px] inline-flex ">
        <div class="text-neutral-500 text-base font-normal">
          Menampilkan 9 Dari 21 Data
        </div>
        <div class="justify-start items-center flex">
          <div class="text-neutral-500 text-base font-normal">Halaman</div>
          <div class="justify-start items-center flex">
            <div class="w-6 h-6 relative"></div>
            <img class="" src="./asset/chevron-left.png" />
            <div class="px-[11px] justify-center items-center flex">
              <a href="#" class="group">
                <div class="text-pink-600 text-base font-normal">1</div>
              </a>
            </div>
            <div class="px-[11px] justify-center items-center flex">
              <a href="#" class="group">
                <div class="text-neutral-500 text-base font-normal">2</div>
              </a>
            </div>
            <div class="px-[11px] justify-center items-center flex">
              <a href="#" class="group">
                <div class="text-neutral-500 text-base font-normal">3</div>
              </a>
            </div>
            <img class="" src="./asset/chevron-right.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
