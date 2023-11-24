// Import statements
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Component
export default function Header() {
    // State for the menu icon
    const [menuIcon, setIcon] = useState(false);

    // Function to handle smaller screen navigation
    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
    }

    return (
        <header className="p-10 py-5 w-full ease-in duration-300 fixed top-0 left-0 z-20 bg-white">
            <nav className="max-w-[1366px] mx-auto h-[80px] flex justify-between items-center font-abc">
                <div className="relative z-10">
                    <img src="https://cdn-icons-png.flaticon.com/128/732/732084.png" alt="Description of the img" width="100" />
                </div>

                {/* Large screen navigation */}
                <ul className="hidden md:flex text-sm lg:text-[16px]  md:text-base lg:text-xl">
                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <a href="/">New & Featured</a>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <a href="/tentang_kita">Men</a>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF]">
                        <a href="/artikel">Women</a>
                    </li>
                    <li className="mr-4 lg:mr-8 hover:text-[#619AEF] z-10">
                        <a href="/galeri">Kids</a>
                    </li>
                    <li className="hover:text-[#619AEF] z-10">
                        <a href="/kontak">Sale</a>
                    </li>
                </ul>

                <div className="hidden md:flex">
                    <h1 className="flex relative z-10">
                        <p className="flex gap-7">
                        <img src="https://cdn-icons-png.flaticon.com/128/622/622669.png" className="w-5"></img>
          <img src="https://cdn-icons-png.flaticon.com/128/151/151910.png" className="w-5"></img>
          <img src="https://cdn-icons-png.flaticon.com/128/1288/1288704.png" className="w-5"></img>
                        </p>
                    </h1>
                </div>

                {/* Smaller screen navigation icons */}
                <div onClick={handleSmallerScreenNavigation} className="flex md:hidden px-3 ">
                    {menuIcon ? (
                        <AiOutlineClose size={30} className='text-black' />
                    ) : (
                        <AiOutlineMenu size={25} className='text-black' />
                    )}
                </div>

                {/* Smaller screens - navbar */}
                <div className={menuIcon ?
                    'md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center items-center w-full text-center h-screen bg-black text-white ease-in duration-300'
                    :
                    'md:hidden absolute top-[100px] right-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-white ease-in duration-300'
                }>
                    {/* Smaller screen navbar as */}
                    <div className="w-full">
                        <ul className="text-xl">
                            <li onClick={handleSmallerScreenNavigation} className="py-3 hover:text-[#619AEF] cursor-pointer">
                                <a href="/">New & Featured</a>
                            </li>
                            <li onClick={handleSmallerScreenNavigation} className="py-3 hover:text-[#619AEF] cursor-pointer">
                                <a href="/tentang_kita">Men</a>
                            </li>
                            <li onClick={handleSmallerScreenNavigation} className="py-3 hover:text-[#619AEF] cursor-pointer">
                                <a href="/artikel">Women</a>
                            </li>
                            <li onClick={handleSmallerScreenNavigation} className="py-3 hover:text-[#619AEF] cursor-pointer">
                                <a href="/galeri">Kids</a>
                            </li>
                            <li onClick={handleSmallerScreenNavigation} className="py-3 hover:text-[#619AEF] cursor-pointer">
                                <a href="/kontak">Sale</a>
                            </li>
                        </ul>
                        <div className="flex flex-col justify-center items-center mt-16">
                            <p onClick={handleSmallerScreenNavigation} className="flex- gap">
                            <img src="https://cdn-icons-png.flaticon.com/128/622/622669.png" className="w-5"></img>
          <img src="https://cdn-icons-png.flaticon.com/128/151/151910.png" className="w-5"></img>
          <img src="https://cdn-icons-png.flaticon.com/128/1288/1288704.png" className="w-5"></img>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
