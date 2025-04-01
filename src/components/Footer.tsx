import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo/logo.png"
interface FooterProps {
    darkMode: boolean;
}
export function Footer({ darkMode }: FooterProps) {

    return (
        <footer className={`w-full py-6 ${darkMode ? "bg-gray-950" : "bg-gray-800"} text-white`}>
            <div className="container mx-auto flex flex-col items-center space-y-4">


                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Sawani Thiwandika Logo"
                        width={150}

                        className="rounded-full"
                    />

                </div>


                <div className="flex space-x-6">
                    <a
                        href="https://github.com/sawaniThiwandika"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-2xl hover:text-white transition duration-300"
                        aria-label="GitHub"
                    >
                        <FaGithub/>
                    </a>
                    <a
                        href="https://linkedin.com/in/sawaniThiwandika"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-2xl hover:text-blue-300 transition duration-300"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin/>
                    </a>
                    <a
                        href="https://instagram.com/thiwandika_w.h.s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-400 text-2xl hover:text-pink-300 transition duration-300"
                        aria-label="Instagram"
                    >
                        <FaInstagram/>
                    </a>
                    <a
                        href="mailto:thiwandika.whs02@gmail.com"
                        className="text-red-400 text-2xl hover:text-red-300 transition duration-300"
                        aria-label="Email"
                    >
                        <FaEnvelope/>
                    </a>
                </div>
                <p className="text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Sawani Thiwandika. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
