import React from "react";

const Kontak = () => {
  return (
    <div>
      <main
        className="bg-background flex"
        style={{
          backgroundImage: "url(asset/kontak.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
        }}
      ></main>
     <div className="flex justify-center items-center lg:w-1/2">
        {/* <img
          className="absolute top-[282px] right-[100px]"
          src="/asset/tentangKita.png"
          style={{ width: "450px", height: "550px" }} // Adjust the width and height as needed
        /> */}
        <div className="mt-[60px] max-w-xl absolute top-60">
          <h1 className="lg:text-5xl font-bold sm:text-6xl py-8 text-zinc-700 lg:leading-snug">
            Kontak
          </h1>
          <p className="mb-12 text-lg sm:mb-8 text-zinc-700">
          Anda Membutuhkan Bantuan Bertanya Atau Sekedar <br /> Berbincang Kami Siap Membantu{" "}
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-16 px-4 lg:flex lg:justify-between">
        <div className="mt-24 lg:flex flex-col text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left lg:mb-0 mb-24">
          <h1 className="text-4xl font-bold lg:text-5xl leading-snug text-zinc-700">
            Kontak <br /> Kami
          </h1>
          <p className="mt-4 text-base lg:text-lg text-gray-500">
            Untuk Setiap Pertanyaan, Perkiraan Proyek, Atau Katakan Saja Halo
            Get Touch Anda Dapat Menelepon Atau Mengobrol Bersama Kami
          </p>
        </div>
        <div className="mb-12 w-full lg:w-[550px] pl-[10px] pr-[10px] lg:pl-[71px] lg:pr-[113px] pt-[86px] flex-col justify-end">
          <p className="mt-4 text-xl text-zinc-700">Number</p>
          <p className="mb-4 text-base lg:text-lg text-gray-500">
            (229) 555-0109 (405)
          </p>

          <p className="mt-4 text-xl text-zinc-700">Office Address</p>
          <p className="mb-4 text-base lg:text-lg text-gray-500">
            4140 Parker Rd.Richardson California 62639
          </p>

          <div className="flex flex-col items-center sm:flex-row sm:space-x-4">
            <a
              rel=""
              href="#"
              className="px-4 py-2 text-lg bg-blue-500 text-white rounded-full border-gray-100"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
