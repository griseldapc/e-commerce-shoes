import React, { useState, useEffect } from "react";
import data from "../data/cardproduct.json"

export default function Product() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); //menggunakan data dari artikel.json
  }, []);
  return (
    <main className="p-10">
      <div className="flex justify-between -mt-7 lg:-mt-3">
        <h1 className="font-bold lg:text-4xl text-left md:text-4xl text-xl">
          OUR PRODUCT
        </h1>
        <button className="lg:p-2  lg:px-5 rounded-full text-white bg-black hover:bg-white hover:text-black border-2 border-black text-[10px] py-1 px-2 md:text-lg md:px-3">More Products</button>
      </div>

      <div className="py-10 flex flex-wrap gap-5">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <ul className="border-2 lg:w-[280px] md:w-[215px] rounded-2xl bg-gray-200 overflow-hidden group-hover:shadow-lg transition duration-300">
              <img src={item.image} className="-mt-5 mb-5 transition-opacity duration-300 group-hover:opacity-75"></img>

              <h1 className="text-gray-500 text-xs font-semibold text-left p-5 space-y-1 -mt-16 transition-opacity duration-300 group-hover:opacity-100">
                <p>{item.title}</p>
                <p className="font-semibold text-black text-sm">{item.description}</p>
                <p className="text-black">{item.price}</p>
              </h1>
            </ul>
          </a>
        ))}
      </div>

    </main>

  )
}