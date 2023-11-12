import React from "react";

const Kontak = () => {
  return (
    <div>
      <main
        className="bg-background flex"
        style={{
          backgroundImage: "url(asset/bg.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
        }}
      ></main>
      <div className="flex flex-col items-center lg:w-1/2">
        <img
          className="absolute top-[194px] right-[100px]"
          src="/asset/kontak.png"
          style={{ width: "450px", height: "550px" }} // Adjust the width and height as needed
        />
        <div className="max-w-xl mt-8 lg:absolute lg:top-60 lg:left-0">
          <h1 className="text-4xl font-bold lg:text-5xl text-zinc-700 leading-snug">
            Kontak
          </h1>
          <p className="mt-4 text-base lg:text-lg text-zinc-700">
            Anda Membutuhkan Bantuan Bertanya Atau Sekedar <br />
            Berbincang Kami Siap Membantu{" "}
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-8 px-4 lg:flex lg:justify-between">
        <div className="lg:flex flex-col text-center rounded-sm lg:max-w-lg xl:max-w-lg lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold lg:text-5xl leading-snug text-zinc-700">
            Kontak <br /> Kami
          </h1>
          <p className="mt-4 text-base lg:text-lg text-gray-500">
            Untuk Setiap Pertanyaan, Perkiraan Proyek, Atau Katakan Saja Halo
            Get Touch Anda Dapat Menelepon Atau Mengobrol Bersama Kami
          </p>
        </div>
        <div className="w-full lg:w-[550px] pl-[10px] pr-[10px] lg:pl-[71px] lg:pr-[113px] pt-[86px] flex-col justify-end">
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
