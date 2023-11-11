import React from 'react';
// import Header from '../components/Header';
import Image from 'next/image';
// import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <div >
        <div className="flex justify-center items-center lg:w-1/2 ">
        <img
  className='absolute top-[150px] right-[100px]'
  src='/asset/beranda.png'
  style={{ width: '450px', height: '550px' }} // Adjust the width and height as needed
/>          <div className="max-w-xl absolute top-60" > {/* Atur margin-top di sini */}
            <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
              Tuntut Ilmu Untuk Masa <br /> Depan Yang Cerah
            </h1>
            <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
              jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna <br /> untuk kehidupan anda kedepannya agar lebih bermanfaat dalam <br /> hidup anda dan orang lain
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="" href="#" className="px-8 py-3 text-lg bg-blue-500 text-white font-semibold rounded-2xl ">
                Mulai Belajar
              </a>
            </div>
          </div>
        </div>
      </div>
      <section>
      <div className="items-center w-[1263px] h-[8px] p-[150px] top-28  ">
        <div className="w-px"></div>
        <div className="self-stretch justify-start gap-8 inline-flex">
          <div className="justify-start items-center gap-6 flex">
            <div className="p-5 bg-red-400 rounded-[80px] justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img className="absolute" src="/asset/clock.png" alt="Clock Icon" />
              </div>
            </div>
            <div className="w-[240px] self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch  text-zinc-700 text-xl font-medium">Efektifitas Waktu Saat Belajar Disekolah</div>
            </div>
          </div>
          <div className="justify-start items-center gap-6 flex pl-6">
            <div className="p-5 bg-yellow-400 rounded-[80px] justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img className="absolute" src="/asset/book.png" alt="Book Icon" />
              </div>
            </div>
            <div className="w-[240px] self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-zinc-700 text-xl font-medium">Menggunakan Kurikulum Terbaru</div>
            </div>
          </div>
          <div className="justify-start items-center gap-6 flex">
            <div className="p-5 bg-green-500 rounded-[80px] justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative">
                <img className="absolute" src="/asset/pen-tool.png" alt="Pen Tool Icon" />
              </div>
            </div>
            <div className="w-[240px] self-stretch flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch text-zinc-700 text-xl font-medium">Penyaluran Bakat <br/>dan Minat Siswa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* ------------- */}
    <div className="mt-14">
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

    {/* partner kerja sama */}
      <div className="mt-24">
        <div className="w-[1200px] h-36 justify-start items-center gap-20 inline-flex mt-5 px-20">
          <div className="text-zinc-700 text-[50px] font-bold px-10 leading-tight">
            <h1>Partner <br /> Kerja Sama</h1>
          </div>
          <div className="grow shrink basis-0 text-neutral-500 text-xl font-normal">Kami Bekerja sama dengan berbagai lembaga dan perusahaan besar diseluruh Indonesia untuk menyalurkan bakat siswa kami. diharapkan dengan adanaya kerja sama ini siswa dapat meraih prestasi</div>
        </div>
      </div>

      {/* logo */}
      <div className="mt-16 px-40 justify-center items-center gap-20 inline-flex">
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={140}
          height={90}
        />
        <Image
          src="/asset/Pertamina.png"
          alt="Pertamina Logo"
          width={140}
          height={90}
        />
        <Image
          src="/asset/Drumband.png"
          alt="Drumband Logo"
          width={140}
          height={90}
        />
        <Image
          src="/asset/Djarum.png"
          alt="Djarum Logo"
          width={140}
          height={90}
        />
        <Image
          src="/asset/Taekwondo.png"
          alt="Taekwondo Logo"
          width={140}
          height={90}
        />
        <Image
          src="/asset/DBL.png"
          alt="DBL Logo"
          width={140}
          height={90}
        />
      </div>
    </div>

    {/* Kumpulan kegiatan sekolah */}
    <div className="container justify-center mx-auto rounded-xl" style={{ backgroundImage: 'url(/asset/bgdua.png)', borderRadius: '20px', backgroundSize: 'cover' }}>
      <div className='flex justify-between'>
      <h1 className=" text-white font-bold text-4xl  py-4 pr-2 pt-14">
        Kumpulan Kegiatan Sekolah
      </h1>
      {/* <div className="w-[550px] h-[130px] pl-[20px] pr-[120px] pt-1.5 text-sm flex-col items-center text-end text-white"> */}
        <p className="pt-14">Lihat Semua</p>
      {/* </div> */}
      </div>
   
    <div className="container flex flex-col justify-center mx-auto sm:py-20 lg:py-10 lg:px-6 lg:flex-row">
      <div className="inline-flex pb-[24px] gap-[32px] lg:px-28 items-center justify-center ">
        <div className="flex flex-col h-[305px] w-[304px] rounded-[16px] overflow-hidden">
          <Image src="/asset/belajarmengajar.png" alt="Belajar Mengajar" width={304} height={320} />
          <a href="#" className="text-blue-500 p-[14px] bg-white inline-flex justify-between rounded-b-2xl font-medium">
            Belajar Mengajar
            <span>
              <Image src="/asset/panahkanan.png" alt="Arrow Right" width={20} height={20} />
            </span>
          </a>
        </div>
        <div className="flex flex-col h-[305px] w-[304px] rounded-[16px] overflow-hidden">
          <Image src="/asset/sharingsession.png" alt="Sharing Session" width={304} height={320} />
          <a href="#" className="text-blue-500 p-[14px] bg-white inline-flex justify-between rounded-b-2xl font-medium">
            Sharing Session
            <span>
              <Image src="/asset/panahkanan.png" alt="Arrow Right" width={20} height={20} />
            </span>
          </a>
        </div>
        <div className="flex flex-col h-[305px] w-[304px] rounded-[16px] overflow-hidden">
          <Image src="/asset/kelulusan.png" alt="Kelulusan" width={304} height={320} />
          <a href="#" className="text-blue-500 p-[14px] bg-white inline-flex justify-between rounded-b-2xl font-medium">
            Kelulusan
            <span>
              <Image src="/asset/panahkanan.png" alt="Arrow Right" width={20} height={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
    </div>


    {/* <div className="container flex flex-col justify-center mx-auto lg:px-28 lg:flex-row lg:justify-between text-3xl font-bold sm:text-3xl pr-6 mt-2 pt-8 rounded-xl" style={{ backgroundImage: 'url(/asset/bgdua.png)', borderRadius: '20px', backgroundSize: 'cover' }}>
      <h1 className="flex text-white font-bold text-4xl  py-4 pr-2 pt-14">
        Kumpulan Kegiatan Sekolah
      </h1>
      <div className="w-[550px] h-[130px] pl-[20px] pr-[120px] pt-1.5 text-sm flex-col items-center text-end text-white">
        <p className="pt-14">Lihat Semua</p>
      </div>
   
    <div className="container flex flex-col justify-center mx-auto sm:py-20 lg:py-10 lg:px-6 lg:flex-row">
      <div className="inline-flex pb-[24px] gap-[32px] lg:px-28 items-center justify-center ">
        <div className="flex flex-col h-[305px] w-[304px] rounded-[16px] overflow-hidden">
          <Image src="/asset/belajarmengajar.png" alt="Belajar Mengajar" width={304} height={320} />
          <a href="#" className="text-blue-500 p-[14px] bg-white inline-flex justify-between rounded-b-2xl font-medium">
            Belajar Mengajar
            <span>
              <Image src="/asset/panahkanan.png" alt="Arrow Right" width={20} height={20} />
            </span>
          </a>
        </div>
        <div className="flex flex-col h-[305px] w-[304px] rounded-[16px] overflow-hidden">
          <Image src="/asset/sharingsession.png" alt="Sharing Session" width={304} height={320} />
          <a href="#" className="text-blue-500 p-[14px] bg-white inline-flex justify-between rounded-b-2xl font-medium">
            Sharing Session
            <span>
              <Image src="/asset/panahkanan.png" alt="Arrow Right" width={20} height={20} />
            </span>
          </a>
        </div>
        <div className="flex flex-col h-[305px] w-[304px] rounded-[16px] overflow-hidden">
          <Image src="/asset/kelulusan.png" alt="Kelulusan" width={304} height={320} />
          <a href="#" className="text-blue-500 p-[14px] bg-white inline-flex justify-between rounded-b-2xl font-medium">
            Kelulusan
            <span>
              <Image src="/asset/panahkanan.png" alt="Arrow Right" width={20} height={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
    </div> */}




{/* salurkan minat bakat anak */}
<div className="mt-8">
  <div className="w-[1200px] mt-4 px-20">
    <div className="text-rose-500 font-bold mt-20 px-10 text-4xl leading-tight">
      <h1>Information</h1>
    </div>
  </div>
  <div className="w-[1200px] h-20 justify-start items-center gap-20 inline-flex ml-6 mt-2 px-20">
    <button>
      <div className="text-orange-500 text-xl font-medium lg:ml-[800px]">Lihat Semua</div>
    </button>
  </div>
</div>

<div className="px-20">
  <div className="mx-auto max-w-2xl px-4 lg:pt-4 lg:pb-48 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/kegiatanbelajar.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-lg text-gray-900 px-5">Kegiatan Belajar Mengajar Offline Dimulai</h3>
        <p className="mt-1 text-sm font-normal text-gray-500 px-5 mb-4">Kegiatan yang adakan saat siswa selesai melakukan studi sekolah</p>
      </a>
      <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/penambilanraport.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-lg text-gray-900 px-5">Penambilan Raport Semester Ganjil</h3>
        <p className="mt-1 text-sm font-normal text-gray-500 px-5 mb-4">Kegiatan yang adakan saat siswa selesai melakukan studi sekolah</p>
      </a>
      <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/jambelajar.png" alt="Person using a pen to cross a task off a productivity paper card." width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-lg text-gray-900 px-5">Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun</h3>
        <p className="mt-1 text-sm font-normal text-gray-500 px-5 mb-4">Kegiatan yang adakan saat siswa selesai melakukan studi sekolah</p>
      </a>
    </div>
  </div>
</div>
{/* <Footer/> */}
    </div>
  );
};

export default Home;

