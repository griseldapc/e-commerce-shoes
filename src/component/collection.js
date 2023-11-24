import React, { useState, useEffect } from "react";
import data from "../data/collection.json"
import Activity from "./activity";

export default function Collection() {
    const [jsonData, setJsonData] = useState([]);

    useEffect(() => {
        setJsonData(data); //menggunakan data dari artikel.json
    }, []);
    return (
        <main className="">
            <div className="p-10 lg:flex md:flex justify-between">
                <div className="text-left">
                    <ul className="flex gap-5 tracking-wide">
                        <p className="text-left font-bold lg:text-base text-xs md:text-base">
                            NEW COLLECTION
                        </p>
                        <p className="text-gray-400 font-bold lg:text-base text-xs md:text-base">
                            BEST SELLER
                        </p>
                    </ul>

                    <ul className="font-bold lg:text-4xl lg:w-[400px] mt-10 text-3xl md:text-2xl md:w-72">
                        DISCOVER OUR LATEST <i>COLLECTION</i>
                    </ul>

                    <p className="lg:w-[400px] w-60 mt-5 text-gray-500 md:text-sm lg:text-base">Featuring the feshest arrival and the hottest shoes style, our collection is the perfect way to stay ahead of the fashion game and express your unique style.</p>
                    <p className="flex lg:gap-4 gap-2">
                        <img src="https://i.pinimg.com/474x/12/44/d9/1244d98d8448a41cf90d6761af33ab10.jpg" className="lg:h-36 lg:mt-12 h-20 rounded-xl mt-10"></img>
                        <img src="https://i.pinimg.com/474x/75/4e/7a/754e7aef272f08edd473ff03e77c6dfe.jpg" className="lg:w-36 w-14 rounded-xl my-auto mt-20 lg:mt-24"></img>
                        <img src="https://cdn-icons-png.flaticon.com/128/232/232375.png" className="lg:h-10 lg:my-auto lg:z-10 lg:mt-24 lg:-ml-14 h-3 my-auto z-10 -ml-6 mt-[85px]"></img>
                        <h1 className="flex">
                            <p className="w-20 font-bold text-sm lg:mt-[143px] mt-20">MORE COLLECTION</p>
                            <img src="https://cdn-icons-png.flaticon.com/128/3114/3114931.png" className=" transform -rotate-45 w-5 my-auto lg:mt-36 -ml-8 mt-20"></img>
                        </h1>

                    </p>
                </div>

                <div className="lg:flex gap-10 md:flex md:gap-2 lg:gap-10 lg:-mt-16">
                    {jsonData.map((item, index) => (
                        <a key={index} href="#" className="group">
                            <div className="p-3 border-2 bg-gray-200 rounded-2xl lg:w-80 mt-10 md:mt-16">
                                <p className="text-xs lg:text-xs font-bold text-gray-700 text-left">{item.type}</p>
                                <h1 className="flex justify-between">
                                    <p className="font-bold py-2 md:text-xs lg:text-base">{item.description}</p>
                                    <p className="font-bold py-2 md:text-xs lg:text-base">{item.price}</p>
                                </h1>

                                <h2 className="mt-2 text-center flex gap-2">
                                    <p className="rounded-full bg-green-700 w-6 text-green-700">.</p>
                                    <p className="rounded-full bg-purple-500 w-6 text-purple-500">.</p>
                                    <p className="rounded-full bg-black w-6 text-black">.</p>
                                </h2>

                                <img src={item.image} className=" transform -rotate-[25deg] lg:w-64 -ml-5"></img>
                                <h3 className="flex justify-between">
                                    <ul className="mt-2 text-center items-center flex lg:gap-5 gap-1">
                                        <p className="rounded-full border-2 border-gray-300 text-gray-700 lg:w-7 text-xs px-1 md:text-[10px] lg:text-base">40</p>
                                        <p className="rounded-full border-2  border-black bg-black text-white lg:w-7 text-xs px-1 md:text-[10px] lg:text-base ">41</p>
                                        <p className="rounded-full border-2 border-gray-300 text-gray-700 lg:w-7 text-xs px-1 md:text-[10px] lg:text-base ">42</p>
                                        <p className="rounded-full border-2 border-gray-300 text-gray-700 lg:w-7 text-xs px-1 md:text-[10px] lg:text-base ">43</p>
                                    </ul>
                                    <ul className="">
                                        <button className="lg:px-5 px-2 border-2 border-black rounded-2xl py-1 bg-black text-white text-xs mt-2 ml-3 hover:bg-white hover:text-black md:text-[8px] md:px-1 md:py-1 lg:text-xs">Add to Bag</button>
                                    </ul>
                                </h3>

                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <Activity />
        </main>
    )
}