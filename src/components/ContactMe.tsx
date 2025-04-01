import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane} from "react-icons/fa";

interface ContactMeProps {
    darkMode: boolean;
}

export function ContactMe({ darkMode }: ContactMeProps) {
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
        <motion.section
            id="contact"
            className={`w-full mt-24 min-h-screen flex items-center justify-center p-0 bg-gradient-to-b ${
                darkMode ? "from-gray-900 via-gray-800 to-black text-gray-300" : "from-blue-100 via-purple-200 to-purple-300 text-gray-900"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-full max-w-6xl mx-auto p-8 rounded-2xl bg-opacity-90">
                <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-blue-600">
                    Get in Touch
                </h2>
                <p className="text-lg text-center mb-8 opacity-80">
                    Have a question or want to work together? Fill out the form below, and I’ll get back to you as soon as possible.
                </p>

                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <form
                        ref={formRef}
                        onSubmit={sendEmail}
                        className={`w-full lg:w-2/3 p-6 rounded-xl shadow-md space-y-4 ${darkMode ? "bg-gray-800 bg-opacity-70 text-gray-200" : ""}`}
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}
                            required
                        />
                        <input
                            type="text"
                            name="contact_number"
                            placeholder="Your Contact Number"
                            value={formData.contact_number}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg h-32 focus:ring-2 focus:ring-purple-500 outline-none ${darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-900"}`}
                            required
                        />
                        <motion.button
                            type="submit"
                            className="w-full p-3 rounded-lg font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg flex items-center justify-center gap-3"
                            whileHover={{scale: 1.05}}
                        >
                            <FaPaperPlane className="w-5 h-5"/>
                            Send
                        </motion.button>

                </form>

                <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start space-y-6">
                    <h3 className="text-2xl font-semibold">Connect With Me</h3>
                    <div className="flex flex-col space-y-4 text-lg">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-blue-600 hover:text-blue-800 transition-all"
                            >
                                <FaLinkedin className="w-7 h-7"/> LinkedIn
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-700 hover:text-gray-900 transition-all"
                            >
                                <FaGithub className="w-7 h-7"/> GitHub
                            </a>
                            <a
                                href="mailto:example@example.com"
                                className="flex items-center gap-3 text-purple-600 hover:text-purple-800 transition-all"
                            >
                                <FaEnvelope className="w-7 h-7"/> Email Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
