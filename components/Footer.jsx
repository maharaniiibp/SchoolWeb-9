import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-zinc-700">
      <div className="container px-6 mx-auto space-y-6 md:px-16 md:space-y-12">
        <div className="pt-8 grid grid-cols-1 md:grid-cols-12">
          <div className="md:pb-0 md:col-span-6 mt-12">
            <div className="container mx-auto">
              <Image
                src="/asset/vector.png"
                alt=""
                width={125}
                height={120}
                className="max-w-full md:float-left md:mr-4 mx-auto"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-2 text-center md:text-left mt-11">
            <FooterSection title="Informasi">
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">
                  Artikel
                </a>
              </li>
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">
                  Galeri
                </a>
              </li>
            </FooterSection>
          </div>

          <div className="col-span-12 md:col-span-2 text-center md:text-left mt-11">
            <FooterSection title="Tentang">
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">
                  Hubungi Kami
                </a>
              </li>
            </FooterSection>
          </div>

          <div className="col-span-12 md:col-span-2 text-center md:text-left mt-11">
            <FooterSection title="Kantor Kami">
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">
                  Indonesia <br /> Unamed road RT 01 <br />
                  RW 02 Surabaya
                </a>
              </li>
            </FooterSection>
          </div>

          <div className="mb-12 col-span-12 md:col-span-5 text-center md:text-left">
            <div className="-mt-14 w-full text-neutral-500 text-xl font-normal font-['Poppins'] sm:w-[488px] md:w-[80%] lg:w-[70%] xl:w-[488px]">
              Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
              untuk kehidupan yang lebih bermanfaat
            </div>

            <div className="w-full md:w-[140px] h-9 justify-center md:justify-start items-start gap-4 inline-flex pt-5">
              <FooterSocialIcon
                icon="/asset/tweet.png"
                className="transform scale-200"
              />
              <FooterSocialIcon
                icon="/asset/facebook.png"
                className="transform scale-200"
              />{" "}
              {/* Increase scale value */}
              <FooterSocialIcon
                icon="/asset/instagram.png"
                className="transform scale-200"
              />{" "}
              {/* Increase scale value */}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 py-6 text-sm text-center dark:text-gray-400">
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

const FooterSection = ({ title, children }) => (
  <div className="pb-5 text-lg font-medium">
    <p>{title}</p>
    <ul>{children}</ul>
  </div>
);

const FooterSocialIcon = ({ icon }) => (
  <a href="#" className="group">
    <div className="p-2 bg-white bg-opacity-40 rounded-[40px] justify-start items-start gap-2.5 flex">
      <div className="w-5 h-5 relative">
        <Image src={icon} alt="" width={20} height={20} />
      </div>
    </div>
  </a>
);

export default Footer;
