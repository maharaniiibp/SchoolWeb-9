import React from "react";
// import Header from '../components/Header';
import Image from "next/image";
import Link from "next/link";
// import Footer from '@/components/Footer';
import News from "@/components/news";

const Berita = () => {
  return (
    <div>
      <main
        className=" bg-background flex "
        style={{
          backgroundImage: "url(asset/bg.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
        }}
      ></main>
      <div className="flex justify-center items-center lg:w-1/2">
        <img
          className="absolute top-[282px] right-[100px]"
          src="/asset/berita.png"
          style={{ width: "450px", height: "550px" }} // Adjust the width and height as needed
        />
        <div className="mt-[60px] max-w-xl absolute top-60">
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Berita
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
          Halaman Yang Akan Memberikan Pemberitahuan <br /> dan Pengetahuan Untuk Anda {" "}
          </p>
        </div>
      </div>

      {/* informasi terbaru */}

      <div className="mt-28">
        <div className="mt-16 mb-8 py-2 ml-12 lg:px-6 lg:mt-0">
          {" "}
          {/* Menambahkan margin top */}
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl">
            Informasi Terbaru
          </h2>
        </div>
        <div className="mx-auto max-w-[1100px]">
          <Image
            src="/asset/svhoolbutton.png"
            alt="School Button"
            width={1100}
            height={469.33}
            className="rounded-lg mx-auto mt-8 mb-8"
          />
        </div>
      </div>

      <div className="mx-auto max-w-[1100px]">
        <p className="text-black font-semibold text-2xl mb-5">
          Kegiatan Belajar Mengajar Offline Dimulai
        </p>
        <p className="text-lg font-normal">
          Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali
          belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas
          saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat
          anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama
          ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih
          banyak menghabiskan waktu&nbsp;
          <Link href="/artikel">
            <span className="text-blue-500 group">Read More ...</span>
          </Link>
        </p>
      </div>

      {/* info */}

      <div className="pt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between px-5 mt-5">
          <div className="flex items-start gap-2">
            <div className="p-3 flex items-start gap-2.5">
              <Link href="/berita">
                <span className="text-xl text-zinc-700 border-b-2 border-blue-500 tracking-wide">
                  Semua
                </span>
              </Link>
            </div>
            <div className="p-3 flex items-start gap-2.5">
              <Link href="/berita">
                <span className="text-zinc-700 text-xl font-normal tracking-wide">
                  Berita
                </span>
              </Link>
            </div>
            <div className="p-3 flex items-start gap-2.5">
              <Link href="/berita">
                <span className="text-zinc-700 text-xl font-normal tracking-wide">
                  Pengumuman
                </span>
              </Link>
            </div>
          </div>
        </div>

        <News />

        <div class="flex flex-col sm:flex-row items-center justify-between p-5">
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
    </div>
  );
};

export default Berita;
