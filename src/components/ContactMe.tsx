import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export function ContactMe() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        contact_number: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs.sendForm(
                "service_ddae5i6",
                "template_bxfeb73",
                formRef.current,
                "b4RU0kERQGNgbQ-o9"
            ).then(
                () => alert("✅ Message Sent Successfully!"),
                (error) => alert("❌ Failed to send message: " + error.text)
            );
        }
    };

    return (
        <section id="contact" className="p-6 text-center">
            <h2 className="text-3xl font-semibold text-blue-400 mb-4">Contact Me</h2>

            <form ref={formRef} onSubmit={sendEmail} className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                    required
                />
                <input
                    type="text"
                    name="contact_number"
                    placeholder="Your Contact Number"
                    value={formData.contact_number}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none h-32"
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition duration-300">
                    Send Message
                </button>
            </form>

            <div className="mt-6 flex justify-center space-x-6">
                <a href="https://github.com/sawaniThiwandika" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-gray-400">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/sawaniThiwandika" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-2xl hover:text-blue-300">
                    <FaLinkedin />
                </a>
                <a href="mailto:sawani@example.com" className="text-pink-400 text-2xl hover:text-pink-300">
                    <FaEnvelope />
                </a>
            </div>
        </section>
    );
}
