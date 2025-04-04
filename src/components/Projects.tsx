import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectsProps {
    darkMode: boolean;
}

export function Projects({ darkMode }: ProjectsProps) {
    const projects = [
        {
            name: "GreenShadow - Farm Management System",
            description: "GreenShadow is a full-stack farm management system designed to efficiently handle field" +
                " operations, crop management, staff assignments, and vehicle tracking. It provides secure user authentication." +
                " The system also includes logging and reporting features to monitor farm productivity.",
            technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT Authentication", "Tailwind CSS"],
            link: "https://github.com/sawaniThiwandika/green-shadow-frontend-with-react"
        },
        {
            name: "POS System",
            description: "A web-based Point of Sale (POS) system that simplifies sales transactions, inventory tracking," +
                " and customer management. The system supports invoice generation, real-time stock updates, and user-friendly" +
                "interfaces for easy navigation. It is designed for small to medium-sized businesses.",
            technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring", "Hibernate", "MySQL", "JDBC"],
            link: "https://github.com/sawaniThiwandika/pos-system-with-html"
        },
        {
            name: "MyDiary - Notes App",
            description: "MyDiary is a mobile application that allows users to create, edit, and organize their notes with" +
                " optional reminders.It features a secure authentication system using JWT tokens.",
            technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT Authentication"],
            link: "https://github.com/sawaniThiwandika/green-shadow-frontend-with-react"
        },
        {
            name: "DressAura - Dress Rental & Tailoring Management System",
            description: "DressAura is a business management system for dress rentals and custom tailoring services. " +
                "It allows businesses to manage inventory, customer orders, rental tracking, payments, and tailoring progress efficiently.",
            technologies: ["Java", "JavaFX", "MySQL", "JDBC"],
            link: "https://github.com/sawaniThiwandika/dressaura"
        },
        {
            name: "Chat Application",
            description: "A real-time chat application built using JavaFX and Java Sockets for communication." +
                " It allows users to send text messages, images, and media while maintaining chat history in a MySQL database." +
                " Supports multi-user chat rooms and threading for better performance.",
            technologies: ["JavaFX", "Java", "MySQL", "JDBC", "Java Sockets"],
            link: "https://github.com/sawaniThiwandika/chat-room.git"
        },

        {
            name: "BookWorm - Library Management System",
            description: "A JavaFX-based Library Management System that enables both users and admins to manage books, track borrow/return history, and handle user accounts. Admins can add, update, and remove books, while users can search, borrow, and return books. The system also features authentication and fine calculation for overdue returns.",
            technologies: ["Java", "JavaFX", "Hibernate", "MySQL"],
            link: "https://github.com/sawaniThiwandika/library-management-system"
        }

    ];

    return (
        <section id="projects" className="mt-12 p-6 px-12 flex flex-col items-center justify-center text-center">
            <h2 className={`text-4xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-6`}>
                My Work So Far
            </h2>
            <br/>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`p-6 border rounded-lg shadow-lg transition-transform duration-300 flex flex-col items-center justify-center ${
                            darkMode ? 'bg-gray-900 border-gray-700 shadow-purple-500/50' : 'bg-white border-gray-300 shadow-lg'
                        } hover:scale-105`}
                        initial={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)" }}
                        animate={{
                            boxShadow: [
                                darkMode
                                    ? "0px 0px 10px rgba(200, 162, 200, 0.2)"
                                    : "0px 0px 10px rgba(255, 182, 193, 0.2)",
                                darkMode
                                    ? "0px 0px 20px rgba(180, 100, 255, 0.5)"
                                    : "0px 0px 20px rgba(138, 43, 226, 0.5)",
                                darkMode
                                    ? "0px 0px 10px rgba(180, 180, 255, 0.2)"
                                    : "0px 0px 10px rgba(230, 230, 250, 0.2)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <h3 className={`text-xl font-bold ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                            {project.name}
                        </h3>
                        <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-700'} text-center`}>
                            {project.description}
                        </p>
                        <p className={`mt-2 font-semibold ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                            Technologies: {project.technologies.join(", ")}
                        </p>
                        <a
                            href={project.link}
                            className={`mt-4 inline-flex items-center gap-2 font-semibold ${
                                darkMode ? 'text-purple-300 hover:text-purple-400' : 'text-purple-600 hover:text-purple-700'
                            }`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>View on GitHub</span>
                            <FaGithub className={`text-2xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
