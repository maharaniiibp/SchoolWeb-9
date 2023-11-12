import React, { useState, useEffect } from "react";
import data from "../data/keunggulanS"; // Import data from JSON file

function KeunggulanS() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Use data from keunggulanS.json
  }, []);

  return (
    <section className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {jsonData.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 md:p-5 justify-start gap-2.5"
          >
            <div className="w-10 h-10 md:w-20 md:h-20 relative">
              <img
                className="absolute w-full h-full"
                src={item.icon}
                alt="Icon"
              />
            </div>
            <div className="text-left">
              {" "}
              {/* Teks diatur ke kiri */}
              <div className="self-stretch text-zinc-700 text-lg md:text-xl font-medium">
                {item.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default KeunggulanS;
