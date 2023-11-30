import React from 'react';
import data from "../data/news.json"; // Impor data dari file JSON
import Image from 'next/image';
import Link from 'next/link';

function News() {
  return (
    <div className="px-12">
      <div className="mx-auto max-w-2xl px-4 lg:pt-4 lg:pb-28 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {data.map((item) => (
            <a key={item.id} href="#" className="group shadow-none">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={item.image}
                  alt=" "
                  width={800}
                  height={800}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-500">{item.date}</h3>
              <p className="mt-1 text-lg font-medium text-zinc-700">{item.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
