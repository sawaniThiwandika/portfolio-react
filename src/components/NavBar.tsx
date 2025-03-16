import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useState } from "react";
interface NavBarProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export function NavBar({ darkMode, setDarkMode}:NavBarProps ) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={`top-5 p-4 w-11/12 flex items-center justify-between 
                        ${darkMode ? "bg-black text-white border border-purple-800" : "bg-white text-gray-900 border border-purple-300"} 
                        relative border rounded-md`}
        >
            <img src="" alt="Logo" className="h-14 w-auto p-2 rounded-lg" />

            <div className="hidden md:flex space-x-8 items-center">
                <a
                    href="#about"
                    className="text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-purple-500 transition"
                >
                    About
                </a>
                <a
                    href="#service"
                    className="text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-purple-500 transition"
                >
                    Service
                </a>
                <a
                    href="#projects"
                    className="text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-purple-500 transition"
                >
                    Projects
                </a>

                <a
                    href="#contact"
                    className="text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-purple-500 transition"
                >
                    Contact
                </a>

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                    {darkMode ? <FaSun className="text-gray-100 text-xl"/> :
                        <FaMoon className="text-gray-800 text-xl"/>}
                </button>
            </div>

            <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes/> : <FaBars/>}
            </button>

            {isOpen && (
                <div
                    className={`absolute top-16 right-0 w-56 p-4 flex flex-col space-y-4 rounded-lg shadow-lg z-20
                                 ${darkMode ? "bg-gradient-to-r from-gray-800 via-purple-700 to-gray-800 text-white" : "bg-gradient-to-r from-white via-gray-200 to-white text-gray-900"} 
                                 md:hidden`}
                >
                    <a
                        href="#about"
                        className="text-lg border-b-2 border-transparent hover:border-purple-500 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </a>
                    <a
                        href="#service"
                        className="text-lg border-b-2 border-transparent hover:border-purple-500 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Service
                    </a>
                    <a
                        href="#projects"
                        className="text-lg border-b-2 border-transparent hover:border-purple-500 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-lg border-b-2 border-transparent hover:border-purple-500 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </a>

                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 border-2 border-purple-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center justify-center"
                    >
                        {darkMode ? <FaSun className="text-white-400 text-xl"/> :
                            <FaMoon className="text-gray-800 text-xl"/>}
                    </button>
                </div>
            )}
        </nav>
    );
}
