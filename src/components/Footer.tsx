import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-gray-800 p-6 mt-auto">
            <div className="flex justify-center space-x-6">
                <a href="https://github.com/sawaniThiwandika" target="_blank" rel="noopener noreferrer"
                   className="text-white text-2xl hover:text-gray-400 transition-colors duration-300">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/sawaniThiwandika" target="_blank" rel="noopener noreferrer"
                   className="text-blue-400 text-2xl hover:text-blue-300 transition-colors duration-300">
                    <FaLinkedin />
                </a>
                <a href="mailto:sawani@example.com" className="text-pink-400 text-2xl hover:text-pink-300 transition-colors duration-300">
                    <FaEnvelope />
                </a>
            </div>
        </footer>
    );
}
