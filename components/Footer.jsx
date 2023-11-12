import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-zinc-700">
      <div className="container px-6 mx-auto space-y-6 md:px-16 md:space-y-12">
        <div className="pt-8 grid grid-cols-1 md:grid-cols-12">
          <div className="md:pb-0 md:col-span-6">
            <div className="container mx-auto">
              <Image
                src="/asset/Vector.png"
                alt=""
                width={200}
                height={200}
                className="max-w-full md:float-left md:mr-4 mx-auto"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-2 text-center md:text-left">
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

          <div className="col-span-12 md:col-span-2 text-center md:text-left">
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

          <div className="col-span-12 md:col-span-2 text-center md:text-left">
            <FooterSection title="Kantor Kami">
              <li>
                <a rel="" href="#" className="text-gray-500 text-sm">
                  Indonesia <br /> Unamed road RT 01 RW 02 Surabaya
                </a>
              </li>
            </FooterSection>
          </div>

          <div className="col-span-12 md:col-span-5 text-center md:text-left">
            <p className="pb-1 text-gray-500 text-lg font-normal">
              Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
              untuk kehidupan yang lebih bermanfaat
            </p>
            <div className="w-full md:w-[140px] h-9 justify-center md:justify-start items-start gap-4 inline-flex pt-5">
              <FooterSocialIcon icon="/asset/tweet.png" />
              <FooterSocialIcon icon="/asset/facebook.png" />
              <FooterSocialIcon icon="/asset/instagram.png" />
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 1968 Company Co. All rights reserved.
        </div>
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
