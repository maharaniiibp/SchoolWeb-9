import React from 'react';
// import Header from '../components/Header';
import Image from 'next/image';
// import Footer from '@/components/Footer';

const TentangKami = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex justify-center items-center lg:w-1/2">
      <img
  className='absolute top-[150px] right-[100px]'
  src='/asset/tentangKita.png'
  style={{ width: '450px', height: '550px' }} // Adjust the width and height as needed
/>   
      <div className="max-w-xl absolute top-60" >
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Tentang Kami
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
          Penjelasan Tentang Sekolah Kami Yang Dapat <br /> Menambah Referesi Anda  </p>
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
            Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minatnya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang
          </p>

          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-10">
            <a rel="" href="#" className="px-8 py-3 text-lg bg-blue-500 text-white font-semibold rounded-2xl border-gray-100">
              Mulai Belajar
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* keunggulan sekolah kami */}
    <section>
      <div className="w-[1263px] h-[500px] p-[120px] justify-center items-center gap-20 inline-flex">
        <div className="text-4xl text-zinc-700 font-bold ">
          Keunggulan <br /> Sekolah Kami
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch p-6 justify-start items-center gap-8 inline-flex">
            <div className="bg-yellow-400 rounded-[80px] justify-start items-start gap-2.5 flex">
              <div className="w-7 h-7 relative">
                <Image
                  src="/asset/book.png"
                  alt="Menggunakan Kurikulum Terbaru"
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-center text-zinc-700 text-xl font-medium">
                Menggunakan Kurikulum Terbaru
              </div>
              <div className="text-center text-zinc-700 font-normal">
                Menerapkan kurikulum terbaru saat proses belajar
              </div>
            </div>
          </div>
          <div className="self-stretch p-6 justify-start items-center gap-8 inline-flex">
            <div className="bg-red-400 rounded-[80px] justify-start items-start gap-2.5 flex">
              <div className="w-7 h-7 relative">
                <Image
                  src="/asset/clock.png"
                  alt="Efektifitas Waktu Saat Belajar Disekolah"
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-center text-zinc-700 text-xl font-medium">
                Efektifitas Waktu Saat Belajar Disekolah
              </div>
              <div className="text-center text-zinc-700 font-normal">
                Waktu belajar yang dirancang agar para siswa tidak jenuh
              </div>
            </div>
          </div>
          <div className="self-stretch p-6 justify-start items-center gap-8 inline-flex">
            <div className="bg-sky-500 rounded-[80px] justify-start items-start gap-5 flex">
              <div className="w-7 h-7 relative">
                <Image
                  src="/asset/pen-tool.png"
                  alt="Penyaluran Bakat dan Minat Siswa"
                  width={28}
                  height={28}
                />
              </div>
            </div>
            <div className="self-stretch flex-col justify-start items-start gap-2 inline-flex">
              <div className="text-center text-zinc-700 text-xl font-medium">
                Penyaluran Bakat dan Minat Siswa
              </div>
              <div className="text-center text-zinc-700 font-normal">
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
          className="w-[1100px] h-[469.33px] rounded-lg mx-auto mt-2 mb-8"
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
        <div className="px-20">
          <div className="mx-auto max-w-2xl px-4 lg:pt-4 lg:pb-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {/* You can repeat this block for each teacher/staff */}
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/a.png"
                    alt="Teacher A"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mrs. Y</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Kepala Sekolah</p>
              </a>
              {/* Repeat this block for other teachers/staff */}
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/b.png"
                    alt="Teacher B"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mrs. X</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Kepala Staff</p>
              </a>
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/c.png"
                    alt="Teacher C"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mrs. Y</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Guru Matematika</p>
              </a>
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/d.png"
                    alt="Teacher D"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mr. X</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Guru Biologi</p>
              </a>
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/e.png"
                    alt="Teacher E"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mrs. Y</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Guru Fisika</p>
              </a>
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/f.png"
                    alt="Teacher F"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mr. X</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Guru Bahasa</p>
              </a>
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/g.png"
                    alt="Teacher G"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mrs. Y</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Guru Kimia</p>
              </a>
              <a href="#" className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Image
                    src="/asset/h.png"
                    alt="Teacher H"
                    width={800}
                    height={800}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg text-gray-900">Mr. X</h3>
                <p className="mt-1 text-sm font-normal text-gray-500">Guru Seni Budaya</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* partner kerja sama */}
    <div className="py-2 text-center text-zinc-700">
      <h1 className="text-4xl mb-5">Partner Kerja Sama</h1>
      <h2>Kami Bekerja sama dengan berbagai lembaga Diseluruh <br /> Indonesia untuk menyalurkan bakat siswa kami</h2>
    </div>
    {/* logo */}
    <div className="mt- px-40 justify-center items-center gap-20 inline-flex">
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={130}
          height={80}
        />
        <Image
          src="/asset/Pertamina.png"
          alt="Pertamina Logo"
          width={130}
          height={80}
        />
        <Image
          src="/asset/Drumband.png"
          alt="Drumband Logo"
          width={130}
          height={80}
        />
        <Image
          src="/asset/Djarum.png"
          alt="Djarum Logo"
          width={130}
          height={80}
        />
        <Image
          src="/asset/Taekwondo.png"
          alt="Taekwondo Logo"
          width={130}
          height={80}
        />
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={130}
          height={80}
        />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default TentangKami; 