import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export function ContactMe() {
    return (
        <section id="contact" className="p-6 text-center">
            <h2 className="text-3xl font-semibold text-blue-400">Contact Me</h2>
            <div className="mt-4 flex justify-center space-x-6">
                <a href="https://github.com/sawaniThiwandika" className="text-white text-2xl"><FaGithub /></a>
                <a href="https://linkedin.com/in/sawaniThiwandika" className="text-blue-400 text-2xl"><FaLinkedin /></a>
                <a href="mailto:sawani@example.com" className="text-pink-400 text-2xl"><FaEnvelope /></a>
            </div>
        </section>
    );
}