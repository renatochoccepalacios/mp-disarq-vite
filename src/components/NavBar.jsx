import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { HiX } from "react-icons/hi";
export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(false);




    const toggleMenu = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 0 ? setScrollY(true) : setScrollY(false);
        }
        // cuando el usuario haga scroll se ejecutara este evento
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Limpiar el evento al desmontar el componente
        }
    }, []);// El array vacío [] significa que este efecto solo se ejecutará una vez, cuando el componente se monte


    // Este efecto es para manejar el overflow del body según isOpen
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <header className={`grid  z-50 fixed w-full transition-all duration-300 ease-in-out   gap-[2rem] `}>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-[rgba(0,0,0,0.75)] md:hidden"
                    onClick={toggleMenu} // Opcional: cerrar al hacer click en el fondo
                />
            )}
            <div className={` z-50  transition-all duration-300 ease-in-out text-principal  ${isOpen || scrollY ? 'bg-brown' : 'bg-transparent'} `} >
                <nav className='max-w-[1260px] grid  m-auto md:flex p-4 relative grid-cols-2 gap-2.5 md:grid-cols-2 justify-between w-full items-center'>
                    <h1 className='text-2xl font-bold'>Mp Disarq</h1>

                    <button onClick={toggleMenu} className='z-10 justify-self-end items-center md:hidden cursor-pointer'>
                        {isOpen ? <HiX className='text-2xl' /> : <GiHamburgerMenu className='text-2xl' />}
                    </button>

                    <ul className={`p-4 order-2 w-[200px] absolute  top-full left-0 bg-acento  backdrop-blur-md flex gap-3 flex-col transition-all duration-300 ease-in-out ${isOpen ? 'menu-open ' : 'menu-closed'} h-screen md:static md:flex-row md:justify-center md:gap-[4rem] md:w-auto md:p-0 md:h-auto md:backdrop-blur-0 md:bg-transparent`}>
                        <li><a href="#home" className='uppercase'>Home</a></li>
                        <li><a href="#about" className='uppercase'>About</a></li>
                        <li><a href="#services" className='uppercase'>Services</a></li>
                        <li><a href="#contact" className='uppercase'>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}