// kumpulanKegiatanS.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import data from '../data/kumpulanKegiatanS.json'; // Import data from JSON file

function KumpulanKegiatanS() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Use data from kumpulanKegiatanS.json
  }, []);

  return (
    <div className="px-20 pb-32">
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg xl:aspect-h-8 xl:aspect-w-7">
              <Image
                src={item.image}
                alt=""
                width={800}
                height={800}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <h3 class="mt-4 text-2xl text-gray-900 font-Poppins font-semibold">
        {item.tittle}
        </h3>
        <p class="mt-1 text-base text-gray-500 font-Poppins font-normal mb-7">
        {item.description}
        </p>
      </a>
        ))}
      </div>
    </div>
  );
}

export default KumpulanKegiatanS;
