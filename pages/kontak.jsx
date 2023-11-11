import React from 'react';
// import Header from '../components/Header';
import Image from 'next/image';
// import Footer from '@/components/Footer';

const galeri = () => {
  return (
    <div>
      {/* <Header /> */}
      <div className="flex justify-center items-center lg:w-1/2">
      <img
  className='absolute top-[150px] right-[100px]'
  src='/asset/kontak.png'
  style={{ width: '550px', height: '550px' }} // Adjust the width and height as needed
/>   
      <div className="max-w-xl absolute top-60" >
          <h1 className="lg:text-3xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
Kontak          </h1>
          <p className="mb-12 text-xl sm:mb-8 text-zinc-700">
          Anda Membutuhkan Bantuan Bertanya Atau Sekedar <br />Berbincang Kami Siap Membantu </p>
        </div>
      </div>

      

<div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-2 lg:px-28 lg:flex-row lg:justify-between">
  <div className="flex flex-col text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left pt-12">
    <h1 className="text-zinc-700 text-5xl font-bold leading-snug sm:text-5xl py-8 pr-1">
      Kontak <br />
      Kami
    </h1>
    <p className="mt-1 mb-2 text-lg sm:mb-7 text-gray-500">
      Untuk Setiap Pertanyaan, Perkiraan Proyek, Atau Katakan Saja Halo Get Touch Anda Dapat Menelepon Atau Mengobrol Bersama Kami
    </p>
  </div>
  <div className="w-[550px] h-[350px] pl-[71px] pr-[113px] pt-[86px] flex-col justify-end inline-flex">

    <p className="mt-1 mb-2 text-zinc-700 text-xl sm:mb-2">Number</p>
    <p className="mb-2 text-lg sm:mb-7 text-gray-500">(229) 555-0109 (405)</p>

    <p className="mt-1 mb-2 text-zinc-700 text-xl sm:mb-2">Office Address</p>
    <p className="mt-1 mb-2 text-lg sm:mb-7 text-gray-500">4140 Parker Rd.Richardson California 62639</p>

    <div className="flex flex-col sm:items-center sm:justify-center sm:flex-row sm:space-x-4 lg:justify-start">
      <a rel="" href="#" className="px-2 py-2 text-lg bg-blue-500 text-white rounded-full border-gray-100">Kontak Kami</a>
    </div>
  </div>
</div>


      {/* <Footer/> */}
    </div>
  );
}
      export default galeri; 