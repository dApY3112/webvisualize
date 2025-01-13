import React, { useState } from 'react';
import logo from "../assets/logo.svg";

const Navbar = ({ scrollToSection, contactRef, servicesRef, aboutRef }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container-sp mx-auto">   
            <nav className="relative bg-white shadow dark:bg-white">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center bg-white">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img
                                className="w-auto h-4 sm:h-7"
                                src={logo}
                                alt=""
                            />
                        </a>
                        <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-body-md dark:text-body-md text-primary-600 hover:text-body-md text-primary-600 dark:hover:text-body-md text-primary-600 focus:outline-none focus:text-body-md text-primary-600 dark:focus:text-body-md text-primary-600"
                                    aria-label="toggle menu"
                                >
                                    {!isOpen ? (
                                        <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
>
    <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h16"
    />
</svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                        </div>
                    </div>

                    <div
                        className={`bg-white absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
                            isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                        }`}
                    >
                        <div className="bg-white flex flex-col md:flex-row md:mx-6">
                            <a
                                className="my-2 text-body-md transition-colors duration-300 transform dark:text-primary-600 hover:text-primary-100 dark:hover:text-primary-100 md:mx-4 md:my-0 cursor-pointer   "
                               onClick={() => scrollToSection(contactRef)}
                            >
                                Contact
                            </a>
                            <a  
                                className="my-2 text-body-md transition-colors duration-300 transform dark:text-primary-600 hover:text-primary-100 dark:hover:text-primary-100 md:mx-4 md:my-0 cursor-pointer"
                               onClick={() => scrollToSection(servicesRef)}
                            >
                                Services
                            </a>
                            <a
                                className="my-2 text-body-md transition-colors duration-300 transform dark:text-primary-600 hover:text-primary-100 dark:hover:text-primary-100 md:mx-4 md:my-0 cursor-pointer"
                               onClick={() => scrollToSection(aboutRef)} 
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
