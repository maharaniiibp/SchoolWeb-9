// galeri.js
import React from "react";
import Image from "next/image";
import KumpulanKegiatanS from "../components/kumpulanKegiatanS";

const Galeri = () => {
  return (
    <div>
      <main
        className=" bg-background flex "
        style={{
          backgroundImage: "url(asset/galeri.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
        }}
      ></main>
      <div className="flex justify-center items-center lg:w-1/2">
        {/* <img
          className="absolute top-[282px] right-[100px]"
          src="/asset/galeri.png"
          style={{ width: "450px", height: "550px" }} // Adjust the width and height as needed
        /> */}
        <div className="mt-[60px] max-w-xl absolute top-60">
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Galeri
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
          Halaman Yang Akan Memberikan <br /> Dokumentasi Kegiatan Sekolah {" "}
          </p>
        </div>
      </div>
      
      <KumpulanKegiatanS />
      <div class="mb-12 flex flex-col sm:flex-row items-center justify-between p-5">
        <div class="text-neutral-500 text-base font-normal mb-3 sm:mb-0 ml-16">
          Menampilkan 9 Dari 21 Data
        </div>

        <div class="flex items-center">
          <div class="text-neutral-500 text-base font-normal mb-2 sm:mb-0 sm:mr-2">
            Halaman
          </div>

          <div class="flex items-center">
            <div class="w-6 h-6 relative"></div>
            <img
              class="hidden sm:inline-block"
              src="./asset/chevron-left.png"
            />

            <a href="#" class="group px-2">
              <div class="text-blue-500 text-base font-normal">1</div>
            </a>

            <a href="#" class="group px-2 hidden sm:inline-block">
              <div class="text-neutral-500 text-base font-normal">2</div>
            </a>

            <a href="#" class="group px-2 hidden sm:inline-block">
              <div class="text-neutral-500 text-base font-normal">3</div>
            </a>

            <img
              class="hidden sm:inline-block"
              src="./asset/chevron-right.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
