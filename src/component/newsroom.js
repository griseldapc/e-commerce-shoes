import React, { useState, useEffect } from "react";
import data from "../data/nikenewsroom.json"

export default function Newsroom() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);
    return (
        <main className="p-10 -mt-10">
            <div className="flex justify-between">
                <h1 className="font-bold text-4xl text-left">
                    NIKE NEWSROOM
                </h1>
                <button className="p-2  px-5 rounded-full text-white bg-black hover:bg-white hover:text-black border-2 border-black">More News</button>
            </div>
            <div className="mt-14 flex gap-56">
                <h1 className="text-left font-bold text-xl space-y-3 tracking-wide">
                    <ul className="text-3xl">
                        RELEASES
                    </ul>
                    <ul className="text-gray-400">
                        STATEMENTS
                    </ul>
                    <ul className="text-gray-400">
                        REPORTS
                    </ul>
                    <ul className="text-gray-400">
                        RESOURCES
                    </ul>
                    <ul className="text-gray-400">
                        MEDIA ASSETS
                    </ul>
                </h1>
                <h2 className="flex flex-wrap gap-7 justify-end">
                    {jsonData.map((item, index) => (
                        <a key={index} href="#" className="group">
                            <ul className="text-left w-[250px] mb-5">
                                <img src={item.image} className="w-60 rounded-2xl"></img>
                                <p className="font-normal text-sm py-3">{item.date}</p>
                                <p className="font-bold w-60">{item.artikel}</p>
                                <ul className="space-x-5 mt-5 text-sm">
                                    <button className="px-5 border-2 border-black rounded-2xl py-1 hover:bg-black hover:text-white">{item.b1}</button>
                                    <button className="px-5 border-2 border-black rounded-2xl py-1 hover:bg-black hover:text-white">{item.b2}</button>
                                </ul>
                            </ul>
                        </a>
                    ))}
                </h2>
            </div>
        </main>
    )
}