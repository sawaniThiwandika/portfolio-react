import { motion } from "framer-motion";

export function Projects() {
    const projects = [
        {
            name: "GreenShadow - Farm Management System",
            description: "GreenShadow is a full-stack farm management system designed to efficiently handle field operations, crop management, staff assignments, and vehicle tracking. It provides secure user authentication and role-based access. The system also includes logging and reporting features to monitor farm productivity.",
            technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT Authentication", "Tailwind CSS"],
            link: "https://github.com/sawaniThiwandika/green-shadow-frontend-with-react"
        },
        {
            name: "POS System",
            description: "A web-based Point of Sale (POS) system that simplifies sales transactions, inventory tracking, and customer management. The system supports invoice generation, real-time stock updates, and user-friendly interfaces for easy navigation. It is designed for small to medium-sized businesses.",
            technologies: ["HTML", "CSS", "JavaScript", "Java", "Spring", "Hibernate", "MySQL", "JDBC"],
            link: "https://github.com/sawaniThiwandika/pos-system-with-html"
        },
        {
            name: "MyDiary - Notes App",
            description: "MyDiary is a mobile application that allows users to create, edit, and organize their notes with optional reminders and categories. The app supports offline storage and data synchronization with a backend server. It features a secure authentication system using JWT tokens.",
            technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express.js", "MySQL", "Prisma ORM", "JWT Authentication"],
            link: "https://github.com/sawaniThiwandika/green-shadow-frontend-with-react"
        }
    ];

    return (
        <section id="projects" className="p-6">
            <h2 className="text-3xl font-semibold text-purple-400 mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="p-4 border rounded-lg shadow-lg bg-gray-800 text-white relative overflow-hidden"
                        initial={{ boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)" }}
                        animate={{
                            boxShadow: [
                                "0px 0px 10px rgba(255, 255, 255, 0.2)",
                                "0px 0px 20px rgba(255, 255, 255, 0.5)",
                                "0px 0px 10px rgba(255, 255, 255, 0.2)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
                    >
                        <h3 className="text-xl font-bold text-blue-300">{project.name}</h3>
                        <p className="mt-2 text-gray-400">{project.description}</p>
                        <p className="mt-2 text-gray-300"><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                        <a
                            href={project.link}
                            className="mt-3 inline-block text-blue-400 hover:text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>

                        <div className="shine-effect"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
