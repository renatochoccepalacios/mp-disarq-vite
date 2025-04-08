import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className='grid bg-gray-800 fixed w-full gap-[2rem] text-white'>
            <nav className='grid md:flex p-4 relative grid-cols-2 gap-2.5 md:grid-cols-2 justify-between w-full items-center'>
                <h1 className='text-2xl font-bold'>My Website</h1>

                <button onClick={toggleMenu} className='z-10 justify-self-end items-center md:hidden'>
                    <GiHamburgerMenu />
                </button>

                <ul className={`p-4 order-2 w-full absolute  top-full left-0 bg-gray-800/70 backdrop-blur-md flex gap-3 flex-col transition-all duration-300 ease-in-out ${isOpen ? 'menu-open' : 'menu-closed'} h-screen md:static md:flex-row md:justify-center md:gap-[4rem] md:w-auto md:p-0 md:h-auto md:backdrop-blur-0 md:bg-transparent`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}