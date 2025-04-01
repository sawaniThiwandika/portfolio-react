import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

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
            className={`mt-14 p-8 text-center rounded-2xl shadow-xl transition-all duration-300 border ${
                darkMode ? "border-gray-700 text-white" : "border-gray-200 text-gray-900"
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2
                className={`text-4xl font-extrabold mb-6 bg-gradient-to-r text-transparent bg-clip-text ${
                    darkMode ? "from-purple-400 to-purple-600" : "from-blue-500 to-purple-700"
                }`}
            >
                Get in Touch
            </h2>

            <p className="text-lg mb-8 opacity-80">
                Have a question or want to work together? Fill out the form below, and I’ll get back to you as soon as possible.
            </p>

            <form
                ref={formRef}
                onSubmit={sendEmail}
                className="max-w-lg mx-auto p-6 rounded-xl shadow-md space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border focus:ring-2 focus:outline-none"
                    required
                />
                <input
                    type="text"
                    name="contact_number"
                    placeholder="Your Contact Number"
                    value={formData.contact_number}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border focus:ring-2 focus:outline-none"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border focus:ring-2 focus:outline-none"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg border h-32 focus:ring-2 focus:outline-none"
                    required
                />
                <motion.button
                    type="submit"
                    className="w-full p-3 rounded-lg font-semibold text-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                >
                    Send Message
                </motion.button>
            </form>
        </motion.section>
    );
}