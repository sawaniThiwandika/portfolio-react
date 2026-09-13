
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import Swal from "sweetalert2";

interface ContactMeProps {
    darkMode: boolean;
}

interface FormData {
    name: string;
    contact_number: string;
    email: string;
    message: string;
}

interface FormErrors {
    name?: string;
    contact_number?: string;
    email?: string;
    message?: string;
}

export function ContactMe({ darkMode }: ContactMeProps) {
    const formRef = useRef<HTMLFormElement>(null);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        contact_number: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSending, setIsSending] = useState(false);

    // ==============================
    // VALIDATE INDIVIDUAL FIELD
    // ==============================

    const validateField = (name: string, value: string): string => {
        let error = "";

        // NAME VALIDATION
        if (name === "name") {
            const trimmedName = value.trim();

            if (!trimmedName) {
                error = "Name is required";
            } else if (trimmedName.length < 2) {
                error = "Name must be at least 2 characters";
            } else if (!/^[a-zA-Z\s]+$/.test(trimmedName)) {
                error = "Name can only contain letters";
            }
        }

        // ==============================
        // CONTACT NUMBER VALIDATION
        // Sri Lankan Mobile Numbers
        // ==============================

        if (name === "contact_number") {
            // Remove spaces, hyphens and brackets
            const phone = value.replace(/[\s\-()]/g, "");

            if (!phone) {
                error = "Contact number is required";
            } else if (!/^(\+94|94|0)7[0-9]{8}$/.test(phone)) {
                error =
                    "Enter a valid Sri Lankan mobile number (e.g. 0771234567)";
            }
        }

        // ==============================
        // EMAIL VALIDATION
        // ==============================

        if (name === "email") {
            const email = value.trim();

            // More reliable email pattern
            const emailRegex =
                /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

if (!email) {
    error = "Email address is required";
} else if (email.length > 254) {
    error = "Email address is too long";
} else if (!emailRegex.test(email)) {
    error = "Enter a valid email address (e.g. name@gmail.com)";
}
}

// ==============================
// MESSAGE VALIDATION
// ==============================

if (name === "message") {
    const trimmedMessage = value.trim();

    if (!trimmedMessage) {
        error = "Message is required";
    } else if (trimmedMessage.length < 10) {
        error = "Message must be at least 10 characters";
    }
}

return error;
};

// ==============================
// VALIDATE ENTIRE FORM
// ==============================

const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    const nameError = validateField("name", formData.name);
    const contactError = validateField(
        "contact_number",
        formData.contact_number
    );
    const emailError = validateField("email", formData.email);
    const messageError = validateField(
        "message",
        formData.message
    );

    if (nameError) {
        newErrors.name = nameError;
    }

    if (contactError) {
        newErrors.contact_number = contactError;
    }

    if (emailError) {
        newErrors.email = emailError;
    }

    if (messageError) {
        newErrors.message = messageError;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
};

// ==============================
// HANDLE INPUT CHANGE
// ==============================

const handleChange = (
    e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >
) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));

    // Validate field while typing
    const error = validateField(name, value);

    setErrors((prev) => ({
        ...prev,
        [name]: error,
    }));
};

// ==============================
// SEND EMAIL
// ==============================

const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate before sending
    const isValid = validateForm();

    // Stop submission if validation fails
    if (!isValid) {
        return;
    }

    // Check form reference
    if (!formRef.current) {
        return;
    }

    setIsSending(true);

    try {
        await emailjs.sendForm(
            "service_uyrq558",
            "template_bxfeb73",
            formRef.current,
            "ihrzhSRV16NiuaTZ7"
        );

        // Success popup
        Swal.fire({
            title: "Success!",
            text: "Message Sent Successfully!",
            icon: "success",
            confirmButtonText: "OK",
        });

        // Clear form
        setFormData({
            name: "",
            contact_number: "",
            email: "",
            message: "",
        });

        // Clear errors
        setErrors({});

    } catch (error) {
        console.error("Email sending failed:", error);

        // Error popup
        Swal.fire({
            title: "Oops!",
            text: "Failed to send message. Please try again.",
            icon: "error",
            confirmButtonText: "Try Again",
        });

    } finally {
        setIsSending(false);
    }
};

return (
    <motion.section
        id="contact"
        className={`w-full mt-24 min-h-screen flex items-center justify-center p-0 bg-gradient-to-b ${
            darkMode
                ? "from-gray-900 via-gray-800 to-black text-gray-300"
                : "from-blue-100 via-purple-200 to-purple-300 text-gray-900"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="w-full max-w-6xl mx-auto p-8 rounded-2xl">

            {/* TITLE */}

            <h2 className="text-4xl font-extrabold mb-6 text-center bg-gradient-to-r text-transparent bg-clip-text from-purple-500 to-blue-600">
                Get In Touch
            </h2>

            <p className="text-lg text-center mb-8 opacity-80">
                Have a question or want to work together?
                Fill out the form below, and I'll get back to you
                as soon as possible.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-12">

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    noValidate
                    className={`w-full lg:w-2/3 p-6 rounded-xl shadow-md space-y-4 ${
                        darkMode
                            ? "bg-gray-800 bg-opacity-70 text-gray-200"
                            : "bg-white bg-opacity-70"
                    }`}
                >

                    {/* ========================= */}
                    {/* NAME */}
                    {/* ========================= */}

                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg outline-none border-2 transition-all duration-200 ${
                                errors.name
                                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                                    : "border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                            } ${
                                darkMode
                                    ? "bg-gray-700 text-gray-200"
                                    : "bg-white text-gray-900"
                            }`}
                        />

                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* ========================= */}
                    {/* CONTACT NUMBER */}
                    {/* ========================= */}

                    <div>
                        <input
                            type="tel"
                            name="contact_number"
                            placeholder="Your Contact Number"
                            value={formData.contact_number}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg outline-none border-2 transition-all duration-200 ${
                                errors.contact_number
                                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                                    : "border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                            } ${
                                darkMode
                                    ? "bg-gray-700 text-gray-200"
                                    : "bg-white text-gray-900"
                            }`}
                        />

                        {errors.contact_number && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.contact_number}
                            </p>
                        )}
                    </div>

                    {/* ========================= */}
                    {/* EMAIL */}
                    {/* ========================= */}

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 rounded-lg outline-none border-2 transition-all duration-200 ${
                                errors.email
                                    ? "border-red-500 focus:ring-2 focus:ring-red-400"
                                    : "border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                            } ${
                                darkMode
                                    ? "bg-gray-700 text-gray-200"
                                    : "bg-white text-gray-900"
                            }`}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    {/* ========================= */}
                    {/* MESSAGE */}
                    {/* ========================= */}

                    <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full p-3 rounded-lg h-32 outline-none border-2 transition-all duration-200 resize-none ${
                                    errors.message
                                        ? "border-red-500 focus:ring-2 focus:ring-red-400"
                                        : "border-transparent focus:border-purple-500 focus:ring-2 focus:ring-purple-300"
                                } ${
                                    darkMode
                                        ? "bg-gray-700 text-gray-200"
                                        : "bg-white text-gray-900"
                                }`}
                            />

                        {errors.message && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.message}
                            </p>
                        )}
                    </div>

                    {/* ========================= */}
                    {/* SEND BUTTON */}
                    {/* ========================= */}

                    <motion.button
                        type="submit"
                        disabled={isSending}
                        className={`w-full p-3 rounded-lg font-semibold text-lg transition-all duration-300 text-white flex items-center justify-center gap-3 ${
                            isSending
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg"
                        }`}
                        whileHover={
                            !isSending
                                ? { scale: 1.03 }
                                : {}
                        }
                        whileTap={
                            !isSending
                                ? { scale: 0.98 }
                                : {}
                        }
                    >
                        <FaPaperPlane className="w-5 h-5" />

                        {isSending
                            ? "Sending..."
                            : "Send Message"}
                    </motion.button>

                </form>

            </div>
        </div>
    </motion.section>
);
}
