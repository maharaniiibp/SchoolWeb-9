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
      <div className="mx-auto"></div>
      <div className="container top-48 absolute ">
        <h1 className="text-neutral-700 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-text-2xl font-bold tracking-widest mb-3 ml-4 sm:ml-6 md:ml-8 lg:ml-28">
          Kegiatan Belajar Mengajar Offline Dimulai
        </h1>

        <p className="text-neutral-500 text-lg sm:text-xl font-normal ml-4 sm:ml-6 md:ml-8 lg:ml-28">
          12 Desember 2020
        </p>

        <div className="mt-8 py-8 px-4 sm:px-6 lg:px-8">
          <Image
            src="/asset/svhoolbutton.png"
            alt="School Button"
            width={1200} // Adjust the width as needed
            height={600} // Adjust the initial height as needed
            className="rounded-lg mt-6 mx-auto sm:ml-20 h-full sm:h-auto w-full" // Center the image on small screens, make it full height, and full width on mobile
          />
        </div>
      </div>

      <p className="mx-auto py-8 px-4 text-left text-neutral-700 text-base lg:text-xl font-normal mt-8 sm:ml-4 sm:mr-4 md:ml-10 md:mr-10 lg:ml-28 lg:mr-28">
        Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali
        belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya.
        begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya
        kembali ke aktivitas sekolah secara langsung. Orang tua selama ini
        banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih
        banyak menghabiskan waktu di depan layar gawainya bukan hanya untuk
        belajar namun juga untuk bermain game. Belum lagi harus menemani dan
        membantu anak-anak belajar sementara pekerjaan di rumah tidaklah
        sedikit.
        <br />
        <br /> Namun perlahan demi perlahan sejak Oktober lalu, beberapa sekolah
        di Indonesia sudah mulai menerapkan Pembelajaran Tatap Muka atau PTM
        namun secara terbatas termasuk di Purwakarta kota saya tercinta.
        Seminggu sekali anak-anak bersekolah tentunya dengan pembatasan jarak
        ataupun waktu belajar yang mengalami pengurangan.
        <br />
        <br /> Sekolah tempat saya mengabdi yaitu SMPN 8 Purwakarta baru di
        Januari tahun 2022 ini akan mulai melaksanakan pembelajaran tatap muka
        secara terbatas setelah memenuhi persyaratan yang ditentukan oleh
        Pemerintah Daerah dalam hal ini Dinas Pendidikan yang beberapa syaratnya
        antara lain tersedianya fasilitas kesehatan, siswa-siswi serta civitas
        sekolah yang sudah di vaksin dan beberapa persyaratan lainnya.
        <br />
        <br /> Karenanya untuk mewujudkan mimpi para siswa yang ingin kembali
        belajar di sekolah, di hari Jumat tanggal 7 Januari 2022 diselenggarakan
        kegiatan gotong royong membersihkan sekolah yang dilaksanakan oleh
        perwakilan orang tua siswa, perwakilan siswa, perwakilan OSIS dan
        tentunya dilaksanakan juga oleh segenap civitas sekolah baik itu Guru
        maupun Staff Tata Usaha.
        <br />
        <br /> Kegiatan gotong royong membersihkan sekolah tersebut diadakan
        agar ketika anak kembali ke kelasnya, kelasnya sudah dalam keadaan
        bersih. Seperti yang dikatakan oleh perwakilan orang tua dari kelas 7
        dan 9 yang mengatakan alasan ikut gotong royong membersihkan kelas
        anaknya agar anaknya dapat belajar dengan nyaman dan sehat karena
        lingkungan kelas maupun sekolahnya yang bersih. Selain itu mengingat
        salah satu syarat bisa diadakan pembelajaran tatap muka adalah
        lingkungan pembelajaran yang bersih dan sehat.
        <br />
        <br />  Selain membawa peralatan kebersihan masing-masing, ada pula
        orang tua yang membawa makanan untuk dikonsumsi setelah kelas selesai.
        Terjalin pula kerjasama yang baik antar orang tua padahal ada yang tidak
        kenal awalnya begitu juga anak-anak kelas 7 yang akhirnya bisa bertemu
        dengan teman kelasnya secara langsung setelah di semester ganjil ini
        hanya bertemu di pembelajaran online. Semuanya  hadir demi mewujudkan
        pembelajaran tatap muka meskipun terbatas.
      </p>

      <div className="text-gray-500 text-lg font-normal ml-28 mb-4 ">
        Bagikan Artikel
      </div>
      <div className="justify-center items-start gap-4 inline-flex ml-28">
        <a href="#" className="group">
          <div className="p-2 justify-start items-start gap-2.5 flex">
            <div className="w-5 h-5 relative ">
              <Image src="/asset/link.png" alt="Link" layout="fill" />
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="p-2  rounded-[40px] justify-start items-start gap-2.5 flex">
            <div className="w-5 h-5 relative">
              <Image src="/asset/wa.png" alt="WhatsApp" layout="fill" />
            </div>
          </div>
        </a>
        <a href="#" className="group">
          <div className="p-2  rounded-[40px] justify-start items-start gap-2.5 flex">
            <div className="w-5 h-5 relative">
              <Image src="/asset/facebook.png" alt="Facebook" layout="fill" />
            </div>
          </div>
        </a>
      </div>
      <div className="mt-8">
        <div className="w-[1200px] mt-4 px-20">
          <div className="text-zinc-700 font-bold mt-20 px-10 text-3xl leading-tight">
            <h1>Artikel Lainnya</h1>
          </div>
        </div>
        <div className="px-12">
          <div className="mx-auto max-w-2xl px-4 lg:pt-4 lg:pb-28 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
      {/* <Footer/> */}
    </div>
  );
};

export default artikel;
