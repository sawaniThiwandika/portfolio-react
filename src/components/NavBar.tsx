import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo/logo.png";
import logo_black from "../assets/logo/logo_black.png";

interface NavBarProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavBar({ darkMode, setDarkMode }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav
            className={`fixed top-0 left-0 w-full px-6 py-4 flex items-center justify-between z-50 
                        ${darkMode ? "bg-black text-white border-b border-gray-700" : "bg-white text-gray-900 border-b border-gray-300"} 
                        shadow-md`}
        >

            <div className="flex items-center">
                <img src={logo} alt="Logo" className={`h-12 w-auto ${darkMode ? "" : "hidden"}`} />
                <img src={logo_black} className={`h-12 w-auto ${darkMode ? "hidden" : ""}`} />
            </div>

            <div className="hidden md:flex space-x-8 items-center">
                {["About", "Projects", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-lg font-medium border-b-2 border-transparent hover:border-purple-500 transition"
                    >
                        {item}
                    </a>
                ))}

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 rounded-full transition hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    {darkMode ? <FaSun className="text-yellow-400 text-xl" /> : <FaMoon className="text-gray-800 text-xl" />}
                </button>
            </div>

            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div
                className={`fixed inset-0 bg-black backdrop-blur-sm transition-all transform ${isOpen ? "translate-x-0" : "translate-x-full"} 
                            flex flex-col items-center justify-center space-y-6 md:hidden z-50 rounded-lg shadow-lg 
                            ${darkMode ? "bg-gray-800 bg-opacity-70 " : "bg-purple-300 text-purple-900 bg-opacity-90 "}`}
            >
                {["About", "Projects", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-2xl font-semibold border-b-2 border-transparent hover:border-purple-400 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        {item}
                    </a>
                ))}

                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-3 rounded-lg border border-purple-500 text-white hover:bg-purple-600 transition flex items-center justify-center"
                >
                    {darkMode ? <FaSun className="text-yellow-400 text-2xl" /> : <FaMoon className="text-white text-2xl" />}
                </button>

                {/* Close Button */}
                <button className={`absolute top-6 right-6 text-3xl ${darkMode?"text-white":"text:black"}`} onClick={() => setIsOpen(false)}>
                    <FaTimes />
                </button>
            </div>
        </nav>
    );
}
