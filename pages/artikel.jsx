import React from "react";
import Image from "next/image";

const artikel = () => {
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

      <div className="ml-24 container top-12 sm:top-24 md:top-32 lg:top-48 absolute">
        <h1 className="text-neutral-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-text-xl font-bold tracking-widest mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-24 font-['SF Pro Rounded'] ">
          Kegiatan Belajar Mengajar Offline Dimulai
        </h1>

        <p className="text-neutral-500 text-base sm:text-lg md:text-xl font-normal ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-24">
          12 Desember 2020
        </p>

        <div className="mt-4 md:mt-12 py-8 px-4 sm:px-6 lg:px-8">
          {" "}
          <Image
            src="/asset/svhoolbutton.png"
            alt="School Button"
            width={1200}
            height={600}
            className="rounded-lg mt-4 mx-auto sm:ml-4 sm:mr-4 h-full sm:h-auto w-full"
          />
        </div>
      </div>

      <p className=" mx-auto py-4 px-2 text-left text-neutral-700 text-sm md:text-base lg:text-lg font-normal mt-8 sm:mt-28 sm:ml-2 sm:mr-2 md:ml-6 md:mr-6 lg:ml-16 lg:mr-16 xl:ml-24 xl:mr-24">
        Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali
        belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya.
        Begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya
        kembali ke aktivitas sekolah secara langsung. Orang tua selama ini
        banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih
        banyak menghabiskan waktu di depan layar gawainya bukan hanya untuk
        belajar namun juga untuk bermain game. Belum lagi harus menemani dan
        membantu anak-anak belajar sementara pekerjaan di rumah tidaklah
        sedikit.
        <br />
        <br />
        Namun perlahan demi perlahan sejak Oktober lalu, beberapa sekolah di
        Indonesia sudah mulai menerapkan Pembelajaran Tatap Muka atau PTM namun
        secara terbatas termasuk di Purwakarta kota saya tercinta. Seminggu
        sekali anak-anak bersekolah tentunya dengan pembatasan jarak ataupun
        waktu belajar yang mengalami pengurangan.
        <br />
        <br />
        Sekolah tempat saya mengabdi yaitu SMPN 8 Purwakarta baru di Januari
        tahun 2022 ini akan mulai melaksanakan pembelajaran tatap muka secara
        terbatas setelah memenuhi persyaratan yang ditentukan oleh Pemerintah
        Daerah dalam hal ini Dinas Pendidikan yang beberapa syaratnya antara
        lain tersedianya fasilitas kesehatan, siswa-siswi serta civitas sekolah
        yang sudah divaksin dan beberapa persyaratan lainnya.
        <br />
        <br />
        Karenanya untuk mewujudkan mimpi para siswa yang ingin kembali belajar
        di sekolah, di hari Jumat tanggal 7 Januari 2022 diselenggarakan
        kegiatan gotong royong membersihkan sekolah yang dilaksanakan oleh
        perwakilan orang tua siswa, perwakilan siswa, perwakilan OSIS dan
        tentunya dilaksanakan juga oleh segenap civitas sekolah baik itu Guru
        maupun Staff Tata Usaha.
        <br />
        <br />
        Kegiatan gotong royong membersihkan sekolah tersebut diadakan agar
        ketika anak kembali ke kelasnya, kelasnya sudah dalam keadaan bersih.
        Seperti yang dikatakan oleh perwakilan orang tua dari kelas 7 dan 9 yang
        mengatakan alasan ikut gotong royong membersihkan kelas anaknya agar
        anaknya dapat belajar dengan nyaman dan sehat karena lingkungan kelas
        maupun sekolahnya yang bersih. Selain itu mengingat salah satu syarat
        bisa diadakan pembelajaran tatap muka adalah lingkungan pembelajaran
        yang bersih dan sehat.
        <br />
        <br />
        Selain membawa peralatan kebersihan masing-masing, ada pula orang tua
        yang membawa makanan untuk dikonsumsi setelah kelas selesai. Terjalin
        pula kerjasama yang baik antar orang tua padahal ada yang tidak kenal
        awalnya begitu juga anak-anak kelas 7 yang akhirnya bisa bertemu dengan
        teman kelasnya secara langsung setelah di semester ganjil ini hanya
        bertemu di pembelajaran online. Semuanya  hadir demi mewujudkan
        pembelajaran tatap muka meskipun terbatas.
      </p>

      <div className=" text-gray-500 text-lg font-normal mt-8 sm:mt-12 sm:ml-2 md:ml-8 lg:ml-12 xl:ml-24">
        Bagikan Artikel
      </div>

      {/* social media icon */}
      <div className="flex  items-left gap-4 ml-4 sm:ml-6 md:ml-8 lg:ml-12 xl:ml-24">
        <a href="#" className="group">
          <div className="p-4 rounded-full justify-center items-left gap-2.5 flex">
            <div className="w-8 h-8 relative">
              <Image src="/asset/link.png" alt="Link" layout="fill" />
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="p-4 rounded-full justify-center items-left gap-2.5 flex">
            <div className="w-8 h-8 relative">
              <Image src="/asset/wa.png" alt="WhatsApp" layout="fill" />
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="p-4 rounded-full justify-center items-left gap-2.5 flex">
            <div className="w-8 h-8 relative">
              <Image src="/asset/facebook.png" alt="Facebook" layout="fill" />
            </div>
          </div>
        </a>
      </div>

      <div className="mt-8">
        <div className="w-full px-4 xl:px-20">
          <div className="text-zinc-700 font-bold mt-20 px-4 text-2xl sm:text-3xl leading-tight">
            <h1>Artikel Lainnya</h1>
          </div>
        </div>

        <div className="px-4 lg:pt-4 lg:pb-28">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            <a href="#" className="group shadow-md">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src="/asset/1.png"
                  alt=" "
                  width={800}
                  height={800}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>
              <p class="mt-1 text-lg font-medium text-zinc-700">
                Kegiatan Belajar Mengajar Offline Dimulai
              </p>
            </a>
            <a href="#" className="group shadow-md">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src="/asset/2.png"
                  alt=" "
                  width={800}
                  height={800}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>
              <p class="mt-1 text-lg font-medium text-zinc-700">
                Pengambilan Raport Semester Ganjil 2021 - 2022
              </p>
            </a>
            <a href="#" className="group shadow-md">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src="/asset/3.png"
                  alt=" "
                  width={800}
                  height={800}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-500">12 Desember 2020</h3>
              <p class="mt-1 text-lg font-medium text-zinc-700">
                Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default artikel;
