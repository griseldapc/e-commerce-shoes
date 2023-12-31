// Import statements
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// Component
const Header = () => {
    // State for the menu icon
    const [menuIcon, setIcon] = useState(false);

    // Function to handle smaller screen navigation
    const handleSmallerScreenNavigation = () => {
        setIcon(!menuIcon);
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('top-[9%]');
    }

    return (
        <nav className="flex justify-between items-center w-[92%] mx-auto bg-white">
            <div>
                <img className="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="..."></img>
            </div>
            <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${menuIcon ? '0' : '-100%'} md:w-auto w-full flex items-center px-5`}>
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                    <li>
                        <a className="hover:text-gray-500" href="#">Products</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Solution</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Resource</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Developers</a>
                    </li>
                    <li>
                        <a className="hover:text-gray-500" href="#">Pricing</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
                {menuIcon ? (
                    <AiOutlineClose onClick={handleSmallerScreenNavigation} className="text-3xl cursor-pointer md:hidden" />
                ) : (
                    <AiOutlineMenu onClick={handleSmallerScreenNavigation} className="text-3xl cursor-pointer md:hidden" />
                )}
            </div>
        </nav>
    );
}

export default Header;
