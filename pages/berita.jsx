import React from 'react';
// import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';
// import Footer from '@/components/Footer';

const Berita = () => {
  return (
    <div>
      <div className="flex justify-center items-center lg:w-1/2">
      <img
  className='absolute top-[150px] right-[100px]'
  src='/asset/berita.png'
  style={{ width: '450px', height: '550px' }} // Adjust the width and height as needed
/>  
        <div className="max-w-xl" style={{ marginTop: '-1200px' }}>
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Berita
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
            Halaman Yang Akan Memberikan Pemberitahuan <br />dan Pengetahuan Untuk Anda
          </p>
        </div>
      </div>

      {/* informasi terbaru */}
      <section>
        <div className="px-12 pt-0">
          <div className="mt-8 mb-8 py-2 ml-12 lg:px-6 lg:mt-0">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-4xl">
              Informasi Terbaru
            </h2>
          </div>
        </div>
        <Image
          src="/asset/svhoolbutton.png"
          alt="School Button"
          width={1100}
          height={469.33}
          className="rounded-lg mx-auto mt-20 mb-8"
        />
        <div className="w-[1100px] mx-auto">
          <p className="text-black font-semibold text-2xl mb-5">Kegiatan Belajar Mengajar Offline Dimulai</p>
          <p className="text-lg font-normal">
            Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu
            <Link href="/artikel">
              <span className="text-blue-500 group">
                Read More ...
              </span>
            </Link>
          </p>
        </div>
      </section>

      {/* info */}
  
        <div className="pt-12">
          <div className="w-[1200px] h-20 justify-start items-center gap-20 inline-flex mt-5 px-16">
            <div className="justify-start items-start gap-2 flex">
              {/* Navigation links */}
              <div className="flex-col justify-start items-start inline-flex">
                <div className="p-3 justify-start items-start gap-2.5 inline-flex">
                  <Link href="/berita">
                    <span className="text-xl text-zinc-700 border-b-2 border-blue-500 tracking-wide">Semua</span>
                  </Link>
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="p-3 justify-start items-start gap-2.5 inline-flex">
                  <Link href="/berita">
                    <span className="text-zinc-700 text-xl font-normal tracking-wide">Berita</span>
                  </Link>
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="p-3 justify-start items-start gap-2.5 inline-flex">
                  <Link href="/berita">
                    <span className="text-zinc-700 text-xl font-normal tracking-wide">Pengumuman</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    {/* foto */}
        <div className="px-12">
  <div className="mx-auto max-w-2xl px-4 lg:pt-4 lg:pb-28 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
      <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/1.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Kegiatan Belajar Mengajar Offline Dimulai</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/2.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Pengambilan Raport Semester Ganjil 2021 - 2022</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/3.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/4.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Kegiatan Belajar Mengajar Offline Dimulai</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/5.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Pengambilan Raport Semester Ganjil 2021 - 2022</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/6.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/7.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Kegiatan Belajar Mengajar Offline Dimulai</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/8.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Pengambilan Raport Semester Ganjil 2021 - 2022</p>
        </a>
        <a href="#" className="group shadow-md">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <Image src="/asset/9.png" alt=" " width={800} height={800} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>    
        <p class="mt-1 text-lg font-medium text-zinc-700">Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun</p>
        </a>
        <div class="w-[1100px] h-9 justify-between items-center gap-[507px] inline-flex mt-5">
                    <div class="text-neutral-500 text-base font-normal">Menampilkan 9 Dari 21 Data</div>
                    <div class="justify-start items-center flex">
                        <div class="text-neutral-500 text-base font-normal">Halaman</div>
                        <div class="justify-start items-center flex">
                            <div class="w-6 h-6 relative"></div>
                            <img class="" src="./asset/chevron-left.png" />
                            <div class="px-[11px] justify-center items-center flex">
                                <a href="#" class="group">
                                <div class="text-blue-500 text-base font-normal">1</div></a>
                            </div>
                            <div class="px-[11px] justify-center items-center flex">
                                <a href="#" class="group">
                                <div class="text-neutral-500 text-base font-normal">2</div></a>
                            </div>
                            <div class="px-[11px] justify-center items-center flex">
                                <a href="#" class="group">
                                <div class="text-neutral-500 text-base font-normal">3</div></a>
                            </div>
                            <img class="" src="./asset/chevron-right.png" />
                        </div>
                    </div>
                </div>
    </div>
  </div>
</div>
        
      </div>
    
  );
}

export default Berita;
