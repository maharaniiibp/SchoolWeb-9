import React, { useState, useEffect } from "react";
import data from "../data/anggota.json"; // Impor data dari file JSON
import Image from "next/image";

function Anggota() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-3xl  xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={item.image}
                alt="Person using a pen to cross a task off a productivity paper card."
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                width={500}
                height={500}
              />
            </div>
            <h3 className="mt-4 text-2xl text-left font-semibold text-zinc-700 font-Poppins">
              {item.name}
            </h3>
            <p className="mt-1 text-base font-normal text-left text-zinc-700 font-Poppins">
              {item.position}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Anggota;
