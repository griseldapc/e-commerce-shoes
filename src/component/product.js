import React, { useState, useEffect } from "react";
import data from "../data/cardproduct.json"

export default function Product() {
    const [jsonData, setJsonData] = useState([]);

    useEffect (() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);
    return (
        <main className="p-10">
            <div className="flex justify-between">
                <h1 className="font-bold text-4xl text-left">
                    OUR PRODUCT
                </h1>
                <button className="p-2  px-5 rounded-full text-white bg-black">More Products</button>
            </div>

            <div className="py-10 flex flex-wrap gap-5">
  {jsonData.map((item, index) => (
    <a key={index} href="#" className="group">
      <ul className="border-2 w-[280px] rounded-2xl bg-gray-200 overflow-hidden group-hover:shadow-lg transition duration-300">
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