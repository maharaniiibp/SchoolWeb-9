// galeri.js
import React from "react";
import Image from "next/image";
import KumpulanKegiatanS from "../components/kumpulanKegiatanS";

const Galeri = () => {
  return (
    <div className="bg-white">
      <section
        className="bg-cover h-auto bg-center w-full"
        style={{ backgroundImage: "url('asset/background.png')" }}
      >
        <div className="container pt-40">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div class="ml-8 lg:max-w-lg text-center md:text-left lg:text-left md:px-6 mt-8 md:mt-10 lg:mt-0">
                <h2 class="text-3xl font-bold text-neutral-700 lg:text-5xl lg:-mr-[20rem] lg:leading-[60px]">
                  Galeri
                </h2>
                <p class="mt-3 text-neutral-500 lg:text-xl lg:-mr-[15rem]">
                  Halaman Yang Akan Memberikan <br />
                  Dokumentasi Kegiatan Sekolah{" "}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="asset/galerii.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <KumpulanKegiatanS />

      <div className="mb-10 flex flex-col items-center sm:flex-row sm:items-center justify-between">
        <div className="text-neutral-500 text-base font-normal mb-3 sm:mb-0 sm:ml-16">
          Menampilkan 9 Dari 21 Data
        </div>

        <div className="flex items-center  mt-4 sm:mt-0">
          <div className="text-neutral-500 text-base font-normal mb-2 sm:mb-0 sm:mr-2">
            Halaman
          </div>

          <div className="flex items-center">
            <div className="w-6 h-6 relative"></div>
            <img
              className="hidden sm:inline-block"
              src="./asset/chevron-left.png"
            />

            <a href="#" className="group px-2">
              <div className="text-blue-500 text-base font-normal">1</div>
            </a>

            <a href="#" className="group px-2 hidden sm:inline-block">
              <div className="text-neutral-500 text-base font-normal">2</div>
            </a>

            <a href="#" className=" group px-2 hidden sm:inline-block">
              <div className="text-neutral-500 text-base font-normal">3</div>
            </a>

            <img
              className="hidden sm:inline-block mr-20"
              src="./asset/chevron-right.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Galeri;
