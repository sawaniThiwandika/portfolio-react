import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

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
                () => {
                    Swal.fire({
                        title: "Success!",
                        text: "✅ Message Sent Successfully!",
                        icon: "success",
                        confirmButtonText: "Cool",
                    });
                },
                (error) => {
                    Swal.fire({
                        title: "Oops!",
                        text: `❌ Failed to send message: ${error.text}`,
                        icon: "error",
                        confirmButtonText: "Try Again",
                    });
                }
            );
        }
    };

    return (
        <motion.section
            id="contact"
            className={`w-full mt-24 min-h-screen flex items-center justify-center p-0 bg-gradient-to-b ${
                darkMode ? "from-gray-900 via-gray-800 to-black text-gray-300" : "from-blue-100 via-purple-200 to-purple-300 text-gray-900 "
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

                <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
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
                            whileHover={{ scale: 1.05 }}
                        >
                            <FaPaperPlane className="w-5 h-5" />
                            Send
                        </motion.button>
                    </form>
                </div>
            </div>
        </motion.section>
    );
}
