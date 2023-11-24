import React, { useState, useEffect } from "react";
import data from "../data/activity.json"
export default function Activity() {

    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);
    return (
        <div className="lg:flex p-10 justify-between -mt-5 md:flex md:gap-5">
            {jsonData.map((item, index) => (
                <a key={index} href="#" className="group">
                    <h1 className="text-left mb-10">
                        <img src={item.img} className="w-[570px] md:w-[350px] rounded-2xl lg:w-[570px]"></img>
                        <ul className="lg:px-5 px-3">
                            <h1 className="lg:-mt-40 -mt-[75px] lg:text-3xl text-[10px] font-bold text-white">{item.judul}</h1>
                            <p className="lg:w-[500px] w-56 lg:text-base text-white text-[8px] font-semibold lg:mb-3">{item.deskripsi}</p>
                            <button className="lg:p-2 lg:text-base text-[8px] lg:px-5 rounded-full bg-white hover:bg-black hover:text-white px-2 py-1">Shop Now</button>
                        </ul>
                    </h1>
                </a>
            ))}
        </div>
    )
}