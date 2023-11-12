import React from "react";
import Image from "next/image";
import Anggota from "@/components/anggota";

const TentangKami = () => {
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
          className="absolute top-[194px] right-[100px]"
          src="/asset/tentangKita.png"
          style={{ width: "450px", height: "550px" }} // Adjust the width and height as needed
        />
        <div className="max-w-xl absolute top-60">
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Tentang Kami
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
            Penjelasan Tentang Sekolah Kami Yang Dapat <br /> Menambah Referesi
            Anda{" "}
          </p>
        </div>
      </div>

      {/* sekolah mulia alam insan berkarya */}
      <div className="container px-32 py-16 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <Image
            src="/asset/orangsatu.png"
            alt="Sekolah Alam Insan Mulia Berkarya"
            width={600}
            height={900}
            layout="responsive"
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 className="text-4xl font-bold text-zinc-700 dark:text-white lg:text-4xl lg:w-96">
              Sekolah Alam <br /> Insan Mulia Berkarya
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              Sekolah Kami merupakan sekolah informal yang dikelola untuk
              membantu anak mengembangkan bakat dan kemampuannya. Dengan
              memberikan kurikulum terbaik agar anak bisa memilih minatnya dan
              fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak
              tahun 1989 dan terus berkembang
            </p>

            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-10">
              <a
                rel=""
                href="#"
                className="px-8 py-3 text-lg bg-blue-500 text-white font-semibold rounded-2xl border-gray-100"
              >
                Mulai Belajar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* keunggulan sekolah kami */}
      <section className="w-full px-4 sm:px-8 md:px-16 lg:px-20 xl:px-20 2xl:px-20">
        <div className="w-full p-8 justify-center items-center gap-8 flex flex-col md:flex-row">
          <div className="text-4xl text-zinc-700 font-bold text-center md:text-left mb-8 md:mb-0">
            Keunggulan <br /> Sekolah Kami
          </div>
          <div className="flex flex-col gap-8 items-center md:items-start">
            {/* Keunggulan 1 */}
            <div className="self-stretch p-6 justify-start items-center gap-8 flex">
              <div className="bg-yellow-400 rounded-full justify-start items-start gap-2.5 flex">
                <div className="w-7 h-7 relative">
                  <Image
                    src="/asset/book.png"
                    alt="Menggunakan Kurikulum Terbaru"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="text-zinc-700 text-xl font-medium text-center md:text-left">
                  Menggunakan Kurikulum Terbaru
                </div>
                <div className="text-zinc-700 font-normal text-center md:text-left">
                  Menerapkan kurikulum terbaru saat proses belajar
                </div>
              </div>
            </div>

            {/* Keunggulan 2 */}
            <div className="self-stretch p-6 justify-start items-center gap-8 flex">
              <div className="bg-red-400 rounded-full justify-start items-start gap-2.5 flex">
                <div className="w-7 h-7 relative">
                  <Image
                    src="/asset/clock.png"
                    alt="Efektifitas Waktu Saat Belajar Disekolah"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="text-zinc-700 text-xl font-medium text-center md:text-left">
                  Efektifitas Waktu Saat Belajar Disekolah
                </div>
                <div className="text-zinc-700 font-normal text-center md:text-left">
                  Waktu belajar yang dirancang agar para siswa tidak jenuh
                </div>
              </div>
            </div>

            {/* Keunggulan 3 */}
            <div className="self-stretch p-6 justify-start items-center gap-8 flex">
              <div className="bg-sky-500 rounded-full justify-start items-start gap-5 flex">
                <div className="w-7 h-7 relative">
                  <Image
                    src="/asset/pen-tool.png"
                    alt="Penyaluran Bakat dan Minat Siswa"
                    width={28}
                    height={28}
                  />
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="text-zinc-700 text-xl font-medium text-center md:text-left">
                  Penyaluran Bakat dan Minat Siswa
                </div>
                <div className="text-zinc-700 font-normal text-center md:text-left">
                  Berbagai macam kegiatan akademik maupun non-akademik
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* video profil */}
      <div className="mt-6 py-8">
        <div className="mt-8 py-2 lg:px-6 lg:mt-0">
          <h1 className="font-semibold text-center text-4xl py-5 text-zinc-700">
            Video Profil
          </h1>
          <h2 className="font-semibold text-center text-xl text-zinc-700">
            Berikut adalah video Profil dari sekolah kami
          </h2>
          <br />
          <Image
            src="/asset/videoprofil.png"
            alt="Video Profil"
            width={1100}
            height={469.33}
            className="w-full h-full object-cover rounded-lg mx-auto mt-2 mb-8"
          />
        </div>
      </div>

      {/* Guru dan Staff Sekolah */}
      <section>
        <div className="mt-1 py-8">
          <div className="py-2 lg:px-6 lg:mt-0">
            <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white lg:text-4xl">
              Guru dan Staff Sekolah
            </h1>
          </div>
          <Anggota />
        </div>
      </section>

      {/* partner kerja sama */}
      <div className="py-8 text-center text-zinc-700 ">
        <h1 className="text-4xl mb-5">Partner Kerja Sama</h1>
        <h2>
          Kami Bekerja sama dengan berbagai lembaga Diseluruh <br /> Indonesia
          untuk menyalurkan bakat siswa kami
        </h2>
      </div>

      {/* logo */}
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40 2xl:px-40 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={140}
          height={90}
          className="max-w-xs mb-4 sm:mb-0"
        />
        <Image
          src="/asset/Pertamina.png"
          alt="Pertamina Logo"
          width={140}
          height={90}
          className="max-w-xs mb-4 sm:mb-0"
        />
        <Image
          src="/asset/Drumband.png"
          alt="Drumband Logo"
          width={140}
          height={90}
          className="max-w-xs mb-4 sm:mb-0"
        />
        <Image
          src="/asset/Djarum.png"
          alt="Djarum Logo"
          width={140}
          height={90}
          className="max-w-xs mb-4 sm:mb-0"
        />
        <Image
          src="/asset/Taekwondo.png"
          alt="Taekwondo Logo"
          width={140}
          height={90}
          className="max-w-xs mb-4 sm:mb-0"
        />
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={140}
          height={90}
          className="max-w-xs mb-4 sm:mb-0"
        />
      </div>
    </div>
  );
};

export default TentangKami;
