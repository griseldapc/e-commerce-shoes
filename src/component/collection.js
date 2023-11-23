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
            <div className="p-10 flex justify-between">
                <div className="text-left">
                    <ul className="flex gap-5 tracking-wide">
                        <p className="text-left font-bold">
                            NEW COLLECTION
                        </p>
                        <p className="text-gray-400 font-bold">
                            BEST SELLER
                        </p>
                    </ul>

                    <ul className="font-bold text-4xl w-[400px] mt-10">
                        DISCOVER OUR LATEST <i>COLLECTION</i>
                    </ul>

                    <p className="w-[400px] mt-5 text-gray-500">Featuring the feshest arrival and the hottest shoes style, our collection is the perfect way to stay ahead of the fashion game and express your unique style.</p>
                    <p className="flex gap-4">
                        <img src="https://i.pinimg.com/474x/12/44/d9/1244d98d8448a41cf90d6761af33ab10.jpg" className="w-28 rounded-xl mt-10"></img>
                        <img src="https://i.pinimg.com/474x/75/4e/7a/754e7aef272f08edd473ff03e77c6dfe.jpg" className="w-32 rounded-xl my-auto mt-24"></img>
                        <img src="https://cdn-icons-png.flaticon.com/128/232/232375.png" className="w-10 my-auto z-10 mt-24 -ml-14"></img>
                        <h1 className="flex">
                            <p className="w-20 font-bold text-sm mt-[143px]">MORE COLLECTION</p>
                            <img src="https://cdn-icons-png.flaticon.com/128/3114/3114931.png" className=" transform -rotate-45 w-5 my-auto mt-36 -ml-8"></img>
                        </h1>

                    </p>
                </div>

                <div className="flex gap-10">
                    {jsonData.map((item, index) => (
                        <a key={index} href="#" className="group">
                            <div className="p-3 border-2 bg-gray-200 rounded-2xl w-80">
                                <p className="text-xs font-bold text-gray-700 text-left">{item.type}</p>
                                <h1 className="flex justify-between">
                                    <p className="font-bold py-2">{item.description}</p>
                                    <p className="font-bold py-2">{item.price}</p>
                                </h1>

                                <h2 className="mt-2 text-center flex gap-2">
                                    <p className="rounded-full bg-green-700 w-6 text-green-700">.</p>
                                    <p className="rounded-full bg-purple-500 w-6 text-purple-500">.</p>
                                    <p className="rounded-full bg-black w-6 text-black">.</p>
                                </h2>

                                <img src={item.image} className=" transform -rotate-[25deg] w-64 -ml-5"></img>
                                <h3 className="flex justify-between">
                                    <ul className="mt-2 text-center flex gap-5">
                                        <p className="rounded-full border-2 border-gray-300 text-gray-700 w-7">40</p>
                                        <p className="rounded-full border-2  border-black bg-black text-white w-7">41</p>
                                        <p className="rounded-full border-2 border-gray-300 text-gray-700 w-7">42</p>
                                        <p className="rounded-full border-2 border-gray-300 text-gray-700 w-7">43</p>
                                    </ul>
                                    <ul className="">
                                        <button className="px-5 border-2 border-black rounded-2xl py-1 bg-black text-white text-xs mt-2 ml-3 hover:bg-white hover:text-black">Add to Bag</button>
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