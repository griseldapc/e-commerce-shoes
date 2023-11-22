import React from "react";
import image from "../img/jordan.png"

export default function Hero() {
    return (
        <>
            <nav className="p-10 flex flex-row">
                <div>
                    <h1 className="text-left font-bold text-3xl space-y-3 tracking-wide">
                        <ul className="">
                            VAPORMAX
                        </ul>
                        <ul className="text-gray-400">
                            AIR FORCE
                        </ul>
                        <ul className="text-gray-400">
                            AIR MAX
                        </ul>
                        <ul className="text-gray-400">
                            JORDAN
                        </ul>
                    </h1>

                    <h2 className="text-left pt-16">
                        <ul className=" font-bold text-xl tracking-wide">
                            UNBEATABLE PERFORMANCE
                        </ul>
                        <p className="text-gray-400 w-72">
                            We've dedicated ourselves to crafting the perfect footwear for every basketball enthusiast.
                        </p>
                        <li className="flex mt-3 gap-3">
                            <img src="https://artemporary.files.wordpress.com/2014/05/asteriscofucsia.gif" className="w-16"></img>
                            <ul className="text-6xl font-bold">2023</ul>
                        </li>
                    </h2>
                </div>

                <div className=" w-[550px] -mt-4 justify-center relative mx-auto ">
                    <i className="font-bold text-7xl text-center relative z-10">
                        CRAFTED FOR CHAMPIONS
                    </i>
                    <img src={image} className="w-[450px] transform rotate-[25deg] scale-x-[-1] items-center mx-auto -mt-48 ml-20"></img>
                    <img src="https://cdn-icons-png.flaticon.com/128/3236/3236907.png" className="w-16 transform rotate-90 mx-auto absolute bottom-0 items-center justify-center ml-60"></img>
                </div>

                <div className="ml-20">
                    <h1 className="flex flex-row gap-3 mt-20">
                    <img src="https://cdn-icons-png.flaticon.com/128/2989/2989981.png" className="h-10"></img>
                    <p className="w-10 text-left font-semibold text-base">
                        EXPLORE ME
                    </p>
                    </h1>

                    <h2 className="mt-[115px] text-left">
                        <i className="text-pink-500 font-semibold text-xl">LIMITED EDITION</i>
                        <p className="font-bold">NIKE AIR VAPORMAX PLUS</p>
                        <p className="">$320</p>
                        <ul className="mt-2 text-center flex gap-2">
                            <p className="rounded-full bg-red-600 w-6 text-red-600">.</p>
                            <p className="rounded-full bg-yellow-300 w-6 text-yellow-300">.</p>
                            <p className="rounded-full bg-pink-500 w-6 text-pink-500">.</p>
                            <p className="rounded-full bg-blue-500 w-6 text-blue-500">.</p>
                        </ul>
                        <p className="mt-5 flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/420/420048.png" className="w-10"></img>
                            <button className="p-2  px-5 rounded-full text-white bg-black">Add to Bag</button>
                        </p>
                    </h2>
                </div>


            </nav>
        </>
    )
}