import React, { useState, useEffect } from "react";
import data from "../data/activity.json"
export default function Activity() {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);
    return (
        <div className="flex p-10 justify-between">
            {jsonData.map((item, index) => (
                <a key={index} href="#" className="group">
                    <h1 className="text-left">
                        <img src={item.img} className="w-[570px] rounded-2xl"></img>
                        <ul className="px-5">
                            <h1 className="-mt-40 text-3xl font-bold text-white">{item.judul}</h1>
                            <p className="w-[500px] text-white font-semibold mb-3">{item.deskripsi}</p>
                            <button className="p-2  px-5 rounded-full bg-white hover:bg-black hover:text-white">Shop Now</button>
                        </ul>
                    </h1>
                </a>
            ))}
        </div>
    )
}