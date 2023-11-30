import React from "react";

const Kontak = () => {
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
                  Kontak
                </h2>
                <p class="mt-3 text-neutral-500 lg:text-xl lg:-mr-[15rem]">
                  Anda Membutuhkan Bantuan Bertanya Atau Sekedar <br />
                  Berbincang Kami Siap Membantu{" "}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="asset/ww.png" alt="" />
            </div>
          </div>
        </div>
      </section>

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
        <div className="mb-12 w-full lg:w-[550px] pl-[10px] pr-[10px] lg:pl-[71px] lg:pr-[113px] pt-[86px] flex-col justify-end text-center lg:text-left">
          <p className="mt-4 text-xl text-zinc-700">Number</p>
          <p className="mb-4 text-base lg:text-lg text-gray-500">
            (229) 555-0109 (405)
          </p>

          <p className="mt-4 text-xl text-zinc-700">Office Address</p>
          <p className="mb-4 text-base lg:text-lg text-gray-500">
            4140 Parker Rd.Richardson California 62639
          </p>

          <div className="flex-col items-center sm:flex-row sm:space-x-4 justify-center ">
            <button
              rel=""
              href="#"
              className="px-4 py-2 text-lg bg-blue-500 text-white rounded-full border-gray-100"
            >
              Kontak Kami
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontak;
