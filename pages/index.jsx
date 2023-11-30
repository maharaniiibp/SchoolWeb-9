import React from "react";
import Image from "next/image";
import KeunggulanS from "../components/keunggulanS";

const Home = () => {
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
                  Tuntut Ilmu Untuk Masa <br />
                  Depan Yang Lebih Baik
                </h2>
                <p class="mt-3 text-neutral-500 lg:text-xl lg:-mr-[15rem]">
                  jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna{" "}
                  <br /> untuk kehidupan anda kedepannya agar lebih bermanfaat
                  dalam <br /> hidup anda dan orang lain{" "}
                </p>
                <button class="w-auto px-5 py-2 mt-6 text-base tracking-wider text-white transition-colors duration-300 transform bg-blue-500 rounded-3xl lg:w-auto hover:bg-purple-400 focus:outline-none focus:bg-blue-500 lg:-mr-[10rem]">
                  Daftar Sekarang
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="asset/indexx.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* keunggulan sekolah */}
      <KeunggulanS />

      {/* sekolah Alam insan mulia */}
      <div className="mt-14">
        <div className="container px-8 sm:px-16 md:px-24 lg:px-32 py-8 md:py-16 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <Image
              src="/asset/orangsatu.png"
              alt="Sekolah Alam Insan Mulia Berkarya"
              width={552}
              height={533}
              layout="responsive"
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <h1 className="text-4xl text-neutral-700 font-bold lg:text-4xl lg:w-96">
                Sekolah Alam <br />
                Insan Mulia Berkarya
              </h1>

              <p className="max-w-lg mt-6 text-neutral-500 text-lg font-['Poppins']">
                Sekolah Kami merupakan sekolah informal yang dikelola untuk
                membantu anak mengembangkan bakat dan kemampuannya. Dengan
                memberikan kurikulum terbaik agar anak bisa memilih minatnya dan
                fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak
                tahun 1989 dan terus berkembang.
              </p>

              <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-10">
                <a
                  rel=""
                  href="#"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-lg bg-blue-500 text-white font-semibold rounded-2xl border-gray-100"
                >
                  Mulai Belajar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* partner kerja sama */}
      <div className="mt-10 sm:mt-20 md:mt-28">
        <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[75%] 2xl:w-[70%] mx-auto h-auto sm:h-36 justify-start items-center flex flex-col sm:flex-row gap-4 sm:gap-20 px-6 sm:px-20">
          <div className="text-zinc-700 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            <h1>
              Partner <br /> Kerja Sama
            </h1>
          </div>
          <div className="mt-4 sm:mt-0 text-neutral-500 text-base sm:text-lg font-normal">
            Kami Bekerja sama dengan berbagai lembaga dan perusahaan besar di
            seluruh Indonesia untuk menyalurkan bakat siswa kami. Diharapkan
            dengan adanya kerja sama ini, siswa dapat meraih prestasi.
          </div>
        </div>
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

      {/* Kumpulan kegiatan sekolah */}
      <div
        className="mt-44 container justify-center mx-auto rounded-xl"
        style={{
          backgroundImage: "url(/asset/inibg.png)",
          borderRadius: "20px",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col sm:flex-row justify-between">
          <h1 className="text-white font-bold text-4xl py-4 sm:pr-4 sm:pt-14 ml-8">
            Kumpulan Kegiatan Sekolah
          </h1>
          <p className="pt-4 sm:pt-14 mr-8 text-white text-right">
            Lihat Semua
          </p>
        </div>

        <div className="container flex flex-col justify-center mx-auto sm:py-10 lg:py-5 lg:px-3 lg:flex-row">
          <div className="inline-flex flex-col sm:flex-row sm:pb-10 gap-4 sm:gap-8 items-center justify-center">
            <div className="flex flex-col w-full sm:w-[304px] rounded-[16px] overflow-hidden">
              <Image
                src="/asset/belajarmengajar.png"
                alt="Belajar Mengajar"
                width={304}
                height={320}
              />
              <a
                href="#"
                className="text-blue-500 p-4 bg-white inline-flex justify-between rounded-b-2xl font-medium"
              >
                Belajar Mengajar
                <span>
                  <Image
                    src="/asset/panahkanan.png"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                  />
                </span>
              </a>
            </div>
            <div className="flex flex-col w-full sm:w-[304px] rounded-[16px] overflow-hidden">
              <Image
                src="/asset/sharingsession.png"
                alt="Sharing Session"
                width={304}
                height={320}
              />
              <a
                href="#"
                className="text-blue-500 p-4 bg-white inline-flex justify-between rounded-b-2xl font-medium"
              >
                Sharing Session
                <span>
                  <Image
                    src="/asset/panahkanan.png"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                  />
                </span>
              </a>
            </div>
            <div className="flex flex-col w-full sm:w-[304px] rounded-[16px] overflow-hidden">
              <Image
                src="/asset/kelulusan.png"
                alt="Kelulusan"
                width={304}
                height={320}
              />
              <a
                href="#"
                className="text-blue-500 p-4 bg-white inline-flex justify-between rounded-b-2xl font-medium"
              >
                Kelulusan
                <span>
                  <Image
                    src="/asset/panahkanan.png"
                    alt="Arrow Right"
                    width={20}
                    height={20}
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* salurkan minat bakat */}
      <section className="mb-8 sm:mb-16 md:mb-24 pt-8 sm:pt-16 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-32 2xl:px-40">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between">
          <div className="sm:mt-0 mt-8 sm:w-[50%]">
            <h1 className="w-full text-neutral-700 text-2xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-widest mb-4">
              Salurkan <br />
              Minat Bakat Anak
            </h1>
            <p className="w-full text-neutral-500 text-lg sm:text-xl font-normal font-sans mb-8">
              Kami membuka pendaftaran baru tahun ajaran 2022. <br />
              Segera daftarkan anak Anda di sekolah kami <br /> dapatkan
              penawaran menarik.
            </p>
            <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-10">
              <a
                rel=""
                href="#"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 text-lg bg-blue-500 text-white font-semibold rounded-2xl border-gray-100"
              >
                Mulai Belajar
              </a>
            </div>
          </div>
          <div className="w-full sm:w-[50%] mt-8 sm:mt-0 text-center">
            <Image
              src="/asset/salurkanminat.png"
              alt=""
              width={447}
              height={604}
              className="object-cover inline-block"
            />
          </div>
        </div>
      </section>

      {/* salurkan minat bakat anak */}
      <div className="mt-[70px]">
        <div className="mt-15 px-[90px] sm:px-8 md:px-10 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-neutral-700 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-sans tracking-widest">
            <h1>Information</h1>
          </div>

          <button className="mt-4 sm:mt-0">
            <div className="text-sky-500 text-2xl font-medium font-['Poppins']">
              Lihat Semua
            </div>
          </button>
        </div>

        <div className="px-20 mt-8">
          <div className="mx-auto max-w-2xl px-4 lg:pt-4 lg:pb-48 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
              <a href="#" className="group shadow-none">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/kegiatanbelajar.png"
                    alt=" "
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-xl text-neutral-700  font-['Poppins']">
                  Kegiatan Belajar Mengajar <br /> Offline Dimulai
                </h3>
                <p className="mt-1 text-neutral-500 text-base font-normal font-['Poppins'] mb-4">
                  Kegiatan yang adakan saat siswa selesai melakukan studi
                  sekolah
                </p>
              </a>
              <a href="#" className="group shadow-none">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/penambilanraport.png"
                    alt=" "
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-xl text-neutral-700 font-['Poppins']">
                  Pengambilan Raport Semester <br />
                  Ganjil
                </h3>
                <p className="mt-1 text-neutral-500 text-base font-normal font-['Poppins']  mb-4">
                  Kegiatan yang adakan saat siswa selesai melakukan studi
                  sekolah
                </p>
              </a>
              <a href="#" className="group shadow-none">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/jambelajar.png"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-xl text-neutral-700  font-['Poppins']">
                  Jam Belajar Yang Efektif <br />
                  Pada Anak 8 - 12 Tahun
                </h3>
                <p className="mt-1 text-neutral-500 text-base font-normal font-['Poppins']  mb-4">
                  Kegiatan yang adakan saat siswa selesai melakukan studi
                  sekolah
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
