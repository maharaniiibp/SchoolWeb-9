import React from "react";
// import Header from '../components/Header';
import Image from "next/image";
import Link from "next/link";
// import Footer from '@/components/Footer';
import News from "@/components/news";

const Berita = () => {
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
                  Berita
                </h2>
                <p class="mt-3 text-neutral-500 lg:text-xl lg:-mr-[15rem]">
                  Halaman Yang Akan Memberikan Pemberitahuan <br />
                  dan Pengetahuan Untuk Anda{" "}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="asset/beritaa.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* informasi terbaru */}

      <div className="mt-28">
        <div className="mt-16 mb-8 py-2 ml-12 lg:px-6 lg:mt-0">
          {" "}
          {/* Menambahkan margin top */}
          <h2 className="text-4xl font-bold text-gray-800  lg:text-4xl">
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
          <div className="flex items-start gap-2 ml-[25px]">
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

        <div className="mb-10 flex flex-col items-center sm:flex-row sm:items-center p-5 justify-between">
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

              <a href="#" className="group px-2 hidden sm:inline-block">
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
    </div>
  );
};

export default Berita;
