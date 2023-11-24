import React from "react";
import image from "../img/jordan.png"

export default function Hero() {
    return (
        <>
            <nav className="p-10 pt-52 lg:flex lg:flex-row -mt-10 md:flex md:flex-row">
                <div>
                    <h1 className="text-left font-bold lg:text-3xl space-y-3 tracking-wide text-4xl md:text-4xl md:w-48">
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

                    <h2 className="text-left lg:pt-16 pt-16 lg:w-[450px] md:w-60">
                        <ul className=" font-bold lg:text-xl tracking-wide text-3xl md:text-xl">
                            UNBEATABLE PERFORMANCE
                        </ul>
                        <p className="text-gray-400 lg:w-72 lg:text-base text-xl md:text-sm">
                            We've dedicated ourselves to crafting the perfect footwear for every basketball enthusiast.
                        </p>
                        <li className="flex mt-3 gap-3">
                            <img src="https://artemporary.files.wordpress.com/2014/05/asteriscofucsia.gif" className="w-16 animate-spin" style={{ animationDuration: "2s" }} ></img>
                            <ul className="text-6xl font-bold">2023</ul>
                        </li>
                    </h2>
                </div>

                <div className=" lg:w-[550px] lg:-mt-4 justify-center relative mx-auto lg:-ml-28 mt-20 md:-mt-0">
                    <i className="font-bold lg:text-7xl text-4xl text-center relative z-10" style={{ textShadow: '0 0 10px #ff0000' }}>
                        CRAFTED FOR CHAMPIONS
                    </i>

                    <img src={image} className="lg:w-[450px] transform rotate-[25deg] scale-x-[-1] items-center mx-auto lg:-mt-48 -mt-20 lg:ml-20"></img>
                    <a href="#">
                        <img src="https://cdn-icons-png.flaticon.com/128/5166/5166100.png" className="w-16  mx-auto absolute bottom-0 items-center justify-center lg:ml-60 animate-bounce ml-24"></img>
                    </a>

                </div>

                <div className="lg:ml-20 mt-16">
                    <h1 className="flex flex-row gap-3 lg:mt-5 md:-mt-5">
                        <img src="https://cdn-icons-png.flaticon.com/128/2989/2989981.png" className="h-10"></img>
                        <p className="w-10 text-left font-semibold text-base">
                            EXPLORE ME
                        </p>
                    </h1>

                    <h2 className="lg:mt-[115px] text-left mt-2 md:mt-[175px]">
                        <i className="text-pink-500 font-semibold text-xl md:text-base">LIMITED EDITION</i>
                        <p className="font-bold">NIKE AIR VAPORMAX PLUS</p>
                        <p className="">$320</p>
                        <ul className="mt-2 text-center flex gap-2">
                            <p className="rounded-full bg-red-600 w-6 text-red-600">.</p>
                            <p className="rounded-full bg-yellow-300 w-6 text-yellow-300">.</p>
                            <p className="rounded-full bg-pink-500 w-6 text-pink-500">.</p>
                            <p className="rounded-full bg-blue-500 w-6 text-blue-500">.</p>
                        </ul>
                        <p className="mt-5 flex gap-3">
                            <img src="https://cdn-icons-png.flaticon.com/128/420/420048.png" className="lg:w-10 md:w-7 w-10"></img>
                            <button className="lg:p-2  lg:px-5  md:py-1 md:px-4 rounded-full text-white bg-black hover:bg-transparent hover:border hover:border-black hover:text-black md:text-xs px-5 ">Add to Bag</button>
                        </p>
                    </h2>
                </div>


            </nav>
        </>
    )
}