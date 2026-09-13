import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ProjectsProps {
    darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
    const [showAll, setShowAll] = useState(false);

    const projects = [
        {
            name: "DOC-Flow - Document & Workflow Management System",
            description:
                "A configurable document and workflow management system developed as a group project in collaboration with IXD Labs. The system centralizes document management, automates workflows, supports role-based access, and provides configurable dashboards for improved process visibility.",
            technologies: [
                "React.js",
                "Python",
                "Django",
                "Django REST Framework",
                "MySQL",
                "AWS"
            ],
            link: "https://github.com/CodeCraft-Software-Project-46/Doc-Flow-Backend"
        },
        {
            name: "GreenShadow - Farm Management System",
            description:
                "GreenShadow is a full-stack farm management system designed to efficiently handle field operations, crop management, staff assignments, and vehicle tracking. It provides secure user authentication and includes logging and reporting features to monitor farm productivity.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Java",
                "Spring Boot",
                "Hibernate",
                "MySQL"
            ],
            link: "https://github.com/sawaniThiwandika/green-shadow-backend"
        },
        {
            name: "Uni-Thaksalawa - Student Learning Platform",
            description:
                "A student-teacher platform that allows users to discover, enroll in, and manage tuition classes.",
            technologies: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js"
            ],
            link: "https://github.com/Lumos-Solution/uni-thaksalawa-frontend"
        },
        {
            name: "Edge Maker V1 - CNC Foam Cutting Machine",
            description:
                "A microcontroller-based CNC foam-cutting system that converts an input image into a cutting design and executes it through stepper-motor-driven movement. The project also includes a web application for design file management.",
            technologies: [
                "Arduino",
                "ESP32",
                "GRBL Firmware",
                "React.js",
                "Firebase"
            ],
            link: "https://cnc-foam-cutter.web.app"
        },
        {
            name: "MyDiary - Notes App",
            description:
                "A mobile application that allows users to create, edit, and organize notes with optional reminders. It includes secure user authentication using JWT tokens.",
            technologies: [
                "React Native",
                "Expo",
                "TypeScript",
                "Node.js",
                "Express.js",
                "MySQL",
                "Prisma ORM",
                "JWT Authentication"
            ],
            link: "https://github.com/sawaniThiwandika/My-Diary-Mobile-App.git"
        },
        {
            name: "POS System",
            description:
                "A web-based Point of Sale system designed to simplify sales transactions, inventory tracking, and customer management. The system supports invoice generation, real-time stock updates, and user-friendly interfaces for small and medium-sized businesses.",
            technologies: [
                "HTML",
                "CSS",
                "JavaScript",
                "Java",
                "Spring",
                "Hibernate",
                "MySQL",
                "JDBC"
            ],
            link: "https://github.com/sawaniThiwandika/pos-system-with-html"
        },
        {
            name: "DressAura - Dress Rental & Tailoring Management System",
            description:
                "A business management system for dress rentals and custom tailoring services. It helps manage inventory, customer orders, rental tracking, payments, and tailoring progress efficiently.",
            technologies: [
                "Java",
                "JavaFX",
                "MySQL",
                "JDBC"
            ],
            link: "https://github.com/sawaniThiwandika/dressaura"
        },
        {
            name: "Chat Application",
            description:
                "A real-time chat application built using JavaFX and Java Sockets. It allows users to send text messages, images, and media while maintaining chat history in a MySQL database, with support for multi-user chat rooms and threading.",
            technologies: [
                "Java",
                "JavaFX",
                "Java Sockets",
                "MySQL",
                "JDBC",
                "Multithreading"
            ],
            link: "https://github.com/sawaniThiwandika/chat-room.git"
        },
        {
            name: "BookWorm - Library Management System",
            description:
                "A JavaFX-based library management system that enables users and administrators to manage books, track borrowing and return history, and handle user accounts. It also includes authentication and overdue fine calculation.",
            technologies: [
                "Java",
                "JavaFX",
                "Hibernate",
                "MySQL"
            ],
            link: "https://github.com/sawaniThiwandika/library-management-system"
        }
    ];

    // Show first 6 projects initially
    const visibleProjects = showAll
        ? projects
        : projects.slice(0, 6);

    return (
        <section
            id="projects"
            className="mt-12 p-6 px-12 flex flex-col items-center justify-center text-center"
        >
            <h2
                className={`text-4xl font-bold ${
                    darkMode ? "text-purple-400" : "text-purple-600"
                } mb-6`}
            >
                My Work So Far
            </h2>

            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                {visibleProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 border rounded-lg shadow-lg transition-transform duration-300 flex flex-col items-center justify-center ${
                            darkMode
                                ? "bg-gray-900 border-gray-700 shadow-purple-500/50"
                                : "bg-white border-gray-300 shadow-lg"
                        } hover:scale-105`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.05
                        }}
                    >
                        <h3
                            className={`text-xl font-bold ${
                                darkMode
                                    ? "text-purple-300"
                                    : "text-purple-600"
                            }`}
                        >
                            {project.name}
                        </h3>

                        <p
                            className={`mt-2 ${
                                darkMode
                                    ? "text-gray-400"
                                    : "text-gray-700"
                            } text-center`}
                        >
                            {project.description}
                        </p>

                        <p
                            className={`mt-2 font-semibold ${
                                darkMode
                                    ? "text-purple-400"
                                    : "text-purple-600"
                            }`}
                        >
                            Technologies:{" "}
                            {project.technologies.join(", ")}
                        </p>

                        <a
                            href={project.link}
                            className={`mt-4 inline-flex items-center gap-2 font-semibold ${
                                darkMode
                                    ? "text-purple-300 hover:text-purple-400"
                                    : "text-purple-600 hover:text-purple-700"
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                className={
                                    darkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }
                            >
                                View on GitHub
                            </span>

                            <FaGithub
                                className={`text-2xl ${
                                    darkMode
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            />
                        </a>
                    </motion.div>
                ))}
            </div>

            {/* View More / View Less Button */}
            {projects.length > 6 && (
                <motion.button
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-10 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 ${
                        darkMode
                            ? "bg-purple-600 text-white hover:bg-purple-700"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                    }`}
                >
                    {showAll ? "View Less" : "View More"}

                    {showAll ? (
                        <FaChevronUp />
                    ) : (
                        <FaChevronDown />
                    )}
                </motion.button>
            )}
        </section>
    );
}