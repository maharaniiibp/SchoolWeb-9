import React from "react";
import Image from "next/image";
import Anggota from "@/components/anggota";

const TentangKami = () => {
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
                  Tentang Kami
                </h2>
                <p class="mt-3 text-neutral-500 lg:text-xl lg:-mr-[15rem]">
                  Penjelasan Tentang Seokolah Kami Yang Dapat <br />
                  Menambah Referesi Anda{" "}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="asset/tentangKitaa.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* sekolah mulia alam insan berkarya */}
      <div className="container px-32 py-16 mx-auto">
  <div className="lg:-mx-6 lg:flex lg:items-center">
  <img
  src="/asset/orangsatu.png"
  alt="Sekolah Alam Insan Mulia Berkarya"
  width={450}
  height={450}
  layout="responsive"
  className="block mx-auto" // Add a class for centering the image
/>

    <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <h1 className="text-4xl font-bold text-zinc-700  lg:text-4xl lg:w-96">
              Sekolah Alam <br /> Insan Mulia Berkarya
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 ">
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
                <div className="w-10 h-10 relative">
                  <Image
                    src="/asset/book.png"
                    alt="Menggunakan Kurikulum Terbaru"
                    width={40}
                    height={40}
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
                <div className="w-10 h-10 relative">
                  <Image
                    src="/asset/clock.png"
                    alt="Efektivitas Waktu Saat Belajar Disekolah"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-2 flex">
                <div className="text-zinc-700 text-xl font-medium text-center md:text-left">
                  Efektivitas Waktu Saat Belajar Disekolah
                </div>
                <div className="text-zinc-700 font-normal text-center md:text-left">
                  Waktu belajar yang dirancang agar para siswa tidak jenuh
                </div>
              </div>
            </div>

            {/* Keunggulan 3 */}
            <div className="self-stretch p-6 justify-start items-center gap-8 flex">
              <div className="bg-sky-500 rounded-full justify-start items-start gap-5 flex">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/asset/pen-tool.png"
                    alt="Penyaluran Bakat dan Minat Siswa"
                    width={40}
                    height={40}
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
      <div class="py-6 lg:mt-24 text-center text-gray-800 mb-8">
        <div className="text-neutral-700 text-[56px] font-semibold font-['SF Pro Rounded'] tracking-widest">
          Video Profil
        </div>
        <div className="text-neutral-700 text-2xl font-normal font-['Poppins']">
          Berikut adalah video profil dari sekolah kami
        </div>
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          frameborder="0"
          allowfullscreen
          class="mx-auto rounded-xl md:w-[650px] lg:w-[1100px] md:h-[300px] lg:h-[500px] mt-8"
        ></iframe>
      </div>

      {/* Guru dan Staff Sekolah */}
      <section>
        <div className="mt-1 py-8">
          <div className="py-2 lg:px-6 lg:mt-0">
            <h1 className="text-4xl font-bold text-center text-gray-800  lg:text-4xl">
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
      <div className="mt-16 px-4 sm:px-8 md:px-16 lg:px-40 xl:px-40 2xl:px-40 flex flex-wrap sm:flex-row justify-center items-center gap-2">
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={128}
          height={80}
          className="max-w-xs mb-4 sm:mb-0 mr-8" // Tambahkan margin kanan
        />
        <Image
          src="/asset/Pertamina.png"
          alt="Pertamina Logo"
          width={128}
          height={80}
          className="max-w-xs mb-4 sm:mb-0 mr-8" // Tambahkan margin kanan
        />
        <Image
          src="/asset/Drumband.png"
          alt="Drumband Logo"
          width={128}
          height={80}
          className="max-w-xs mb-4 sm:mb-0 mr-8" // Tambahkan margin kanan
        />
        <Image
          src="/asset/Djarum.png"
          alt="Djarum Logo"
          width={128}
          height={80}
          className="max-w-xs mb-4 sm:mb-0 mr-8" // Tambahkan margin kanan
        />
        <Image
          src="/asset/Taekwondo.png"
          alt="Taekwondo Logo"
          width={128}
          height={80}
          className="max-w-xs mb-4 sm:mb-0 mr-8" // Tambahkan margin kanan
        />
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={128}
          height={80}
          className="max-w-xs mb-4 sm:mb-0" // Tidak perlu margin di gambar terakhir
        />
      </div>
    </div>
  );
};

export default TentangKami;
